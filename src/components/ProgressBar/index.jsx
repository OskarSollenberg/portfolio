'use client';
import React, { useRef, useEffect, useCallback } from 'react';
import { gsap } from 'gsap';

export default function ProgressBar() {
  const progressBar = useRef(null);

  const calculateScrollPercent = () => {
    const scrollY = window.scrollY;
    const fullHeight = document.body.scrollHeight - window.innerHeight;
    return scrollY / fullHeight;
  };

  const updateScrollPosition = useCallback(() => {
    const scrollPercent = calculateScrollPercent();
    gsap.to(progressBar.current, { width: `${scrollPercent * 100}%` });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', updateScrollPosition);

    return () => {
      window.removeEventListener('scroll', updateScrollPosition);
    };
  }, [updateScrollPosition]);

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
