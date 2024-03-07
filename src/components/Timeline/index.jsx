"use client";

import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";

export default function Timeline({ index }) {
  const [background, setBackground] = useState("");
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  const projects = [
    { title: "First Project", textSize: "5rem" },
    { title: "First Project", textSize: "5rem" },
    { title: "Most recent Project", textSize: "5rem" },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Check if component has mounted on the client side
    if (sectionRef.current) {
      const pin = gsap.fromTo(
        sectionRef.current,
        {
          translateX: 0,
        },
        {
          translateX: "-300vw",
          ease: "none",
          duration: 1,
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: "2000 top",
            scrub: 0.6,
            pin: true,
            onEnter: () => setBackground("#f3691f"),
            onLeaveBack: () => setBackground(""),
          },
        }
      );
      return () => {
        {
          /* A return function for killing the animation on component unmount */
        }
        pin.kill();
      };
    }
  }, []);

  return (
    <>
      <div
        style={{ background: background }}
        className={` w-full transition-all duration-500 text-[white] z-[${index}]`}
      >
        <div ref={triggerRef}>
          <div
            ref={sectionRef}
            className="h-screen w-[400vw] flex flex-row relative text-center"
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className={`h-screen w-screen flex flex-col justify-center items-center max-w-[100rem]`}
              >
                <div className={`w-[50vw] `}>
                  <Image
                    src="/medias/hinder1.webp"
                    alt="Hinder"
                    layout="responsive"
                    width={500}
                    height={300}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
