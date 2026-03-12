import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

/** Orbiting particles that circle the Earth at various tilts */
const OrbitParticles = ({ count = 120, radius = 2.1 }: { count?: number; radius?: number }) => {
  const ref = useRef<THREE.Points>(null);

  const { positions, speeds, offsets, axes } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const speeds: number[] = [];
    const offsets: number[] = [];
    const axes: THREE.Vector3[] = [];

    for (let i = 0; i < count; i++) {
      // random orbit axis tilt
      const axis = new THREE.Vector3(
        (Math.random() - 0.5) * 0.6,
        1,
        (Math.random() - 0.5) * 0.6
      ).normalize();
      axes.push(axis);
      offsets.push(Math.random() * Math.PI * 2);
      speeds.push(0.15 + Math.random() * 0.35);

      // initial position (will be overwritten each frame)
      positions[i * 3] = 0;
      positions[i * 3 + 1] = 0;
      positions[i * 3 + 2] = 0;
    }
    return { positions, speeds, offsets, axes };
  }, [count]);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const geo = ref.current.geometry;
    const pos = geo.attributes.position as THREE.BufferAttribute;
    const t = clock.getElapsedTime();

    for (let i = 0; i < count; i++) {
      const angle = offsets[i] + t * speeds[i];
      const r = radius + Math.sin(angle * 3) * 0.08;
      // base circle in XZ
      const x = Math.cos(angle) * r;
      const z = Math.sin(angle) * r;
      // rotate by axis tilt
      const v = new THREE.Vector3(x, 0, z);
      const q = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), axes[i]);
      v.applyQuaternion(q);
      pos.setXYZ(i, v.x, v.y, v.z);
    }
    pos.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} count={count} />
      </bufferGeometry>
      <pointsMaterial color="#6ee7b7" size={0.025} transparent opacity={0.7} sizeAttenuation />
    </points>
  );
};

/** Animated arc connection lines between random surface points */
const ConnectionLines = ({ count = 8 }: { count?: number }) => {
  const ref = useRef<THREE.Group>(null);

  const curves = useMemo(() => {
    const result: THREE.CatmullRomCurve3[] = [];
    for (let i = 0; i < count; i++) {
      const phi1 = Math.acos(2 * Math.random() - 1);
      const theta1 = Math.random() * Math.PI * 2;
      const phi2 = Math.acos(2 * Math.random() - 1);
      const theta2 = Math.random() * Math.PI * 2;
      const r = 1.54;

      const p1 = new THREE.Vector3(
        r * Math.sin(phi1) * Math.cos(theta1),
        r * Math.cos(phi1),
        r * Math.sin(phi1) * Math.sin(theta1)
      );
      const p2 = new THREE.Vector3(
        r * Math.sin(phi2) * Math.cos(theta2),
        r * Math.cos(phi2),
        r * Math.sin(phi2) * Math.sin(theta2)
      );

      // midpoint lifted above surface for arc
      const mid = p1.clone().add(p2).multiplyScalar(0.5);
      const lift = mid.clone().normalize().multiplyScalar(r + 0.4 + Math.random() * 0.4);

      result.push(new THREE.CatmullRomCurve3([p1, lift, p2], false, "centripetal"));
    }
    return result;
  }, [count]);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <group ref={ref}>
      {curves.map((curve, i) => {
        const points = curve.getPoints(40);
        const geo = new THREE.BufferGeometry().setFromPoints(points);
        const mat = new THREE.LineBasicMaterial({ color: "#34d399", transparent: true, opacity: 0.3 });
        const lineObj = new THREE.Line(geo, mat);
        return <primitive key={i} object={lineObj} />;
      })}
      {/* Glowing endpoints */}
      {curves.map((curve, i) => {
        const start = curve.getPoint(0);
        const end = curve.getPoint(1);
        return (
          <group key={`dots-${i}`}>
            <mesh position={start}>
              <sphereGeometry args={[0.025, 8, 8]} />
              <meshBasicMaterial color="#6ee7b7" transparent opacity={0.9} />
            </mesh>
            <mesh position={end}>
              <sphereGeometry args={[0.025, 8, 8]} />
              <meshBasicMaterial color="#6ee7b7" transparent opacity={0.9} />
            </mesh>
          </group>
        );
      })}
    </group>
  );
};

