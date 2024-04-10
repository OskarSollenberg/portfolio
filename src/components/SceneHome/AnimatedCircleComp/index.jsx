import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { animated, useSpring } from "react-spring";
import { MeshTransmissionMaterial } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import useLoading from "@/src/hooks/useLoading";

const ROTATION_SPEED_HOVERED = 0.03;
const ROTATION_SPEED_NOT_HOVERED = 0.015;
const MODEL_PATH = "/medias/torrus-comp.glb";

const AnimatedMesh = animated(MeshTransmissionMaterial);

export default function AnimatedCircleComponent({ isHovered }) {
  const meshRef = useRef();
  const { nodes } = useGLTF(MODEL_PATH);
  const loading = useLoading();

  const circleStyles = useSpring({
    color: "#F16721",
    thickness: isHovered ? 2 : 0.2,
    roughness: isHovered ? 5 : 0,
    transmission: isHovered ? 0 : 1,
    ior: isHovered ? 1.3 : 0.9,
    chromaticAberration: isHovered ? 0 : 1,
    backside: true,
    // config: { tension: 50, friction: 10 },
  });

  // useEffect for handling hover state
  useEffect(() => {
    function animateCircle(circle, isHovered) {
      gsap.to(circle.position, {
        x: isHovered ? -0.94 : 0,
        duration: 1.7,
        ease: "elastic.out(0.1, 0.1)",
      });
      gsap.to(circle.scale, {
        x: isHovered ? 0.36 : 1,
        y: isHovered ? 0.36 : 1,
        z: isHovered ? 0.36 : 1,
        duration: 1.5,
        ease: "elastic.out(0.1, 0.1)",
      });
    }

    if (meshRef.current) {
      animateCircle(meshRef.current, isHovered);
    }
  }, [isHovered]);

  useEffect(() => {
    function animateCircle(circle) {
      gsap.to(circle.position, {
        x: 0, // Set initial x position to 0
        duration: 1.5,
        ease: "elastic.out(0.1, 0.1)",
      });
      gsap.to(circle.scale, {
        x: 0.5,
        y: 0.5,
        z: 0.5,
        duration: 1.5,
        ease: "elastic.out(0.1, 0.1)",
      });
    }

    if (meshRef.current && loading) {
      animateCircle(meshRef.current);
    }
  }, [loading]);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += isHovered
        ? ROTATION_SPEED_HOVERED
        : ROTATION_SPEED_NOT_HOVERED;
    }
  });

  return (
    <mesh meshRef={meshRef} ref={meshRef} geometry={nodes.Torus002.geometry}>
      <AnimatedMesh {...circleStyles} />
    </mesh>
  );
}
