import React, { useRef, useState, useEffect } from "react";
import { useGLTF, Text as DreiText } from "@react-three/drei";
import { useThree, useFrame } from "@react-three/fiber";
import { MeshTransmissionMaterial } from "@react-three/drei";
import { gsap } from "gsap";
import { useSpring, animated } from "react-spring";

import { Vector3, BufferGeometry, LineBasicMaterial } from "three";

const AnimatedText = animated(DreiText);
const AnimatedMesh = animated(MeshTransmissionMaterial);

export default function Model() {
  const meshRef = useRef();
  const textRef = useRef();
  const { viewport } = useThree();
  const { nodes } = useGLTF("/medias/torrus.glb");

  const [isHovered, setIsHovered] = useState(false);

  const startingMeshValues = useSpring({
    scale: isHovered ? [1, 1, 1] : [0.8, 0.8, 0.8],
    color: "#F97315",
    thickness: 0.2,
    roughness: isHovered ? 2 : 0,
    transmission: 1,
    ior: 1,
    chromaticAberration: 1,
    backside: true,
    config: { tension: 80, friction: 10 },
  });

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += isHovered ? 0.05 : 0.015;
    }
  });

  // Hover
  let hoverTimeout;
  const handleHover = (newHoverState) => {
    clearTimeout(hoverTimeout);
    hoverTimeout = setTimeout(() => {
      setIsHovered(newHoverState);
    }, 40); // Increase delay to 100ms
  };
  useEffect(() => {
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
  }, [isHovered]);

  // Letters
  const letterSpacingSpring = useSpring({
    letterSpacing: isHovered ? 0.5 : 0.2,
    config: { tension: 100, friction: 10 },
  });
  const lettersStyling = {
    font: "/fonts/PPNeueMontreal-Bold.otf",
    fontSize: 0.5,
    anchorX: "center",
    anchorY: "middle",
    letterSpacing: letterSpacingSpring.letterSpacing,
    color: isHovered ? "black" : "#FDF9EF",
    scale: isHovered ? [1, 1, 1] : [0.8, 0.8, 0.8],
    onPointerOver: () => handleHover(true),
    onPointerOut: () => handleHover(false),
  };

  function Line({ start, end }) {
    const points = [start, end];
    const geometry = new BufferGeometry().setFromPoints(points);
    const material = new LineBasicMaterial({ color: "black" });
    return <line geometry={geometry} material={material} />;
  }

  return (
    <group scale={viewport.width / 3.75}>
      <mesh ref={meshRef} geometry={nodes.Torus002.geometry}>
        <AnimatedMesh {...startingMeshValues} />
      </mesh>
      <AnimatedText
        ref={textRef}
        style={letterSpacingSpring}
        {...lettersStyling}
      >
        {isHovered ? "  SKAR" : "Herman"}
      </AnimatedText>
      <Line start={new Vector3(-0.5, 0, 0.1)} end={new Vector3(0.5, 0, 0.1)} />
    </group>
  );
}
