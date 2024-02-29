// AnimatedTextComponent.js
import React from "react";
import { animated, useSpring } from "react-spring";
import { Text as DreiText } from "@react-three/drei";

const FONT_PATH = "/fonts/PPNeueMontreal-Bold.otf";
const AnimatedText = animated(DreiText);

export default function AnimatedTextComponent({
  textRef,
  visible,
  handleHover,
  isHovered,
  text,
}) {
  const letterSpacingSpring = useSpring({
    letterSpacing: isHovered ? 0.5 : 0.2,
    config: { tension: 100, friction: 10 },
  });

  const textTransition = useSpring({
    opacity: isHovered ? 1 : 0,
    config: { tension: 50, friction: 20 },
  });

  const lettersStyling = {
    font: FONT_PATH,
    fontSize: 0.5,
    letterSpacing: letterSpacingSpring.letterSpacing,
    color: isHovered ? "#E43B13" : "white",
    onPointerOver: () => handleHover(true),
    onPointerOut: () => handleHover(false),
    isVisible: true,
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
