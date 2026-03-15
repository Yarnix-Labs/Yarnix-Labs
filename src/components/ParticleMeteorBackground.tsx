import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  color: string;
  pulse: number;
  pulseSpeed: number;
}

interface Meteor {
  x: number;
  y: number;
  length: number;
  speed: number;
  opacity: number;
  angle: number;
  life: number;
  maxLife: number;
  width: number;
}

const ParticleMeteorBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let particles: Particle[] = [];
    let meteors: Meteor[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    const isMobile = window.innerWidth < 768;

    const createParticles = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      const count = isMobile ? Math.floor((w * h) / 18000) : Math.floor((w * h) / 6000);

      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.15,
        speedY: (Math.random() - 0.5) * 0.1,
        opacity: Math.random() * 0.4 + 0.1,
        color: Math.random() > 0.25 ? "#22c55e" : "#ffffff",
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.01 + 0.005,
      }));
    };

    const spawnMeteor = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      meteors.push({
        x: Math.random() * w * 1.2,
        y: -20,
        length: isMobile ? Math.random() * 60 + 30 : Math.random() * 120 + 60,
        speed: Math.random() * 2 + 1.5,
        opacity: isMobile ? Math.random() * 0.3 + 0.1 : Math.random() * 0.4 + 0.15,
        angle: Math.PI / 4 + (Math.random() - 0.5) * 0.3,
        life: 0,
        maxLife: Math.random() * 80 + 60,
        width: isMobile ? Math.random() * 0.8 + 0.3 : Math.random() * 1.2 + 0.5,
      });
    };

    const draw = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      // Draw particles
      for (const p of particles) {
        p.x += p.speedX;
        p.y += p.speedY;
        p.pulse += p.pulseSpeed;

        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        const glowOpacity = p.opacity * (0.7 + Math.sin(p.pulse) * 0.3);

        // Glow
        ctx.beginPath();
        const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 4);
        glow.addColorStop(0, p.color === "#22c55e"
          ? `rgba(34, 197, 94, ${glowOpacity * 0.3})`
          : `rgba(255, 255, 255, ${glowOpacity * 0.2})`);
        glow.addColorStop(1, "transparent");
        ctx.fillStyle = glow;
        ctx.arc(p.x, p.y, p.size * 4, 0, Math.PI * 2);
        ctx.fill();

        // Core
        ctx.beginPath();
        ctx.fillStyle = p.color === "#22c55e"
          ? `rgba(34, 197, 94, ${glowOpacity})`
          : `rgba(255, 255, 255, ${glowOpacity})`;
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw meteors
      for (let i = meteors.length - 1; i >= 0; i--) {
        const m = meteors[i];
        m.life++;
        m.x += Math.cos(m.angle) * m.speed;
        m.y += Math.sin(m.angle) * m.speed;

        const lifeRatio = 1 - m.life / m.maxLife;
        const fadeOpacity = m.opacity * lifeRatio;

        if (m.life >= m.maxLife || fadeOpacity <= 0) {
          meteors.splice(i, 1);
          continue;
        }

        const tailX = m.x - Math.cos(m.angle) * m.length;
        const tailY = m.y - Math.sin(m.angle) * m.length;

        const gradient = ctx.createLinearGradient(m.x, m.y, tailX, tailY);
        gradient.addColorStop(0, `rgba(34, 197, 94, ${fadeOpacity})`);
        gradient.addColorStop(0.3, `rgba(34, 197, 94, ${fadeOpacity * 0.5})`);
        gradient.addColorStop(1, "transparent");

        ctx.beginPath();
        ctx.strokeStyle = gradient;
        ctx.lineWidth = m.width;
        ctx.lineCap = "round";
        ctx.moveTo(m.x, m.y);
        ctx.lineTo(tailX, tailY);
        ctx.stroke();

        // Head glow
        ctx.beginPath();
        const headGlow = ctx.createRadialGradient(m.x, m.y, 0, m.x, m.y, 4);
        headGlow.addColorStop(0, `rgba(34, 197, 94, ${fadeOpacity * 0.8})`);
        headGlow.addColorStop(1, "transparent");
        ctx.fillStyle = headGlow;
        ctx.arc(m.x, m.y, 4, 0, Math.PI * 2);
        ctx.fill();
      }

      // Spawn meteors rarely (less on mobile)
      if (Math.random() < (isMobile ? 0.012 : 0.025)) spawnMeteor();

      animationId = requestAnimationFrame(draw);
    };

    resize();
    createParticles();
    draw();

    let lastWidth = window.innerWidth;
    const handleResize = () => {
      const currentWidth = window.innerWidth;
      if (currentWidth !== lastWidth) {
        resize();
        createParticles();
        lastWidth = currentWidth;
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
};

export default ParticleMeteorBackground;
