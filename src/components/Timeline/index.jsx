"use client";

import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";

export function Project({ title, index }) {
  return (
    <div
      key={index}
      className={`flex flex-col justify-center items-start gap-[5rem] max-w-[30rem]`}
    >
      <div className={`w-[20rem]`}>
        <Image
          className="w-full"
          src="/medias/hinder1.webp"
          alt="Hinder"
          width={500}
          height={300}
          style={{ width: "auto", height: "auto" }}
        />
      </div>
      <div>
        <h1
          className={`text-4xl font-bold text-[#F16721] transition-all duration-200`}
        >
          {title}
        </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex quibusdam
          dicta dignissimos itaque ducimus.{" "}
        </p>
      </div>
    </div>
  );
}

const projects = [
  { title: "HINDER" },
  { title: "Project 2" },
  { title: "Project 3" },
  { title: "Project 4" },
];

export default function Timeline({ index }) {
  const [background, setBackground] = useState("#FDF9EF");
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  if (typeof window !== "undefined") {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
  }

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (sectionRef.current) {
      const pin = gsap.fromTo(
        sectionRef.current,
        {
          translateX: 0,
        },
        {
          translateX: "-200vw",
          ease: "none",
          duration: 1,
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: "2000 top",
            scrub: 0,
            pin: true,
            onEnter: () => setBackground("#292929"),
            onEnterBack: () => setBackground("#292929"),
            onLeave: () => setBackground("#FDF9EF"),
            onLeaveBack: () => setBackground("#FDF9EF"),
          },
        }
      );
      return () => {
        pin.kill();
      };
    }
  }, []);

  return (
    <>
      <div className={` transition-all duration-200 text-[white] z-[${index}]`}>
        <div ref={triggerRef}>
          <div
            style={{
              background: background,
              transition: "background 0.5s ease",
            }}
            ref={sectionRef}
            className="h-screen flex items-center flex-row gap-10 relative w-[350vw]"
          >
            <div
              style={{
                background: background,
                transition: "background 0.5s ease",
              }}
              className={` bg-black w-[100vw] h-screen flex justify-center items-start`}
            >
              <h1 className="text-[5rem]">Projects </h1>
            </div>

            {projects.map((project, index) => (
              <Project key={project.name} title={project.title} index={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
