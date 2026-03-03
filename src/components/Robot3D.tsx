import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

const RobotModel = () => {
  const groupRef = useRef<THREE.Group>(null);
  const bodyGroupRef = useRef<THREE.Group>(null);
  const eyeLeftRef = useRef<THREE.Mesh>(null);
  const eyeRightRef = useRef<THREE.Mesh>(null);
  const leftArmRef = useRef<THREE.Mesh>(null);
  const rightArmRef = useRef<THREE.Mesh>(null);
  const smileRef = useRef<THREE.Mesh>(null);

  const neonPurple = useMemo(() => new THREE.Color("hsl(270, 95%, 65%)"), []);
  const neonCyan = useMemo(() => new THREE.Color("hsl(190, 100%, 55%)"), []);
  const darkBody = useMemo(() => new THREE.Color("hsl(230, 25%, 10%)"), []);
  const glossBody = useMemo(() => new THREE.Color("hsl(230, 20%, 15%)"), []);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    const { x, y } = state.pointer;
    const time = state.clock.elapsedTime;

    // Smooth head follow
    groupRef.current.rotation.y += (x * 0.4 - groupRef.current.rotation.y) * delta * 4;
    groupRef.current.rotation.x += (-y * 0.2 - groupRef.current.rotation.x) * delta * 4;

    // Breathing effect
    if (bodyGroupRef.current) {
      bodyGroupRef.current.position.y = Math.sin(time * 2) * 0.05;
    }

    // Eyes follow cursor
    if (eyeLeftRef.current && eyeRightRef.current) {
      eyeLeftRef.current.position.x = -0.22 + x * 0.05;
      eyeRightRef.current.position.x = 0.22 + x * 0.05;
      eyeLeftRef.current.position.y = 1.15 - y * 0.05;
      eyeRightRef.current.position.y = 1.15 - y * 0.05;

      // Blink
      const blink = Math.sin(time * 3) > 0.95 ? 0.1 : 1;
      eyeLeftRef.current.scale.y = blink;
      eyeRightRef.current.scale.y = blink;
    }

    // Arm movement
    if (leftArmRef.current) {
      leftArmRef.current.rotation.z = Math.sin(time * 2) * 0.3;
    }
    if (rightArmRef.current) {
      rightArmRef.current.rotation.z = -Math.sin(time * 2) * 0.3;
    }

    // Smile glow pulse
    if (smileRef.current) {
      const mat = smileRef.current.material as THREE.MeshStandardMaterial;
      mat.emissiveIntensity = 4 + Math.sin(time * 3) * 0.6;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.6}>
      <group ref={groupRef} position={[0, -0.1, 0]} scale={0.75}>
        <group ref={bodyGroupRef}>

          {/* HEAD */}
          <mesh position={[0, 1.1, 0]}>
            <sphereGeometry args={[0.75, 32, 32]} />
            <meshStandardMaterial color={darkBody} metalness={1} roughness={0.1} />
          </mesh>

          {/* VISOR */}
          <mesh position={[0, 1.05, 0.55]}>
            <sphereGeometry args={[0.42, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2]} />
            <meshStandardMaterial
              color="#1a1f2e"
              metalness={1}
              roughness={0}
              transparent
              opacity={0.4}
            />
          </mesh>

          {/* EYES */}
          <mesh ref={eyeLeftRef} position={[-0.22, 1.15, 0.65]}>
            <sphereGeometry args={[0.14, 24, 24]} />
            <meshStandardMaterial
              color={neonCyan}
              emissive={neonCyan}
              emissiveIntensity={3}
            />
          </mesh>

          <mesh ref={eyeRightRef} position={[0.22, 1.15, 0.65]}>
            <sphereGeometry args={[0.14, 24, 24]} />
            <meshStandardMaterial
              color={neonCyan}
              emissive={neonCyan}
              emissiveIntensity={3}
            />
          </mesh>

          {/* WIDE HAPPY SMILE 😄 */}
          <mesh
            ref={smileRef}
            position={[0, 0.9, 0.72]}
            rotation={[0.3, 0, Math.PI]}
          >
            <torusGeometry args={[0.28, 0.04, 16, 100, Math.PI]} />
            <meshStandardMaterial
              color={neonPurple}
              emissive={neonPurple}
              emissiveIntensity={4}
            />
          </mesh>

          {/* BODY */}
          <mesh position={[0, 0.1, 0]}>
            <sphereGeometry args={[0.6, 32, 32]} />
            <meshStandardMaterial color={darkBody} metalness={1} roughness={0.1} />
          </mesh>

          {/* CHEST GLOW */}
          <mesh position={[0, 0.25, 0.55]}>
            <sphereGeometry args={[0.08, 16, 16]} />
            <meshStandardMaterial
              color={neonPurple}
              emissive={neonPurple}
              emissiveIntensity={4}
            />
          </mesh>

          {/* ARMS */}
          <mesh ref={leftArmRef} position={[-0.72, 0.15, 0]}>
            <capsuleGeometry args={[0.1, 0.3, 8, 16]} />
            <meshStandardMaterial color={glossBody} metalness={1} roughness={0.2} />
          </mesh>

          <mesh ref={rightArmRef} position={[0.72, 0.15, 0]}>
            <capsuleGeometry args={[0.1, 0.3, 8, 16]} />
            <meshStandardMaterial color={glossBody} metalness={1} roughness={0.2} />
          </mesh>
        </group>
      </group>
    </Float>
  );
};

const Robot3D = () => {
  return (
    <div className="w-full h-[400px] md:h-[500px] lg:h-[550px]">
      <Canvas camera={{ position: [0, 1, 4.5], fov: 45 }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={0.7} />
        <pointLight position={[-3, 3, 2]} intensity={1.5} color="hsl(270, 95%, 65%)" />
        <pointLight position={[3, 2, 3]} intensity={1.2} color="hsl(190, 100%, 55%)" />
        <RobotModel />
      </Canvas>
    </div>
  );
};

export default Robot3D;