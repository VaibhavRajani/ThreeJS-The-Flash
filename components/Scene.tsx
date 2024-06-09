"use client";
// components/Scene.tsx
import { Canvas } from "@react-three/fiber";
import Model from "./Model";
import { Suspense } from "react";
import { Html, useProgress, ScrollControls } from "@react-three/drei";

const Scene = () => {
  const { progress, active } = useProgress();

  return (
    <div className="relative  h-full overflow-hidden">
      <Canvas className="w-1/5">
        <directionalLight position={[-5, -5, 5]} intensity={4} />
        <Suspense
          fallback={<Html center>{`${progress.toFixed(1)} % loaded`}</Html>}
        >
          <ScrollControls damping={0.5} pages={3}>
            <Model />
          </ScrollControls>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene;
