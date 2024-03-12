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
      className={`flex flex-col justify-center items-start gap-[5rem]  `}
    >
      <div className={`w-full`}>
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
          className={`text-4xl font-bold text-[#e43b13] transition-all duration-200`}
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
    title: "",
    description: "",
    image: "",
  },
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

export default function MyProjects({ txtColor }) {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  const [translateX, setTranslateX] = useState(getTranslateX());

  function getTranslateX() {
    // 768px is a common breakpoint for mobile devices
    return window.innerWidth <= 768 ? "-400vw" : "-200vw";
  }

  useEffect(() => {
    function handleResize() {
      setTranslateX(getTranslateX());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
          translateX: translateX,
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
  }, [translateX]);

  return (
    <>
      <div className={` transition-all duration-200 text-[${txtColor}]`}>
        <div ref={triggerRef}>
          <div
            ref={sectionRef}
            className="h-screen flex items-center flex-row gap-10 relative "
          >
            <div className={` h-screen`}></div>
            {projects.map((project, index) => (
              <React.Fragment key={index}>
                <Card
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  txtColor={txtColor}
                />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
