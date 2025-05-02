import * as THREE from "three";

const OfficeLight = () => (
  <>
    {/* Ambient Light to softly light the entire scene */}
    <ambientLight intensity={0.8} color="#ffffff" />{" "}
    {/* Increased ambient light intensity for overall brightness */}
    {/* Main light source, softer spotlight on the model */}
    <spotLight
      position={[2, 8, 6]}
      angle={0.15}
      penumbra={0.5}
      intensity={1.8} // Increased intensity for brighter main light
      color="white"
      castShadow
    />
    {/* Bluish overhead lamp with increased intensity for cool effect */}
    <spotLight
      position={[4, 5, 4]}
      angle={0.3}
      penumbra={0.5}
      intensity={1.8} // Increased intensity for brighter visibility
      color="#4cc9f0"
      castShadow
    />
    {/* Purple side fill light for accent */}
    <spotLight
      position={[-3, 5, 5]}
      angle={0.4}
      penumbra={1}
      intensity={1.2} // Increased intensity for brighter accent lighting
      color="#9d4edd"
      castShadow
    />
    {/* Area light for softer and more diffuse mood lighting */}
    <primitive
      object={new THREE.RectAreaLight("#a259ff", 8, 3, 2)}
      position={[1, 3, 4]}
      rotation={[-Math.PI / 4, Math.PI / 4, 0]}
      intensity={1.0} // Increased intensity for more light diffusion
    />
    {/* Subtle point light for an atmospheric tone */}
    <pointLight
      position={[0, 1, 0]}
      intensity={1.0} // Increased for brighter atmospheric light
      color="#7209b7"
      castShadow
    />
    {/* Intense blue point light for highlighting certain areas */}
    <pointLight
      position={[1, 2, -2]}
      intensity={1.8} // Increased intensity for stronger emphasis
      color="#0d00a4"
      castShadow
    />
  </>
);

export default OfficeLight;
