"use client";
import { Canvas } from "@react-three/fiber";
import Model from "./Model";
import { Environment } from "@react-three/drei";

export default function SceneProjects() {
  return (
    <div className={`absolute top-0 left-0 h-screen w-screen z-100`}>
      <Canvas>
        <Model />
        <directionalLight />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
