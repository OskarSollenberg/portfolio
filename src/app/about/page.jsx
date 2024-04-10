"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SceneAbout from "@/src/components/SceneAbout";
import Arrow from "@/src/components/Arrow";

gsap.registerPlugin(ScrollTrigger);

export default function Projects({ color }) {
  useEffect(() => {
    gsap.to(imageRef.current, {
      y: "-100%",
      scale: 0.4,
      borderRadius: "1rem",
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top top",
        scrub: 1,
      },
    });
  }, []);

  const imageRef = useRef(null);
  const textRef = useRef(null);

  return (
    <>
      <div className="absolute inset-0 flex items-center justify-center text-[5rem] sm:text-[6rem] md:text-[7rem] lg:text-[8rem] text-[#F3691F] translate-y-[7rem] sm:translate-y-[8rem] md:translate-y-[9rem] lg:translate-y-[10rem] xl:translate-y-[11rem] z-[1000]">
        <Arrow />
      </div>
      <div className="translate z-50">
        <SceneAbout />
      </div>
      <main className="absolute w-screen h-screen  top-0 text-black">
        <div
          ref={imageRef}
          className="w-screen h-screen bg-no-repeat bg-cover bg-left bg-aboutImg_lg"
        ></div>

        <div className=" w-screen"></div>
        <div
          ref={textRef}
          style={{ lineHeight: "2.5rem", fontFamily: "Montreal" }}
          className=" flex justify-center items-center text-lg flex-col gap-5 opacity-1"
        >
          <p className="text-center text-[1.3rem] sm:text-[1.5rem] md:text-[1.9rem] translate-y-[5rem] text-[#F3691F]">
            Who am I?
          </p>
          <div className="flex flex-col gap-10 text-center sm:max-w-[85vw] lg:max-w-[75vw]  max-w-[90vw]  text-[0.9rem] xl:text-[1.6rem] translate-y-[5rem] leading-0 leading-[1.4rem] sm:leading-8 md:leading-9 lg:leading-10 xl:leading-12 sm:text-[1.2rem] lg:text-[1.4rem]">
            <p>{`Hi there! I'm Oskar Sollenberg.`}</p>
            <p>{`My journey started in the creative world at the Royal College of Music in Stockholm, where I immersed myself in a program all about Music and Media Production. During my time at KMH I got to improve in a variety of activities, from filming and creating sound/music for pictures, to learning about marketing and being introduced to coding for the first time.`}</p>
            <p>
              {
                "Programming and web development have been in the back of my mind ever since my time at KMH, and I have now spent a little over half a year learning everything I possibly can about web development at Hyper Island. "
              }
            </p>
            <p>{`I love working with visually appealing content, but I've also set a clear goal of achieving the skill set of a full-stack engineer. In a perfect world, I would be able to combine my creativity with my technical skills in coding to bring to life visually stunning and functional websites."`}</p>
          </div>
        </div>
        <div className="w-screen h-[20rem]"></div>
      </main>
    </>
  );
}
