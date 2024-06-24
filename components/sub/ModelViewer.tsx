// components/sub/ModelViewer.tsx
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const Model = () => {
  const { scene } = useGLTF("/models/utility_robot/scene.gltf");
  return (
    <primitive
      object={scene}
      scale={[0.07, 0.07, 0.07]}
      position={[0, -1, 0]}
    />
  );
};

const ModelViewer = () => {
  return (
    <Canvas
      style={{ width: "650px", height: "650px" }}
      camera={{ position: [0, 2, 8], fov: 50 }}
    >
      <ambientLight intensity={1} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <directionalLight position={[-5, 5, 5]} intensity={1.2} />
      <Model />
      <OrbitControls autoRotate />
    </Canvas>
  );
};

export default ModelViewer;
