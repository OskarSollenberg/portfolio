"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { animated } from "react-spring";
import { MeshTransmissionMaterial } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import useLoading from "@/src/hooks/useLoading";

const MODEL_PATH = "/medias/torrus.glb";

const AnimatedMesh = animated(MeshTransmissionMaterial);

export default function AnimatedCircleComponent() {
  const meshRef = useRef();
  const { nodes } = useGLTF(MODEL_PATH);
  const loading = useLoading();

  useEffect(() => {
    function animateCircle(circle) {
      if (loading) {
        gsap.to(circle.position, {
          x: 0,
          y: 0,
          duration: 1.5,
          ease: "elastic.out(0.1, 0.1)",
        });
        gsap.to(circle.scale, {
          x: 0.12,
          y: 0.12,
          z: 0.12,
          duration: 1.5,
          ease: "elastic.out(0.1, 0.1)",
        });
      } else {
        gsap.to(circle.position, {
          x: -0.175,
          y: 0.09,
          duration: 1.5,
          ease: "elastic.out(0.1, 0.1)",
        });
        gsap.to(circle.scale, {
          x: 0.065,
          y: 0.065,
          z: 0.065,
          duration: 1.5,
          ease: "elastic.out(0.1, 0.1)",
        });
      }
    }

    if (meshRef.current) {
      animateCircle(meshRef.current);
    }
  }, [loading]);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.015;
    }
  });

  return (
    <mesh ref={meshRef} geometry={nodes.Torus002.geometry}>
      <AnimatedMesh
        color="#F16721"
        thickness={0.2}
        roughness={0}
        transmission={1}
        ior={0.9}
        chromaticAberration={1}
        backside={true}
      />
    </mesh>
  );
}
