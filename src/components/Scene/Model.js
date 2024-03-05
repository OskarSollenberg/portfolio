import React, { useState, useEffect } from "react";
import { useThree } from "@react-three/fiber";
import AnimatedTextComponent from "../AnimatedText";
import AnimatedCircleComponent from "../AnimatedCircleComp";
import useLoading from "@/src/hooks/useLoading";

export default function Model() {
  const { viewport } = useThree();
  const isLoading = useLoading();
  const [isHovered, setIsHovered] = useState(true);

  const handleHover = (newHoverState, text) => {
    if (isLoading || (text !== "SKAR" && text !== "Herman")) return;
    setIsHovered(newHoverState);
  };

  useEffect(() => {
    if (isLoading) return;
    setIsHovered(false);
  }, [isLoading]);

  const scale =
    window.innerWidth < 600 ? viewport.width / 3 : viewport.width / 4.5;

  const texts = [
    { text: "SKAR", fontSize: 0.5, position: [0.2, 0, 0], visible: true },
    {
      text: "Portfolio by and for",
      fontSize: 0.05,
      position: [-0.9, 0.3, 0],
      visible: true,
    },
    {
      text: "Herman Sollenberg",
      fontSize: 0.05,
      position: [0.75, -0.3, 0],
      visible: true,
      textDecoration: "underline",
    },
    { text: "Herman", visible: false },
  ];

  return (
    <group scale={scale}>
      <AnimatedCircleComponent isHovered={!isHovered} />
      {texts.map(({ text, fontSize, position, visible }, index) => (
        <AnimatedTextComponent
          key={index}
          visible={visible ? !isHovered : isHovered}
          handleHover={(newHoverState) => handleHover(newHoverState, text)}
          isHovered={!isHovered}
          text={isLoading ? "" : text}
          fontSize={fontSize}
          position={position}
        />
      ))}
    </group>
  );
}
