import React, { useEffect } from "react";
import { useThree } from "@react-three/fiber";
import AnimatedTextComponent from "./AnimatedText";
import AnimatedCircleComponent from "./AnimatedCircleComp";
import useLoading from "@/src/hooks/useLoading";

export default function Model() {
  const { viewport } = useThree();
  const isLoading = useLoading();

  useEffect(() => {
    if (isLoading) return;
  }, [isLoading]);

  const texts = [
    { text: "PR JECTS", fontSize: 0.5, position: [0.2, 0, 0], visible: true },
  ];

  return (
    <group>
      <AnimatedCircleComponent />
      {texts.map(({ text, position, visible }, index) => (
        <AnimatedTextComponent
          key={index}
          visible={visible}
          text={isLoading ? "" : text}
          position={position}
        />
      ))}
    </group>
  );
}
