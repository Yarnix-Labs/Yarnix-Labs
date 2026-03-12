import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import * as THREE from "three";

const NeuralNetwork = () => {
  const groupRef = useRef<THREE.Group>(null);

  const { nodes, edges } = useMemo(() => {
    const nodes: THREE.Vector3[] = [];
    const edges: [number, number][] = [];
    // Create layered network
    const layers = [4, 6, 8, 6, 4];
    let idx = 0;
    const layerIndices: number[][] = [];
    layers.forEach((count, li) => {
      const layer: number[] = [];
      for (let i = 0; i < count; i++) {
        const angle = (i / count) * Math.PI * 2;
        const r = 1.2;
        const x = (li - 2) * 1.2;
        const y = Math.cos(angle) * r;
        const z = Math.sin(angle) * r;
        nodes.push(new THREE.Vector3(x, y, z));
        layer.push(idx++);
      }
      layerIndices.push(layer);
    });
    // Connect adjacent layers
    for (let l = 0; l < layerIndices.length - 1; l++) {
      for (const a of layerIndices[l]) {
        for (const b of layerIndices[l + 1]) {
          if (Math.random() > 0.5) edges.push([a, b]);
        }
      }
    }
    return { nodes, edges };
  }, []);

  useFrame((_, delta) => {
    if (groupRef.current) groupRef.current.rotation.y += delta * 0.15;
  });

  return (
    <group ref={groupRef}>
      {nodes.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.06, 8, 8]} />
          <meshBasicMaterial color="#6ee7b7" transparent opacity={0.9} />
        </mesh>
      ))}
      {edges.map(([a, b], i) => {
        const points = [nodes[a], nodes[b]];
        const geo = new THREE.BufferGeometry().setFromPoints(points);
        return (
          <lineSegments key={i}>
            <bufferGeometry attach="geometry" {...geo} />
            <lineBasicMaterial color="#34d399" transparent opacity={0.15} />
          </lineSegments>
        );
      })}
      {/* Central glow sphere */}
      <Sphere args={[0.4, 32, 32]} position={[0, 0, 0]}>
        <meshPhongMaterial color="#0a3d2e" emissive="#22c55e" emissiveIntensity={0.5} transparent opacity={0.6} />
      </Sphere>
    </group>
  );
};

const OrbitDots = ({ count = 50 }: { count?: number }) => {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = Math.random() * Math.PI * 2;
      const r = 2.5 + Math.random() * 0.5;
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.cos(phi);
      arr[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta);
    }
    return arr;
  }, [count]);

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.08;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} count={count} />
      </bufferGeometry>
      <pointsMaterial color="#6ee7b7" size={0.025} transparent opacity={0.4} sizeAttenuation />
    </points>
  );
};

const AnimatedNetwork = () => {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <div className="w-full h-[250px] sm:h-[350px] lg:h-[400px]">
      <Canvas camera={{ position: [0, 0, isMobile ? 7 : 6], fov: 45 }} dpr={isMobile ? 1 : Math.min(window.devicePixelRatio, 2)}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 3, 5]} intensity={1} />
        <pointLight position={[-5, -3, -5]} intensity={0.3} color="#34d399" />
        <NeuralNetwork />
        <OrbitDots count={isMobile ? 20 : 50} />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1.5} />
      </Canvas>
    </div>
  );
};

export default AnimatedNetwork;
