import React from "react";
import { Canvas } from "@react-three/fiber";
import { Office } from "./Office";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import OfficeLight from "./OfficeLight";
import { useMediaQuery } from "react-responsive";

const HeaderModelExperience = () => {
  const isTablet = useMediaQuery({ query: "(max-width:1024px)" });
  const isMobile = useMediaQuery({ query: "(max-width:768px)" });
  return (
    <Canvas shadows camera={{ position: [0, 0, 15], fov: 45 }}>
      <OrbitControls
        enablePan={false}
        enableZoom={isTablet}
        maxDistance={60}
        minDistance={10}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />

      <Suspense fallback={null}>
        <OfficeLight />
        <group
          scale={isMobile ? 0.7 : 1}
          position={[0, -3.5, 0]}
          rotation={[0, -Math.PI / 4, 0]}
        >
          <Office />
        </group>
      </Suspense>
    </Canvas>
  );
};

export default HeaderModelExperience;
