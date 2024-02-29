import React, { useRef, useState, useEffect } from "react";
import { useGLTF, Text as DreiText } from "@react-three/drei";
import { useThree, useFrame } from "@react-three/fiber";
import { MeshTransmissionMaterial } from "@react-three/drei";
import { gsap } from "gsap";
import { useSpring, animated } from "react-spring";

const HOVER_TIMEOUT = 4000;
const ROTATION_SPEED_HOVERED = 0.05;
const ROTATION_SPEED_NOT_HOVERED = 0.015;

const AnimatedText = animated(DreiText);
const AnimatedMesh = animated(MeshTransmissionMaterial);

function animateMesh(mesh, isHovered) {
  gsap.to(mesh.position, {
    x: isHovered ? -1.2 : 0,
    duration: 1.5,
    ease: "elastic.out(0.1, 0.1)",
  });
  gsap.to(mesh.scale, {
    x: isHovered ? 0.4 : 1,
    y: isHovered ? 0.4 : 1,
    z: isHovered ? 0.4 : 1,
    duration: 1.5,
    ease: "elastic.out(0.1, 0.1)",
  });
}

export default function Model() {
  const meshRef = useRef();
  const textRefOskar = useRef();
  const textRefHerman = useRef();
  const { viewport } = useThree();
  const { nodes } = useGLTF("/medias/torrus.glb");

  const [isHovered, setIsHovered] = useState(true);
  const [canHover, setCanHover] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsHovered(false);
      setCanHover(true);
    }, HOVER_TIMEOUT);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const meshValues = useSpring({
    color: isHovered ? "yellow" : "#F97315",
    thickness: isHovered ? 4 : 0.2,
    roughness: 0,
    transmission: 1,
    ior: isHovered ? 2 : 1,
    chromaticAberration: isHovered ? 0 : 1,
    backside: true,
    config: { tension: 50, friction: 10 },
  });

  useFrame(() => {
    meshRef.current.rotation.x += isHovered
      ? ROTATION_SPEED_HOVERED
      : ROTATION_SPEED_NOT_HOVERED;
  });

  let hoverTimeout;
  const handleHover = (newHoverState) => {
    if (!canHover) return;
    clearTimeout(hoverTimeout);
    hoverTimeout = setTimeout(() => {
      setIsHovered(newHoverState);
    }, 40);
  };

  useEffect(() => {
    if (meshRef.current) {
      animateMesh(meshRef.current, isHovered);
    }
  }, [isHovered]);

  const letterSpacingSpring = useSpring({
    letterSpacing: isHovered ? 0.5 : 0.2,
    config: { tension: 100, friction: 10 },
  });
  const lettersStyling = {
    font: "/fonts/PPNeueMontreal-Bold.otf",
    fontSize: 0.5,
    letterSpacing: letterSpacingSpring.letterSpacing,
    color: isHovered ? "#E43B13" : "white",
    onPointerOver: () => handleHover(true),
    onPointerOut: () => handleHover(false),
    isVisible: true,
  };

  const textTransitionOskar = useSpring({
    opacity: isHovered ? 1 : 0,
    config: { tension: 50, friction: 20 },
  });

  const textTransitionHerman = useSpring({
    opacity: isHovered ? 0 : 1,
    config: { tension: 50, friction: 20 },
  });

  return (
    <group scale={viewport.width / 3.75}>
      <mesh ref={meshRef} geometry={nodes.Torus002.geometry}>
        <AnimatedMesh {...meshValues} />
      </mesh>
      <AnimatedText
        ref={textRefOskar}
        style={{ ...letterSpacingSpring, ...textTransitionOskar }}
        {...lettersStyling}
        visible={isHovered}
      >
        {"  SKAR"}
      </AnimatedText>
      <AnimatedText
        ref={textRefHerman}
        style={{ ...letterSpacingSpring, ...textTransitionHerman }}
        {...lettersStyling}
        visible={!isHovered}
      >
        Herman
      </AnimatedText>
    </group>
  );
}
