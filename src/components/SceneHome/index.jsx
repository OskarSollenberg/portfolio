"use client";
import { Canvas } from "@react-three/fiber";
import Model from "./Model";
import { Environment } from "@react-three/drei";
import { useEffect } from "react";

export default function SceneHome() {
  return (
    <div className={`w-[100dvw] h-[100dvh] -z-10`}>
      <Canvas>
        <Model />
        <directionalLight />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
