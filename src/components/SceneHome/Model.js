import React, { useState, useEffect } from "react";
import { useThree } from "@react-three/fiber";
import AnimatedTextComponent from "./AnimatedText";
import AnimatedCircleComponent from "./AnimatedCircleComp";
import useLoading from "@/src/hooks/useLoading";
import { color } from "framer-motion";

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
    window.innerWidth < 600
      ? viewport.width / 2.8
      : window.innerWidth < 1000
      ? viewport.width / 2.8
      : viewport.width / 3.5;

  const isSmallScreen = window.innerWidth < 1000;

  const texts = [
    {
      text: "SKAR",
      fontSize: 0.5,
      position: [0.3, 0, 0],
      visible: true,
      color: "#fd4110",
    },
    {
      text: "PORTFOLIO BY",
      fontSize: isSmallScreen ? 0.1 : 0.05,
      position: isSmallScreen ? [-0.65, 0.4, 0] : [-0.95, 0.3, 0],
      visible: true,
      color: "black",
    },
    {
      text: "HERMAN SOLLENBERG",
      fontSize: isSmallScreen ? 0.1 : 0.05,
      position: isSmallScreen ? [0.4, -0.4, 0] : [0.8, -0.3, 0],
      visible: true,
      textDecoration: "underline",
      color: "black",
    },
    { text: "Herman", visible: false, color: "#fd4110" },
  ];

  return (
    <group scale={scale}>
      <AnimatedCircleComponent isHovered={!isHovered} />
      {texts.map(({ text, fontSize, position, visible, color }, index) => (
        <AnimatedTextComponent
          key={index}
          visible={visible ? !isHovered : isHovered}
          handleHover={(newHoverState) => handleHover(newHoverState, text)}
          isHovered={!isHovered}
          text={isLoading ? "" : text}
          fontSize={fontSize}
          position={position}
          color={color}
        />
      ))}
    </group>
  );
}
