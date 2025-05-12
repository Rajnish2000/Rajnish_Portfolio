import React, { Suspense } from "react";
import { AvatarPerson } from "./AvatarPerson";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sparkles } from "@react-three/drei";
import { AmbientLight } from "three";

const AvatarModelExperience = () => {
  return (
    <Canvas shadows camera={{ position: [0, 0, 22], fov: 45 }} className="h-36">
      <ambientLight />
      <directionalLight position={[-2, 0, 3]} intensity={3} color={"#ff28d5"} />
      <directionalLight position={[2, 0, 3]} intensity={3} color={"#1c34ff"} />
      <Sparkles
        count={100}
        size={2}
        speed={0.5}
        color={"white"}
        scale={[10, 10, 2]}
      />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        maxDistance={50}
        minDistance={1}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />
      <AvatarPerson scale={9} position={[0, -8, 0]} />
    </Canvas>
  );
};

export default AvatarModelExperience;
