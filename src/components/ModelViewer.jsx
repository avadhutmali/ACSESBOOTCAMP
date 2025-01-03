import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const ModelViewer = ({ modelPath, scale = 1, position = [0, 0, 0] }) => {
  // Load the 3D model
  const Model = () => {
    const { scene } = useGLTF(modelPath);
    return <primitive object={scene} scale={scale} position={position} />;
  };
  const DancingModel = () => {
    const { scene } = useGLTF(modelPath);
    const modelRef = useRef();

    // Apply a "dancing" effect using useFrame
    useFrame(({ clock }) => {
      const t = clock.getElapsedTime();
      if (modelRef.current) {
        modelRef.current.rotation.y = Math.sin(t) * 0.5; // Rotate on the Y-axis
        modelRef.current.position.y = position[1] + Math.sin(t * 2) * 0.2; // Bounce up and down
      }
    });

    return <primitive ref={modelRef} object={scene} scale={scale} />;
  };

  return (
    <div className=" h-[70vh] flex items-center justify-center">
        <div className="md:h-[70vh] md:w-1/2 h-[30vh]  flex items-center">
      <Canvas camera={{ position: [0, 0, 5] }} >
        {/* Lighting */}
        <ambientLight intensity={2} />
        {/* <directionalLight position={[0, 0, 9]} intensity={1} /> */}
        {/* <pointLight position={[0, 0, 2]} intensity={4} /> */}

        <DancingModel />


        {/* Controls for interaction */}
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
    </div>
  );
};

export default ModelViewer;
