"use client";
import { useEffect, useRef } from "react";

import SplitType from "split-type";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function PageDescription() {
  const textRef = useRef(null);

  useEffect(() => {
    const split = new SplitType(textRef.current, {
      type: "lines,words,chars",
    });
    const chars = split.chars;

    gsap.from(chars, {
      opacity: 0,
      y: 20,
      stagger: 0.01,
      ease: "back.out",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top center",
      },
    });
  }, []);
  return (
    <div
      ref={textRef}
      className="w-screen text-center flex flex-col item-start p-10 text-[1.3rem] sm:text-[1.5rem] md:text-3xl text-black max-w-5xl mx-auto mb-[10rem] gap-10"
    >
      <p>
        {`Here is a showcase of my learning journey throughout my time at `}
        <span className="text-[#f3691f]">{`Hyper Island.`}</span>
      </p>
      <p>
        {`Some are my personal projects, but I've also had the pleasure of working with a variety of people. They are all smaller projects built with the sole purpose of learning.`}
      </p>
    </div>
  );
}
