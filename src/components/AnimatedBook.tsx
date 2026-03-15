import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";
import * as THREE from "three";

const BookShape = () => {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.2;
  });

  return (
    <Float speed={1.5} floatIntensity={0.6}>
      <group ref={ref}>
        {/* Book body */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[2, 2.6, 0.3]} />
          <meshPhongMaterial color="#0a3d2e" emissive="#155845" emissiveIntensity={0.4} />
        </mesh>
        {/* Spine */}
        <mesh position={[-1.05, 0, 0]}>
          <boxGeometry args={[0.1, 2.6, 0.35]} />
          <meshPhongMaterial color="#22c55e" emissive="#22c55e" emissiveIntensity={0.3} />
        </mesh>
        {/* Glowing pages */}
        {Array.from({ length: 5 }).map((_, i) => (
          <mesh key={i} position={[0, 0, 0.16 + i * 0.015]}>
            <planeGeometry args={[1.8, 2.4]} />
            <meshBasicMaterial color="#34d399" transparent opacity={0.08} side={THREE.DoubleSide} />
          </mesh>
        ))}
        {/* Floating text particles above book */}
      </group>
    </Float>
  );
};

const KnowledgeParticles = ({ count = 80 }: { count?: number }) => {
  const ref = useRef<THREE.Points>(null);
  const data = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const offsets: number[] = [];
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const r = 1.5 + Math.random() * 2;
      positions[i * 3] = Math.cos(angle) * r;
      positions[i * 3 + 1] = (Math.random() - 0.3) * 3;
      positions[i * 3 + 2] = Math.sin(angle) * r;
      offsets.push(Math.random() * Math.PI * 2);
    }
    return { positions, offsets };
  }, [count]);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const pos = ref.current.geometry.attributes.position as THREE.BufferAttribute;
    const t = clock.getElapsedTime();
    for (let i = 0; i < count; i++) {
      const baseY = (data.offsets[i] + t * 0.3) % 4 - 1;
      pos.setY(i, baseY);
    }
    pos.needsUpdate = true;
    ref.current.rotation.y = t * 0.1;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[data.positions, 3]} count={count} />
      </bufferGeometry>
      <pointsMaterial color="#6ee7b7" size={0.035} transparent opacity={0.5} sizeAttenuation />
    </points>
  );
};

const AnimatedBook = () => {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const camera = useMemo(() => ({ position: [0, 0, isMobile ? 7 : 6] as [number, number, number], fov: 45 }), [isMobile]);

  return (
    <div className="w-full h-[300px] sm:h-[350px] lg:h-[400px] cursor-pointer">
      <Canvas camera={camera} dpr={isMobile ? 1 : Math.min(window.devicePixelRatio, 2)}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 3, 5]} intensity={1} />
        <pointLight position={[-3, 2, -3]} intensity={0.4} color="#34d399" />
        <BookShape />
        <KnowledgeParticles count={isMobile ? 35 : 80} />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1} />
      </Canvas>
    </div>
  );
};

export default AnimatedBook;
