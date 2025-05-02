import React, { useRef, useMemo, useEffect } from "react";
import {
  useGLTF,
  useAnimations,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { SkeletonUtils } from "three-stdlib";
import { useGraph } from "@react-three/fiber";

export function Office(props) {
  const group = useRef();

  // Load GLTF model and animations
  const { scene, animations } = useGLTF("/models/office_worker.glb");

  // Clone the model to preserve bone/animation structure
  const clonedScene = useMemo(() => SkeletonUtils.clone(scene), [scene]);

  // Extract nodes and materials from the cloned scene
  const { nodes, materials } = useGraph(clonedScene);

  // Destructure actions from useAnimations
  const { actions } = useAnimations(animations, group);

  // Automatically play all animations when loaded
  useEffect(() => {
    if (actions) {
      Object.values(actions).forEach((action) => {
        action.reset().play();
      });
    }
  }, [actions]);

  return (
    <>
      {/* Perspective Camera with adjustable field of view and zoom limits */}
      <PerspectiveCamera makeDefault position={[18, 0, 4]} fov={30}>
        {/* OrbitControls to enable zoom and pan */}
        <OrbitControls minDistance={5} maxDistance={90} />
      </PerspectiveCamera>

      <group
        ref={group}
        {...props}
        dispose={null}
        scale={[2.5, 2.5, 2.5]}
        rotation={[0, Math.PI, 0]}
      >
        {/* Use the nodes and materials */}
        <primitive object={clonedScene} />

        {/* Example of applying materials to specific nodes (update node names after inspecting logs) */}
        <mesh
          geometry={nodes["CorrectNodeName"]?.geometry} // Update with correct node name
          material={materials["CorrectMaterialName"]} // Update with correct material name
        />
      </group>
    </>
  );
}

// Preload the model
useGLTF.preload("/models/office_worker.glb");
