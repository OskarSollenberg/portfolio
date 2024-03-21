"use client";
import { Canvas } from "@react-three/fiber";
import Model from "./Model";
import { Environment } from "@react-three/drei";

export default function SceneHome() {
  return (
    <div className={`h-screen w-screen -z-10`}>
      <Canvas>
        <Model />
        <directionalLight />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
