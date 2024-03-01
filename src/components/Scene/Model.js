import React, { useState, useEffect } from "react";
import { useThree } from "@react-three/fiber";
import AnimatedTextComponent from "../AnimatedText";

import AnimatedCircle from "../AnimatedCircle";

const HOVER_ENABLE_DELAY_MS = 4000;

export default function Model() {
  const { viewport } = useThree();
  const [isHovered, setIsHovered] = useState(true);
  const [canHover, setCanHover] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsHovered(false);
      setCanHover(true);
    }, HOVER_ENABLE_DELAY_MS);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const handleHover = (newHoverState) => {
    if (!canHover) return;
    setIsHovered(newHoverState);
  };

  return (
    <group scale={viewport.width / 3.75}>
      <AnimatedCircle isHovered={isHovered} />
      <AnimatedTextComponent
        visible={isHovered}
        handleHover={handleHover}
        isHovered={isHovered}
        text={"  SKAR"}
      />
      <AnimatedTextComponent
        visible={!isHovered}
        handleHover={handleHover}
        isHovered={isHovered}
        text={"Herman"}
      />
    </group>
  );
}
