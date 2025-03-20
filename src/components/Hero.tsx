"use client";

import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  useGLTF,
  Environment,
  Float,
  Html,
} from "@react-three/drei";
import { Suspense, useState, useEffect } from "react";
import { motion } from "framer-motion";

// ✅ Inline 3D Model Component with Mouse Interaction
const Model = ({ rotationX, rotationY, positionX, positionY }) => {
  const gltf = useGLTF("/gaming_room.glb"); // Ensure model.glb is in /public

  return (
    <group
      rotation={[rotationX, rotationY, 0]}
      position={[positionX, positionY, 0]}
    >
      <primitive object={gltf.scene} scale={0.5} />
    </group>
  );
};

export default function Hero() {
  const [rotationX, setRotationX] = useState(0);
  const [rotationY, setRotationY] = useState(0);
  const [positionX, setPositionX] = useState(0);
  const [positionY, setPositionY] = useState(0);

  // ✅ Track Mouse Movement
  useEffect(() => {
    const handleMouseMove = (event) => {
      const { innerWidth, innerHeight } = window;
      const x = (event.clientX / innerWidth - 0.5) * 2;
      const y = (event.clientY / innerHeight - 0.5) * 2;

      setRotationX(y * 0.05); // Slight vertical tilt effect
      setRotationY(x * 0.08); // Slight horizontal tilt effect
      setPositionX(x * 0.1); // Minor horizontal shift
      setPositionY(-y * 0.1); // Minor vertical shift (inverted)
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* 🔵 Background Gradient */}
      {/* <motion.div
        className="absolute inset-0 bg-gradient-to-b from-blue-900 via-gray-900 to-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      /> */}

      {/* 🎯 Heading & Subtitle (Your Profile Info) */}
      <motion.div
  className="absolute top-[13rem] right-[5%] w-auto z-10 text-center"
  initial={{ opacity: 0, y: -30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
>
  <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
    Hi, {"I'm"} <span className="text-orange-400">Naveen</span>
  </h1>
  <p className="text-lg text-gray-300 drop-shadow-md mt-2">
    Software Engineer | Full Stack Developer | Cloud & DevOps Enthusiast
  </p>

  {/* 🚀 Call to Action Button (Smaller Width & Centered Below) */}
  <motion.a
    href="#about"
    className="mt-6 bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-full text-base font-medium transition-all shadow-md w-44 block mx-auto"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.5, duration: 1 }}
  >
    Know More
  </motion.a>
</motion.div>

      {/* 🎨 3D Model Canvas */}
      <Canvas
        camera={{
          position: [2.9206838954766323, 2.000204859541826, 1.5298145017631266],
          fov: 62,
        }}
        className="w-full h-full"
      >
        <Suspense fallback={<LoadingSpinner />}>
          {/* 🌌 Environment & Lighting */}
          <Environment preset="night" />
          <directionalLight intensity={1.2} position={[3, 5, 5]} />
          <ambientLight intensity={0.4} />

          {/* 🔄 Floating Model (with Mouse Movement) */}
          <Float speed={1} rotationIntensity={0} floatIntensity={0}>
            <Model
              rotationX={rotationX}
              rotationY={rotationY}
              positionX={positionX}
              positionY={positionY}
            />
          </Float>

          {/* 🎥 Smooth Camera Controls */}
          <OrbitControls
            target={[1, 2, 0]}
            enableZoom={false}
            enableRotate={true}
            autoRotate={false} // ✅ Explicitly turn off auto-rotation
            rotateSpeed={0.5}
            zoomSpeed={0.8}
            minDistance={2}
            maxDistance={8}
          />
        </Suspense>
      </Canvas>
    </section>
  );
}

// ⏳ Loading Animation
const LoadingSpinner = () => (
  <Html center>
    <div className="flex flex-col items-center">
      <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-orange-500"></div>
      <p className="text-white mt-2">Loading Model...</p>
    </div>
  </Html>
);

// "use client";

// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, useGLTF, Environment, Float, Html } from "@react-three/drei";
// import { Suspense, useRef, useState } from "react";
// import { motion } from "framer-motion";

// // ✅ Inline 3D Model Component
// const Model = () => {
//   const gltf = useGLTF("/gaming_room.glb"); // Ensure model.glb is in /public
//   return <primitive object={gltf.scene} scale={0.5} />;
// };

// export default function Hero() {
//   const [hovered, setHovered] = useState(false);
//   const orbitRef = useRef<any>(null);

//   return (
//     <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
//       {/* 🔵 Background Gradient */}
//       <motion.div
//         className="absolute inset-0 bg-gradient-to-b from-blue-900 via-gray-900 to-black"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       />

//       {/* 🎯 Heading & Subtitle (Your Profile Info) */}
// <motion.div
//   className="absolute top-24 text-center z-10 w-full" // ✅ Ensure it has a high z-index
//   initial={{ opacity: 0, y: -30 }}
//   animate={{ opacity: 1, y: 0 }}
//   transition={{ duration: 1 }}
// >
//   <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
//     Hi, I'm <span className="text-orange-400">Naveen</span>
//   </h1>
//   <p className="text-lg text-gray-300 mt-2 drop-shadow-md">
//     Software Engineer | Full Stack Developer | Cloud & DevOps Enthusiast
//   </p>
// </motion.div>

// {/* 🚀 Call to Action Button */}
// <motion.a
//   href="#projects"
//   className="absolute bottom-20 z-10 bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-full text-lg font-semibold transition-all shadow-lg"
//   initial={{ opacity: 0, y: 20 }}
//   animate={{ opacity: 1, y: 0 }}
//   transition={{ delay: 0.5, duration: 1 }}
// >
//   Explore My Work
// </motion.a>

//       {/* 🎨 3D Model Canvas */}
//       <Canvas
//         camera={{ position: [2.9206838954766323, 2.000204859541826, 1.5298145017631266], fov: 65 }} // Default position to fit the screen
//         className="w-full h-full"
//         onPointerOver={() => setHovered(true)}
//         onPointerOut={() => setHovered(false)}
//       >
//         <Suspense fallback={<LoadingSpinner />}>
//           {/* 🌌 Environment & Lighting */}
//           <Environment preset="night" />
//           <directionalLight intensity={1.2} position={[3, 5, 5]} />
//           <ambientLight intensity={0.4} />

//           {/* 🔄 Floating Model */}
//           <Float speed={1} rotationIntensity={0} floatIntensity={0}>
//             <Model />
//           </Float>

//           {/* 🎥 Smooth Camera Controls */}
//           <OrbitControls
//             ref={orbitRef}
//             target={[1, 2, 0]}
//             enableZoom={true}
//             enableRotate={true}
//             autoRotate={false} // ✅ Explicitly turn off auto-rotation
//             rotateSpeed={0.5}
//             zoomSpeed={0.8}
//             minDistance={2}
//             maxDistance={8}
//           />
//         </Suspense>
//       </Canvas>
//     </section>
//   );
// }

// // ⏳ Loading Animation
// const LoadingSpinner = () => (
//   <Html center>
//     <div className="flex flex-col items-center">
//       <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-orange-500"></div>
//       <p className="text-white mt-2">Loading Model...</p>
//     </div>
//   </Html>
// );
