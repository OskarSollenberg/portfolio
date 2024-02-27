import React, { useRef, useState, useEffect } from "react";
import {
  MeshTransmissionMaterial,
  useGLTF,
  Text as DreiText,
} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useSpring, animated } from "@react-spring/three";

const AnimatedMeshTransmissionMaterial = animated(MeshTransmissionMaterial);
const AnimatedText = animated(DreiText);

function useWindowMouseMove() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    function handleMouseMove(event) {
      setMousePosition({ x: event.clientX, y: event.clientY });
    }
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  return mousePosition;
}

function calculateDistanceFromCenter(x, y) {
  return Math.sqrt(
    Math.pow(x - window.innerWidth / 2, 2) +
      Math.pow(y - window.innerHeight / 2, 2)
  );
}

export default function Model() {
  const { nodes } = useGLTF("/medias/torrus.glb");
  const { viewport } = useThree();
  const circleLoaded = useRef();

  const { x, y } = useWindowMouseMove();
  const distanceFromCenter = calculateDistanceFromCenter(x, y);
  const maxDistance = calculateDistanceFromCenter(
    window.innerWidth,
    window.innerHeight
  );
  const isCloseToCenter = distanceFromCenter < window.innerWidth / 4;
  const scaleValue = isCloseToCenter ? [1, 1, 1] : [0.8, 0.8, 0.8];

  useFrame(() => {
    if (circleLoaded.current) {
      circleLoaded.current.rotation.x += 0.015;
    }
  });

  const circlePosition = useSpring({
    position: isCloseToCenter ? [-1.2, -0.01, 0] : [0, 0, 0],
    config: { mass: 5, tension: 300, friction: 50 },
  });

  const startingMeshValues = useSpring({
    scale: scaleValue,
    color: "white",
    thickness: 1,
    roughness: isCloseToCenter ? 2 : 0,
    transmission: 1,
    ior: 0.9,
    chromaticAberration: 1,
    backside: true,
    config: { tension: 100, friction: 20 },
  });

  const dynamicMeshValues = useSpring({
    scale: isCloseToCenter ? [0.4, 0.4, 0.4] : [1, 1, 1],
    config: { tension: 70, friction: 7 },
  });

  const letterSpacingSpring = useSpring({
    letterSpacing: isCloseToCenter ? 0.5 : 0.2,
    config: { tension: 70, friction: 20 },
  });

  const lettersStyling = {
    font: "/fonts/PPNeueMontreal-Bold.otf",
    fontSize: 0.5,
    anchorX: "center",
    anchorY: "middle",
    letterSpacing: letterSpacingSpring.letterSpacing,
    opacity: 0,
    // visible: isCloseToCenter ? true : false,
    color: isCloseToCenter ? "black" : "white",
    scale: scaleValue,
  };

  return (
    <group scale={viewport.width / 3.75}>
      <animated.mesh
        ref={circleLoaded}
        {...nodes.Torus002}
        position={circlePosition.position}
        {...startingMeshValues}
        {...dynamicMeshValues}
      >
        <AnimatedMeshTransmissionMaterial {...startingMeshValues} />
      </animated.mesh>
      <AnimatedText {...lettersStyling}>
        {isCloseToCenter ? `  SKAR` : "Herman"}
      </AnimatedText>
    </group>
  );
}
