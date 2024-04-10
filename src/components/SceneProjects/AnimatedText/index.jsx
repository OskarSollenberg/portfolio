import { animated } from "react-spring";
import { Text as DreiText } from "@react-three/drei";
const FONT_PATH = "/fonts/PPNeueMontreal-Bold.otf";
const AnimatedText = animated(DreiText);

export default function AnimatedTextComponent({
  textRef,
  visible,
  text,
  fontSize = 0.5,
  position = [0, 0, 0],
}) {
  return (
    <AnimatedText
      ref={textRef}
      font={FONT_PATH}
      fontSize={fontSize}
      letterSpacing={0.2}
      color={"#ff4400"}
      position={position}
      visible={visible}
    >
      {text}
    </AnimatedText>
  );
}
