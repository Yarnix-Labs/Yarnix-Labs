import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";
import * as THREE from "three";

const HoloCube = ({ position, size, speed, color }: {
  position: [number, number, number]; size: number; speed: number; color: string;
}) => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * speed * 0.5;
      ref.current.rotation.y += delta * speed;
    }
  });
  return (
    <Float speed={2} floatIntensity={0.5}>
      <mesh ref={ref} position={position}>
        <boxGeometry args={[size, size, size]} />
        <meshPhongMaterial color="#0a3d2e" emissive={color} emissiveIntensity={0.4} transparent opacity={0.8} wireframe={false} />
      </mesh>
      <lineSegments position={position}>
        <edgesGeometry args={[new THREE.BoxGeometry(size, size, size)]} />
        <lineBasicMaterial color={color} transparent opacity={0.6} />
      </lineSegments>
    </Float>
  );
};

const DataStreams = ({ count = 30 }: { count?: number }) => {
  const ref = useRef<THREE.Points>(null);
  const data = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const speeds: number[] = [];
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 6;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 6;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 3;
      speeds.push(0.5 + Math.random() * 1.5);
    }
    return { positions, speeds };
  }, [count]);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const pos = ref.current.geometry.attributes.position as THREE.BufferAttribute;
    const t = clock.getElapsedTime();
    for (let i = 0; i < count; i++) {
      const y = ((data.speeds[i] * t + i) % 6) - 3;
      pos.setY(i, y);
    }
    pos.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[data.positions, 3]} count={count} />
      </bufferGeometry>
      <pointsMaterial color="#6ee7b7" size={0.04} transparent opacity={0.6} sizeAttenuation />
    </points>
  );
};

const Scene = () => (
  <>
    <HoloCube position={[0, 0, 0]} size={1.8} speed={0.4} color="#22c55e" />
    <HoloCube position={[2.5, 1.2, -1]} size={0.8} speed={0.6} color="#34d399" />
    <HoloCube position={[-2.2, -1, 0.5]} size={1} speed={0.5} color="#6ee7b7" />
    <DataStreams />
  </>
);

const AnimatedCubes = () => {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
  <div className="w-full h-[250px] sm:h-[350px] lg:h-[400px]">
    <Canvas camera={{ position: [0, 0, isMobile ? 9 : 7], fov: 45 }} dpr={isMobile ? 1 : Math.min(window.devicePixelRatio, 2)}>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 3, 5]} intensity={1} />
      <pointLight position={[-5, -3, -5]} intensity={0.3} color="#34d399" />
      <Scene />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1.5} />
    </Canvas>
  </div>
  );
};

export default AnimatedCubes;
