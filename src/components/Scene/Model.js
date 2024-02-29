import React, { useRef, useState, useEffect, use } from "react";
import { useGLTF, Text as DreiText } from "@react-three/drei";
import { useThree, useFrame } from "@react-three/fiber";
import { MeshTransmissionMaterial } from "@react-three/drei";
import { gsap } from "gsap";
import { useSpring, animated } from "react-spring";

export default function Model() {
  const AnimatedText = animated(DreiText);
  const AnimatedMesh = animated(MeshTransmissionMaterial);
  const meshRef = useRef();
  const textRef = useRef();
  const { viewport } = useThree();
  const { nodes } = useGLTF("/medias/torrus.glb");

  const [isHovered, setIsHovered] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsHovered(false);
    }, 4000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  // maby use white
  const meshValues = useSpring({
    //F97315
    //white
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
    meshRef.current.rotation.x += isHovered ? 0.05 : 0.015;
  });

  // Hover
  let hoverTimeout;
  const handleHover = (newHoverState) => {
    clearTimeout(hoverTimeout);
    hoverTimeout = setTimeout(() => {
      setIsHovered(newHoverState);
    }, 40);
  };

  useEffect(() => {
    if (meshRef.current) {
      gsap.to(meshRef.current.position, {
        x: isHovered ? -1.2 : 0,
        duration: 1.5,
        ease: "elastic.out(0.1, 0.1)",
      });
      gsap.to(meshRef.current.scale, {
        x: isHovered ? 0.4 : 1,
        y: isHovered ? 0.4 : 1,
        z: isHovered ? 0.4 : 1,
        duration: 1.5,
        ease: "elastic.out(0.1, 0.1)",
      });
    }
  }, [isHovered]);

  // Letters
  const letterSpacingSpring = useSpring({
    letterSpacing: isHovered ? 0.5 : 0.2,
    config: { tension: 100, friction: 10 },
  });
  const lettersStyling = {
    font: "/fonts/PPNeueMontreal-Bold.otf",
    fontSize: 0.5,
    letterSpacing: letterSpacingSpring.letterSpacing,
    color: isHovered ? "yellow" : "white",
    scale: isHovered ? [1, 1, 1] : [0.8, 0.8, 0.8],
    onPointerOver: () => handleHover(true),
    onPointerOut: () => handleHover(false),
    isVisible: true,
  };

  return (
    <group scale={viewport.width / 3.75}>
      <mesh ref={meshRef} geometry={nodes.Torus002.geometry}>
        <AnimatedMesh {...meshValues} />
      </mesh>
      <AnimatedText
        ref={textRef}
        style={letterSpacingSpring}
        {...lettersStyling}
        visible={lettersStyling.isVisible}
      >
        {isHovered ? ["  ", "S", "K", "A", "R"] : "Herman"}
      </AnimatedText>
    </group>
  );
}
