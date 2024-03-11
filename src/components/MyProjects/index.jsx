"use client";

import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import Card from "./Card";

export function Project({ title, index }) {
  return (
    <div
      key={index}
      className={`flex flex-col justify-center items-start gap-[5rem] max-w-[30rem] `}
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
  {
    title: "HINDER",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos maiores doloremque cumque eligendi repellat nihil",
    image: "/medias/hinder1.webp",
  },
  {
    title: "PROJECT 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos maiores doloremque cumque eligendi repellat nihil",
    image: "/medias/hinder1.webp",
  },
  {
    title: "PROJECT 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos maiores doloremque cumque eligendi repellat nihil",
    image: "/medias/hinder1.webp",
  },
  {
    title: "PROJECT 4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos maiores doloremque cumque eligendi repellat nihil",
    image: "/medias/hinder1.webp",
  },
];

export default function Timeline({ index, txtColor }) {
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
          translateX: "-300vw",
          ease: "none",
          duration: 1,
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: "2000 top",
            scrub: 0,
            pin: true,
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
      <div
        className={` transition-all duration-200 text-[${txtColor}] z-[${index}]`}
      >
        <div ref={triggerRef}>
          <div
            ref={sectionRef}
            className="h-screen flex items-center flex-row gap-10 relative w-[350vw]"
          >
            <div className={` w-[300vw] h-screen`}></div>
            {projects.map((project, index) => (
              <>
                <Card
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  txtColor={txtColor}
                />
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
