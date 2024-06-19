'use client';
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

export default function ProgressBar() {
  const progressBar = useRef(null);

  const calculateScrollPercent = () => {
    const scrollY = window.scrollY;
    const fullHeight = document.body.scrollHeight - window.innerHeight;
    return scrollY / fullHeight;
  };

  useEffect(() => {
    const updateScrollPosition = () => {
      const scrollPercent = calculateScrollPercent();
      gsap.to(progressBar.current, { width: `${scrollPercent * 100}%` });
    };

    window.addEventListener('scroll', updateScrollPosition);

    return () => {
      window.removeEventListener('scroll', updateScrollPosition);
    };
  }, []);

  return (
    <div
      className={`bottom-0 left-0 h-2 bg-[transparent] w-full fixed z-[5000] `}
    >
      <div
        ref={progressBar}
        className={`rounded-xl h-full w-0 bg-[#F3691F]`}
      ></div>
    </div>
  );
}
