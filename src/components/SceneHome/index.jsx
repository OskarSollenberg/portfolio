'use client';
import { Canvas } from '@react-three/fiber';
import Model from './Model';
import { Environment } from '@react-three/drei';
import { useEffect } from 'react';
import { OrbitControls } from '@react-three/drei';

export default function SceneHome() {
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).cssText;
    document.body.style.cssText = 'position: fixed; top: -${window.scrollY}px';

    return () => {
      document.body.style.cssText = originalStyle;
      window.scrollTo(0, parseInt(document.body.style.top || '0') * -1);
    };
  }, []);

  return (
    <div className={`w-[100dvw] h-[100dvh] -z-10`}>
      <Canvas>
        <Model />
        <OrbitControls enableZoom={false} />
        <directionalLight />
        <Environment preset='night' background />
      </Canvas>
    </div>
  );
}
