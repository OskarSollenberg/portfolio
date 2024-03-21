import React, { useState, useEffect } from "react";
import { useThree } from "@react-three/fiber";
import AnimatedTextComponent from "./AnimatedText";
import AnimatedCircleComponent from "./AnimatedCircleComp";
import useLoading from "@/src/hooks/useLoading";

export default function Model() {
  const { viewport } = useThree();
  const isLoading = useLoading();
  const scale =
    window.innerWidth < 600
      ? viewport.width / 2.8
      : window.innerWidth < 1000
      ? viewport.width / 3
      : viewport.width / 3.5;

  const texts = [
    { text: "PR  JECTS", fontSize: 0.4, position: [0, 0, 0], visible: true },
  ];

  return (
    <group scale={scale}>
      <AnimatedCircleComponent />
      {texts.map(({ text, fontSize, position, visible }, index) => (
        <AnimatedTextComponent
          key={index}
          visible={visible}
          handleHover={(newHoverState) => handleHover(newHoverState, text)}
          text={isLoading ? "" : text}
          fontSize={fontSize}
          position={position}
        />
      ))}
    </group>
  );
}
