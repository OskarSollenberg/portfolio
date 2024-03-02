import React, { useState, useEffect } from "react";
import { useThree } from "@react-three/fiber";
import AnimatedTextComponent from "../AnimatedText";
import AnimatedCircleComponent from "../AnimatedCircleComp";

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
    <group scale={viewport.width / 4.5}>
      <AnimatedCircleComponent isHovered={isHovered} />
      <AnimatedTextComponent
        visible={isHovered}
        handleHover={handleHover}
        isHovered={isHovered}
        canHover={canHover}
        text={!canHover ? "" : "  SKAR"}
      />
      <AnimatedTextComponent
        visible={isHovered}
        handleHover={handleHover}
        isHovered={isHovered}
        canHover={canHover}
        text={!canHover ? "" : "Made By"}
        fontSize={0.05}
        position={[-1.1, 0.3, 0]}
      />
      <AnimatedTextComponent
        visible={isHovered}
        handleHover={handleHover}
        isHovered={isHovered}
        canHover={canHover}
        text={!canHover ? "" : "Sollenberg"}
        fontSize={0.05}
        position={[0.9, -0.3, 0]}
      />
      <AnimatedTextComponent
        visible={!isHovered}
        handleHover={handleHover}
        isHovered={isHovered}
        canHover={canHover}
        text={"Herman"}
      />
    </group>
  );
}
