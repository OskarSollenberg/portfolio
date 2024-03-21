"use client";
import { Canvas } from "@react-three/fiber";
import Model from "./Model";
import { Environment } from "@react-three/drei";

export default function Scene() {
  return (
    <div className={`w-screen h-screen z-10`}>
      <Canvas>
        <Model />
        <directionalLight />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
