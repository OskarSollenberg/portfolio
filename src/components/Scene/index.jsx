"use client";
import { Canvas } from "@react-three/fiber";
import Model from "./Model";
import { Environment } from "@react-three/drei";
// import { PerspectiveCamera } from "@react-three/drei";
//  #FDF9EF
//  #E43B13

export default function Index() {
  return (
    <div className="overflow-hidden h-screen">
      <Canvas>
        <Model />
        <directionalLight />
        <Environment preset="city" />
        {/* <PerspectiveCamera makeDefault position={[2, 2, 10]} /> */}
      </Canvas>
    </div>
  );
}

//   <directionalLight intensity={2} position={[0, 2, 3]} />;

// sunset;
// dawn;
// night;
// warehouse;
// forest;
// apartment;
// studio;
// city;
// park;
// lobby;
// cloudy;
// sunny;
