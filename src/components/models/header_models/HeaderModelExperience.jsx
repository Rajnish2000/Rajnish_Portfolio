import React from "react";
import { Canvas } from "@react-three/fiber";
// import { Office } from "./Office";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import OfficeLight from "./OfficeLight";
import { useMediaQuery } from "react-responsive";
import { OfficeWorker } from "./OfficeWorker";

const HeaderModelExperience = () => {
  const isTablet = useMediaQuery({ query: "(max-width:1024px)" });
  console.log(isTablet);
  // const isMobile = useMediaQuery({ query: "(max-width:768px)" });
  return (
    <Canvas shadows camera={{ position: [0, 0, 15], fov: 45 }}>
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        maxDistance={60}
        minDistance={10}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />

      <Suspense fallback={null}>
        <group
          scale={1}
          position={[0, -3.5, 0]}
          rotation={[0, -Math.PI / 4, 0]}
        >
          <OfficeLight />
          <OfficeWorker />
        </group>
      </Suspense>
    </Canvas>
  );
};

export default HeaderModelExperience;