/** Orbital ring that slowly rotates */
const OrbitalRing = ({ radius = 2.0, tilt = 0.3 }: { radius?: number; tilt?: number }) => {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.z += delta * 0.08;
    }
  });

  return (
    <mesh ref={ref} rotation={[tilt, 0, 0]}>
      <torusGeometry args={[radius, 0.004, 8, 128]} />
      <meshBasicMaterial color="#34d399" transparent opacity={0.25} />
    </mesh>
  );
};

const Earth = () => {
  const earthRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Points>(null);
  const pointsRef = useRef<THREE.Points>(null);

  const gridLines = useMemo(() => {
    const points: number[] = [];
    const radius = 1.52;
    for (let lat = -80; lat <= 80; lat += 20) {
      const phi = (90 - lat) * (Math.PI / 180);
      for (let lng = 0; lng <= 360; lng += 2) {
        const theta = lng * (Math.PI / 180);
        points.push(radius * Math.sin(phi) * Math.cos(theta), radius * Math.cos(phi), radius * Math.sin(phi) * Math.sin(theta));
      }
    }
    for (let lng = 0; lng < 360; lng += 20) {
      const theta = lng * (Math.PI / 180);
      for (let lat = -90; lat <= 90; lat += 2) {
        const phi = (90 - lat) * (Math.PI / 180);
        points.push(radius * Math.sin(phi) * Math.cos(theta), radius * Math.cos(phi), radius * Math.sin(phi) * Math.sin(theta));
      }
    }
    return new Float32Array(points);
  }, []);

  const dots = useMemo(() => {
    const positions: number[] = [];
    const count = 2000;
    const radius = 1.53;
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = Math.random() * Math.PI * 2;
      positions.push(radius * Math.sin(phi) * Math.cos(theta), radius * Math.cos(phi), radius * Math.sin(phi) * Math.sin(theta));
    }
    return new Float32Array(positions);
  }, []);

  useFrame((_, delta) => {
    if (earthRef.current) earthRef.current.rotation.y += delta * 0.15;
    if (glowRef.current) glowRef.current.rotation.y += delta * 0.15;
    if (pointsRef.current) pointsRef.current.rotation.y += delta * 0.15;
  });

  return (
    <group>
      <Sphere ref={earthRef} args={[1.5, 64, 64]}>
        <meshPhongMaterial color="#0a3d2e" emissive="#155845" emissiveIntensity={0.3} transparent opacity={0.9} shininess={30} />
      </Sphere>

      <points ref={glowRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[gridLines, 3]} count={gridLines.length / 3} />
        </bufferGeometry>
        <pointsMaterial color="#34d399" size={0.008} transparent opacity={0.4} />
      </points>

      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[dots, 3]} count={dots.length / 3} />
        </bufferGeometry>
        <pointsMaterial color="#6ee7b7" size={0.012} transparent opacity={0.6} />
      </points>

      <Sphere args={[1.62, 64, 64]}>
        <meshPhongMaterial color="#155845" transparent opacity={0.08} side={THREE.BackSide} />
      </Sphere>

      {/* Connection arcs */}
      <ConnectionLines count={10} />

      {/* Orbital rings at different tilts */}
      <OrbitalRing radius={2.0} tilt={1.2} />
      <OrbitalRing radius={2.3} tilt={0.5} />
      <OrbitalRing radius={1.85} tilt={-0.8} />
    </group>
  );
};

const AnimatedEarth = () => {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <div className="w-full h-[300px] sm:h-[400px] lg:h-[600px]">
      <Canvas camera={{ position: [0, 0, isMobile ? 7 : 6], fov: 45 }} dpr={isMobile ? 1 : Math.min(window.devicePixelRatio, 2)}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 3, 5]} intensity={1} color="#ffffff" />
        <pointLight position={[-5, -3, -5]} intensity={0.3} color="#34d399" />
        <Earth />
        <OrbitParticles count={isMobile ? 50 : 150} radius={2.15} />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} minPolarAngle={Math.PI / 3} maxPolarAngle={Math.PI / 1.5} />
      </Canvas>
    </div>
  );
};

export default AnimatedEarth;
