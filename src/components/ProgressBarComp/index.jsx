"use client";
import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";

export default function ProgressBarComp({ isHomePage }) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const progressBar = useRef(null);
  const [color, setColor] = useState("black");

  useEffect(() => {
    if (isHomePage) {
      gsap.fromTo(
        progressBar.current,
        {
          width: "0%",
          backgroundColor: color,
        },
        {
          width: "100%",
          duration: 3,
          onComplete: () => {
            gsap.set(progressBar.current, {
              width: "0%",
              backgroundColor: "#e43b13",
            });
          },
        }
      );
    }
  }, [isHomePage]);

  useEffect(() => {
    const updateScrollPosition = () => {
      const scrollY = window.scrollY;
      const fullHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = scrollY / fullHeight;
      setScrollPosition(scrollY);
      gsap.to(progressBar.current, { width: `${scrollPercent * 100}%` });
    };

    window.addEventListener("scroll", updateScrollPosition);

    return () => {
      window.removeEventListener("scroll", updateScrollPosition);
    };
  }, []);

  return (
    <>
      <div
        className={`bottom-0 left-0 h-2 bg-[transparent] w-full fixed z-[1000] `}
      >
        <div
          ref={progressBar}
          className={`rounded-xl h-full bg-[${color}]}`}
        ></div>
      </div>
    </>
  );
}
