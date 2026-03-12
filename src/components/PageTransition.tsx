import React, { ReactNode, useEffect, useRef, useCallback, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

const DURATION = 0.8;

/** Canvas-based meteor overlay — single element, no DOM thrashing */
const TransitionCanvas = ({ active }: { active: boolean }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);

  const run = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    ctx.scale(dpr, dpr);
    const w = window.innerWidth;
    const h = window.innerHeight;

    const isMobile = w < 768;
    const stars = Array.from({ length: isMobile ? 25 : 60 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      size: Math.random() * 2.5 + 0.5,
      green: Math.random() > 0.3,
      vx: (Math.random() - 0.5) * 3,
      vy: (Math.random() - 0.5) * 3,
    }));

    const meteors = Array.from({ length: isMobile ? 8 : 20 }, () => {
      const angle = 0.7 + (Math.random() - 0.5) * 0.4;
      return {
        x: Math.random() * w * 1.3 - w * 0.15,
        y: -Math.random() * 50,
        len: isMobile ? 20 + Math.random() * 40 : 40 + Math.random() * 80,
        speed: 8 + Math.random() * 6,
        angle,
        dx: Math.cos(angle),
        dy: Math.sin(angle),
        width: 0.5 + Math.random() * 1,
        opacity: 0.2 + Math.random() * 0.4,
      };
    });

    const start = performance.now();
    const totalMs = DURATION * 1000;

    const frame = (now: number) => {
      const elapsed = now - start;
      const t = Math.min(elapsed / totalMs, 1);

      ctx.clearRect(0, 0, w, h);

      // Backdrop envelope
      const backdropAlpha = t < 0.25 ? t / 0.25 : t > 0.55 ? 1 - (t - 0.55) / 0.45 : 1;
      ctx.fillStyle = `rgba(11, 20, 17, ${backdropAlpha * 0.97})`;
      ctx.fillRect(0, 0, w, h);

      // Element visibility envelope
      const elAlpha = t < 0.08 ? t / 0.08 : t > 0.65 ? 1 - (t - 0.65) / 0.35 : 1;

      for (const s of stars) {
        s.x += s.vx;
        s.y += s.vy;
        ctx.beginPath();
        ctx.fillStyle = s.green
          ? `rgba(34, 197, 94, ${elAlpha * 0.8})`
          : `rgba(255, 255, 255, ${elAlpha * 0.6})`;
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();
      }

      for (const m of meteors) {
        m.x += m.dx * m.speed;
        m.y += m.dy * m.speed;
        const tailX = m.x - m.dx * m.len;
        const tailY = m.y - m.dy * m.len;
        const grad = ctx.createLinearGradient(m.x, m.y, tailX, tailY);
        grad.addColorStop(0, `rgba(34, 197, 94, ${m.opacity * elAlpha})`);
        grad.addColorStop(0.4, `rgba(34, 197, 94, ${m.opacity * elAlpha * 0.3})`);
        grad.addColorStop(1, "transparent");
        ctx.beginPath();
        ctx.strokeStyle = grad;
        ctx.lineWidth = m.width;
        ctx.lineCap = "round";
        ctx.moveTo(m.x, m.y);
        ctx.lineTo(tailX, tailY);
        ctx.stroke();
      }

      if (t < 1) {
        animRef.current = requestAnimationFrame(frame);
      }
    };

    animRef.current = requestAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (active) run();
    return () => cancelAnimationFrame(animRef.current);
  }, [active, run]);

  if (!active) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 9999, width: "100vw", height: "100vh" }}
    />
  );
};

const PageTransition = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const prevPath = useRef(location.pathname);
  const hasNavigated = useRef(false);
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    if (location.pathname !== prevPath.current) {
      prevPath.current = location.pathname;
      hasNavigated.current = true;
      setShowOverlay(true);
      const timer = setTimeout(() => setShowOverlay(false), DURATION * 1000);
      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  return (
    <>
      <TransitionCanvas active={showOverlay} />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={hasNavigated.current ? { opacity: 0 } : false}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default PageTransition;
