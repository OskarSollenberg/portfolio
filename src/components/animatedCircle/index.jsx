import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { animated, useSpring } from "react-spring";
import { MeshTransmissionMaterial } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const ROTATION_SPEED_HOVERED = 0.05;
const ROTATION_SPEED_NOT_HOVERED = 0.015;
const MODEL_PATH = "/medias/torrus.glb";

const AnimatedMesh = animated(MeshTransmissionMaterial);

export default function AnimatedCircle({ isHovered }) {
  const meshRef = useRef();
  const { nodes } = useGLTF(MODEL_PATH);

  // yellow
  // #F97315
  // white

  const circleStyles = useSpring({
    color: isHovered ? "yellow" : "#F97315",
    thickness: isHovered ? 4 : 0.2,
    roughness: 0,
    transmission: 1,
    ior: isHovered ? 2 : 1,
    chromaticAberration: isHovered ? 0 : 1,
    backside: true,
    config: { tension: 50, friction: 10 },
  });

  function animateCircle(circle, isHovered) {
    gsap.to(circle.position, {
      x: isHovered ? -1.2 : 0,
      duration: 1.5,
      ease: "elastic.out(0.1, 0.1)",
    });
    gsap.to(circle.scale, {
      x: isHovered ? 0.4 : 1,
      y: isHovered ? 0.4 : 1,
      z: isHovered ? 0.4 : 1,
      duration: 1.5,
      ease: "elastic.out(0.1, 0.1)",
    });
  }

  useEffect(() => {
    if (meshRef.current) {
      animateCircle(meshRef.current, isHovered);
    }
  }, [isHovered, meshRef]);

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
