"use client";
import { Canvas } from "@react-three/fiber";
import Model from "./Model";
import { Environment } from "@react-three/drei";
import { PerspectiveCamera } from "@react-three/drei";

export default function SceneAbout() {
  return (
    <div className={`w-screen h-screen z-10`}>
      <Canvas>
        <Model />
        <directionalLight />
        <Environment preset="city" />
        <PerspectiveCamera makeDefault position={[0, 0, 10]} />
      </Canvas>
    </div>
  );
}
