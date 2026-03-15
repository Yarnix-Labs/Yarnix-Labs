import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";
import * as THREE from "three";

const Envelope = () => {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.2;
  });

  const flapShape = useMemo(() => {
    const s = new THREE.Shape();
    s.moveTo(-1.2, 0);
    s.lineTo(0, 0.9);
    s.lineTo(1.2, 0);
    s.closePath();
    return s;
  }, []);

  return (
    <Float speed={1.5} floatIntensity={0.8}>
      <group ref={ref}>
        {/* Envelope body */}
        <mesh position={[0, -0.2, 0]}>
          <boxGeometry args={[2.4, 1.5, 0.1]} />
          <meshPhongMaterial color="#0a3d2e" emissive="#155845" emissiveIntensity={0.4} />
        </mesh>
        {/* Envelope flap */}
        <mesh position={[0, 0.55, 0.05]} rotation={[0.3, 0, 0]}>
          <shapeGeometry args={[flapShape]} />
          <meshPhongMaterial color="#0f4a35" emissive="#22c55e" emissiveIntensity={0.2} side={THREE.DoubleSide} />
        </mesh>
        {/* @ symbol ring */}
        <mesh position={[0, -0.1, 0.15]}>
          <torusGeometry args={[0.3, 0.05, 8, 32]} />
          <meshBasicMaterial color="#22c55e" transparent opacity={0.8} />
        </mesh>
        {/* Glowing lines on envelope */}
        {[-0.3, 0, 0.3].map((y, i) => (
          <mesh key={i} position={[0, y - 0.3, 0.06]}>
            <planeGeometry args={[1.6, 0.04]} />
            <meshBasicMaterial color="#34d399" transparent opacity={0.3} />
          </mesh>
        ))}
      </group>
    </Float>
  );
};

const SignalWaves = ({ count = 3 }: { count?: number }) => {
  const refs = useRef<(THREE.Mesh | null)[]>([]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    refs.current.forEach((ref, i) => {
      if (ref) {
        const scale = 1 + ((t * 0.5 + i * 0.8) % 2);
        ref.scale.set(scale, scale, scale);
        ref.material = new THREE.MeshBasicMaterial({
          color: "#34d399",
          transparent: true,
          opacity: Math.max(0, 0.4 - ((t * 0.5 + i * 0.8) % 2) * 0.2),
        });
      }
    });
  });

  return (
    <group position={[0, -0.2, 0.5]}>
      {Array.from({ length: count }).map((_, i) => (
        <mesh key={i} ref={(el) => { refs.current[i] = el; }}>
          <ringGeometry args={[0.8, 0.82, 32]} />
          <meshBasicMaterial color="#34d399" transparent opacity={0.3} />
        </mesh>
      ))}
    </group>
  );
};

const ContactParticles = ({ count = 40 }: { count?: number }) => {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 6;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 6;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 3;
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
      <pointsMaterial color="#6ee7b7" size={0.03} transparent opacity={0.4} sizeAttenuation />
    </points>
  );
};

const AnimatedEnvelope = () => {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const camera = useMemo(() => ({ position: [0, 0, isMobile ? 6.5 : 5.5] as [number, number, number], fov: 45 }), [isMobile]);

  return (
    <div className="w-full h-[300px] sm:h-[350px] lg:h-[400px] cursor-pointer">
      <Canvas camera={camera} dpr={isMobile ? 1 : Math.min(window.devicePixelRatio, 2)}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 3, 5]} intensity={1} />
        <pointLight position={[-3, 2, -3]} intensity={0.4} color="#34d399" />
        <Envelope />
        <SignalWaves count={isMobile ? 2 : 3} />
        <ContactParticles count={isMobile ? 18 : 40} />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1} />
      </Canvas>
    </div>
  );
};

export default AnimatedEnvelope;
