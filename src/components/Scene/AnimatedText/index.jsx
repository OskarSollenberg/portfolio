import React from "react";
import { animated, useSpring } from "react-spring";
import { Text as DreiText } from "@react-three/drei";

const FONT_PATH = "/fonts/PPNeueMontreal-Bold.otf";
// const FONT_PATH = "/fonts/Migha-BlackCondensedCNTR.otf";
// const FONT_PATH = "/fonts/Class-357-Regular.ttf";
// const FONT_PATH = "/fonts/AkhbarBold.ttf";
// const FONT_PATH = "/fonts/Mortend-Extra-Bold.otf";

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

  return (
    <AnimatedText
      ref={textRef}
      style={{ ...letterSpacingSpring, ...textTransition }}
      font={FONT_PATH}
      fontSize={fontSize}
      letterSpacing={letterSpacingSpring.letterSpacing}
      color={isHovered ? "#5ea163" : "#e43b13"}
      onPointerOver={() => handleHover(true)}
      onPointerOut={() => handleHover(false)}
      position={position}
      visible={visible}
    >
      {text}
    </AnimatedText>
  );
}
