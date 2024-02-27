import React, { useRef, useState, useEffect } from "react";
import { useGLTF, Text as DreiText } from "@react-three/drei";
import { useThree, useFrame } from "@react-three/fiber";
import { MeshTransmissionMaterial } from "@react-three/drei";
import { debounce } from "lodash";
import { gsap } from "gsap";

export default function Model() {
  const { nodes } = useGLTF("/medias/torrus.glb");
  const { viewport } = useThree();
  const meshRef = useRef();
  const textRef = useRef();
  const [isHovered, setIsHovered] = useState(false);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += isHovered ? 0.05 : 0.015;
    }
  });

  useEffect(() => {
    gsap.to(meshRef.current.position, {
      x: isHovered ? -1.2 : 0,
      duration: 1.5, // decreased from 3 to 1.5
      ease: "elastic.out(0.1, 0.1)",
    });
    gsap.to(meshRef.current.scale, {
      x: isHovered ? 0.4 : 1,
      y: isHovered ? 0.4 : 1,
      z: isHovered ? 0.4 : 1,
      duration: 1.5, // decreased from 3 to 1.5
      ease: "elastic.out(0.1, 0.1)",
    });
    gsap.to(textRef.current.scale, {
      x: isHovered ? 1 : 0.8,
      y: isHovered ? 1 : 0.8,
      z: isHovered ? 1 : 0.8,
      duration: 1.5, // decreased from 3 to 1.5
      ease: "elastic.out(0.1, 0.1)",
    });
  }, [isHovered]);

  const debouncedSetIsHovered = debounce((newHoverState) => {
    setIsHovered(newHoverState);
  }, 25);

  const lettersStyling = {
    font: "/fonts/PPNeueMontreal-Bold.otf",
    fontSize: 0.5,
    anchorX: "center",
    anchorY: "middle",
    letterSpacing: isHovered ? 0.5 : 0.2,
    opacity: 0,
    color: isHovered ? "black" : "#FDF9EF",
    scale: isHovered ? [1, 1, 1] : [0.8, 0.8, 0.8],
    onPointerOver: () => debouncedSetIsHovered(true),
    onPointerOut: () => debouncedSetIsHovered(false),
  };

  return (
    <group scale={viewport.width / 3.75}>
      <mesh ref={meshRef} geometry={nodes.Torus002.geometry}>
        <MeshTransmissionMaterial
          scale={isHovered ? [1, 1, 1] : [0.8, 0.8, 0.8]}
          color="white"
          thickness={1}
          roughness={isHovered ? 2 : 0}
          transmission={1}
          ior={0.9}
          chromaticAberration={1}
          backside={true}
          config={{ tension: 100, friction: 20 }}
        />
      </mesh>
      <DreiText ref={textRef} {...lettersStyling}>
        {isHovered ? "  SKAR" : "Herman"}
      </DreiText>
    </group>
  );
}
