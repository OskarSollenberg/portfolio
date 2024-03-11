import React, { useState, useEffect } from "react";
import { useThree } from "@react-three/fiber";
import AnimatedCircleComponent from "./AnimatedCircleComp";
import useLoading from "@/src/hooks/useLoading";

export default function Model() {
  const { viewport } = useThree();
  const isLoading = useLoading();
  const [isHovered, setIsHovered] = useState(true);

  useEffect(() => {
    if (isLoading) return;
    setIsHovered(false);
  }, [isLoading]);

  const scale =
    window.innerWidth < 600
      ? viewport.width / 1
      : window.innerWidth < 1000
      ? viewport.width / 1
      : viewport.width / 1;

  return (
    <group scale={scale}>
      <AnimatedCircleComponent isHovered={!isHovered} />
    </group>
  );
}
