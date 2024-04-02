"use client";
import { Canvas } from "@react-three/fiber";
import Model from "./Model";
import { Environment } from "@react-three/drei";

import { useEffect, useState } from "react";

export default function SceneHome() {
  const [height, setHeight] = useState(null);

  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).cssText;
    document.body.style.cssText = `position: fixed; top: -${window.scrollY}px`;

    // Set the height state to the window's inner height
    setHeight(window.innerHeight);

    // Update the height state whenever the window is resized
    const handleResize = () => {
      setHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      document.body.style.cssText = originalStyle;
      window.scrollTo(0, parseInt(document.body.style.top || "0") * -1);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        height: `${height}px`,
        position: "absolute",
        zIndex: -10,
      }}
    >
      <Canvas>
        <Model />
        <directionalLight />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
