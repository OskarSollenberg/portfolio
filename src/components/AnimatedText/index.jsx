import React from "react";
import { animated, useSpring } from "react-spring";
import { Text as DreiText } from "@react-three/drei";

const FONT_PATH = "/fonts/PPNeueMontreal-Bold.otf";
const AnimatedText = animated(DreiText);

// Inside AnimatedTextComponent.js

export default function AnimatedTextComponent({
  textRef,
  visible,
  handleHover,
  isHovered,
  text,
  fontSize = 0.5, // Add fontSize prop with a default value
  position = [0, 0, 0], // Add position prop with a default value
}) {
  const letterSpacingSpring = useSpring({
    letterSpacing: isHovered ? 0.26 : 0.2,
    config: { tension: 100, friction: 10 },
  });

  const textTransition = useSpring({
    opacity: isHovered ? 1 : 0,
    config: { tension: 50, friction: 20 },
  });

  const lettersStyling = {
    font: FONT_PATH,
    fontSize,
    letterSpacing: letterSpacingSpring.letterSpacing,
    color: isHovered ? "black" : "#FFFFFF",
    onPointerOver: () => handleHover(true),
    onPointerOut: () => handleHover(false),
    position, // Use position prop
  };

  return (
    <AnimatedText
      ref={textRef}
      style={{ ...letterSpacingSpring, ...textTransition }}
      {...lettersStyling}
      visible={visible}
    >
      {text}
    </AnimatedText>
  );
}
