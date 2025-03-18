"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { useRef, useEffect, useState } from "react";
import * as THREE from "three";

// ✅ Component to Handle Mouse Interaction Inside Canvas
const MovingStars = () => {
  const starsRef = useRef<THREE.Group | null>(null);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  // ✅ Capture Mouse Movement
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMouseX((event.clientX / window.innerWidth - 0.5) * 2);
      setMouseY((event.clientY / window.innerHeight - 0.5) * 2);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // 🔄 Move Stars Based on Mouse
  useFrame(() => {
    if (starsRef.current) {
      starsRef.current.rotation.y += (mouseX * 0.05 - starsRef.current.rotation.y) * 0.1;
      starsRef.current.rotation.x += (-mouseY * 0.05 - starsRef.current.rotation.x) * 0.1;
    }
  });

  return (
    <group ref={starsRef}>
      {/* 🌌 Stars with Moving Effect */}
      <Stars radius={100} depth={50} count={1000} factor={5} saturation={0} fade speed={1} />
    </group>
  );
};

// ✅ Floating Particles Component (Main)
const FloatingParticles = () => {
  return (
    <div className="fixed inset-0 w-full h-full -z-10 pointer-events-none">
      <Canvas>
        {/* 🌠 Add Moving Stars */}
        <MovingStars />

        {/* ✨ Floating Particles */}
        <points>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              array={new Float32Array(
                Array.from({ length: 3000 }, () => (Math.random() - 0.5) * 200)
              )}
              count={1000}
              itemSize={3}
            />
          </bufferGeometry>
          <pointsMaterial color="#ffa500" size={0.3} transparent opacity={0.6} />
        </points>
      </Canvas>
    </div>
  );
};

export default FloatingParticles;