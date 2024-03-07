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
  fontSize = 0.5,
  position = [0, 0, 0],
}) {
  const letterSpacingSpring = useSpring({
    letterSpacing: isHovered ? 0.26 : 0.2,
    config: { tension: 80, friction: 10 },
  });

  const textTransition = useSpring({
    opacity: isHovered ? 1 : 0,
    config: { tension: 50, friction: 20 },
  });

  //   const lettersStyling = {
  //     font: FONT_PATH,
  //     fontSize,
  //     letterSpacing: letterSpacingSpring.letterSpacing,
  //     color: isHovered ? "black" : "#FFFFFF",
  //     onPointerOver: () => handleHover(true),
  //     onPointerOut: () => handleHover(false),
  //     position,
  //   };

  return (
    <AnimatedText
      ref={textRef}
      style={{ ...letterSpacingSpring, ...textTransition }}
      font={FONT_PATH}
      fontSize={fontSize}
      letterSpacing={letterSpacingSpring.letterSpacing}
      color={isHovered ? "white" : "white"}
      onPointerOver={() => handleHover(true)}
      onPointerOut={() => handleHover(false)}
      position={position}
      visible={visible}
    >
      {text}
    </AnimatedText>
  );
}
