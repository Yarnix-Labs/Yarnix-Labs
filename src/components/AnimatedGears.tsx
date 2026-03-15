import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

const Gear = ({ position, radius, teeth, thickness, speed, direction = 1 }: {
  position: [number, number, number]; radius: number; teeth: number; thickness: number; speed: number; direction?: number;
}) => {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.z += delta * speed * direction;
  });

  const shape = useMemo(() => {
    const s = new THREE.Shape();
    const inner = radius * 0.7;
    const toothH = radius * 0.3;
    const toothW = (Math.PI * 2) / teeth / 2;
    for (let i = 0; i < teeth; i++) {
      const a = (i / teeth) * Math.PI * 2;
      s.lineTo(Math.cos(a) * inner, Math.sin(a) * inner);
      s.lineTo(Math.cos(a + toothW * 0.2) * (inner + toothH), Math.sin(a + toothW * 0.2) * (inner + toothH));
      s.lineTo(Math.cos(a + toothW * 0.8) * (inner + toothH), Math.sin(a + toothW * 0.8) * (inner + toothH));
      s.lineTo(Math.cos(a + toothW) * inner, Math.sin(a + toothW) * inner);
    }
    s.closePath();
    return s;
  }, [radius, teeth]);

  return (
    <group ref={ref} position={position}>
      <mesh>
        <extrudeGeometry args={[shape, { depth: thickness, bevelEnabled: false }]} />
        <meshPhongMaterial color="#0a3d2e" emissive="#22c55e" emissiveIntensity={0.3} transparent opacity={0.85} />
      </mesh>
      <mesh>
        <torusGeometry args={[radius * 0.3, 0.02, 8, 32]} />
        <meshBasicMaterial color="#34d399" transparent opacity={0.5} />
      </mesh>
    </group>
  );
};

const FloatingParticles = ({ count = 60 }: { count?: number }) => {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 8;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 8;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 4;
    }
    return arr;
  }, [count]);

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.05;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} count={count} />
      </bufferGeometry>
      <pointsMaterial color="#6ee7b7" size={0.03} transparent opacity={0.5} sizeAttenuation />
    </points>
  );
};

const Scene = ({ particleCount = 60 }: { particleCount?: number }) => (
  <>
    <Gear position={[0, 0, 0]} radius={1.5} teeth={12} thickness={0.3} speed={0.3} />
    <Gear position={[2.2, 1.4, 0.2]} radius={0.9} teeth={8} thickness={0.25} speed={0.5} direction={-1} />
    <Gear position={[-1.8, -1.5, -0.2]} radius={1.1} teeth={10} thickness={0.2} speed={0.4} direction={-1} />
    <FloatingParticles count={particleCount} />
  </>
);

const AnimatedGears = () => {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const camera = useMemo(() => ({ position: [0, 0, isMobile ? 8.5 : 7] as [number, number, number], fov: 45 }), [isMobile]);

  return (
    <div className="w-full h-[300px] sm:h-[350px] lg:h-[400px] cursor-pointer">
      <Canvas camera={camera} dpr={isMobile ? 1 : Math.min(window.devicePixelRatio, 2)}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 3, 5]} intensity={1} />
        <pointLight position={[-5, -3, -5]} intensity={0.3} color="#34d399" />
        <Scene particleCount={isMobile ? 24 : 60} />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1} />
      </Canvas>
    </div>
  );
};

export default AnimatedGears;
