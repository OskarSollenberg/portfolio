import React from "react";
import { animated } from "react-spring";
import { Text as DreiText } from "@react-three/drei";
import { Html } from "@react-three/drei";

const FONT_PATH = "/fonts/PPNeueMontreal-Bold.otf";

const AnimatedText = animated(DreiText);

export default function AnimatedTextComponent({
  textRef,
  visible,
  text,
  fontSize = 1,
  position = [0, 0, 0],
}) {
  return (
    <>
      <AnimatedText
        ref={textRef}
        font={FONT_PATH}
        letterSpacing={0.2}
        color={"black"}
        position={position}
        visible={visible}
        fontSize={fontSize}
      >
        {text}
      </AnimatedText>
      <Html position={[-2.8, -0.7, 0]}>
        <p className=" w-[30rem]">
          Here are some of the projects I have worked on throughout my time on
          Hyper Island. Click on the cards to see more details.
        </p>
      </Html>
    </>
  );
}
