"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SceneAbout from "@/src/components/SceneAbout";
import SiteNav from "@/src/components/SiteNav";

gsap.registerPlugin(ScrollTrigger);

export default function Projects({ color }) {
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.to(imageRef.current, {
      y: "170%",
      scale: 0.6,
      height: "30rem",
      width: "100vw",
      borderRadius: "1rem",
      opacity: 1,
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  //   comment

  return (
    <>
      <SiteNav isHomepage={false} />
      <div className=" translate z-50">
        <SceneAbout />
      </div>
      <main className="absolute w-screen h-screen top-0 text-black">
        <div
          ref={imageRef}
          className="w-screen h-screen opacity-60 bg-no-repeat bg-cover bg-left lg:bg-center"
          style={{
            fontFamily: "Montreal",
            backgroundImage: `url("/medias/studio.jpg")`,
          }}
        ></div>

        <div className=" w-screen h-screen"></div>
        <div className=" flex justify-center items-center text-lg flex-col gap-5 ">
          <p
            style={{ lineHeight: "2.5rem", fontFamily: "Montreal" }}
            className="text-center text-[1.3rem] sm:text-[1.5rem] md:text-[1.9rem] translate-y-[5rem] text-[#F3691F]"
          >
            Who am I?
          </p>
          <p className="text-center max-w-[90vw] sm:max-w-[85vw] lg:max-w-[75vw] text-[0.9rem] xl:text-[1.6rem] translate-y-[5rem] leading-[1.4rem] sm:leading-8 md:leading-9 lg:leading-10 xl:leading-12 sm:text-[1.2rem] lg:text-[1.4rem]">
            My journey started in the creative world at the Royal College of
            Music (KMH) in Stockholm, where I immersed myself in a program all
            about Music and Media Production. It wasn&apos;t just about notes
            and beats. I got to improve in a variety of activities, from filming
            and creating sound/music for pictures, to learning about marketing
            and being introduced to coding for the first time.
          </p>
          <p className="text-center sm:max-w-[85vw] lg:max-w-[75vw]  max-w-[90vw]  text-[0.9rem] xl:text-[1.6rem] translate-y-[5rem] leading-0 leading-[1.4rem] sm:leading-8 md:leading-9 lg:leading-10 xl:leading-12 sm:text-[1.2rem] lg:text-[1.4rem]">
            Programming and web development have been in the back of my mind
            ever since my time at KMH, and I have now spent a little over half a
            year learning everything I possibly can about web development at
            Hyper Island. I love working with visually appealing content but ive
            also set a clear goal of achieving the skill set of a full-stack
            engineer. In a perfect world, I would be able to combine my
            creativity with my technical skills in coding to bring to life
            visually stunning and functional websites.
          </p>
        </div>
        <div className="w-screen h-[20rem]"></div>
      </main>
    </>
  );
}
