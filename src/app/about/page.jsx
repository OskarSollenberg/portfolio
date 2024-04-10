"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SceneAbout from "@/src/components/SceneAbout";
import Arrow from "@/src/components/Arrow";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

export default function Projects({ color }) {
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const split = new SplitType(textRef.current, { type: "lines,words,chars" });
    const chars = split.chars;

    gsap.from(chars, {
      opacity: 0,
      y: 20,
      stagger: 0.007,
      ease: "back.out",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top center",
      },
    });
  }, []);

  return (
    <>
      <div className="absolute inset-0 flex items-center justify-center text-[5rem] sm:text-[6rem] md:text-[7rem] lg:text-[8rem] text-[#F3691F] translate-y-[7rem] sm:translate-y-[8rem] md:translate-y-[9rem] lg:translate-y-[10rem] xl:translate-y-[11rem] z-[1000] text-center">
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
          style={{ fontFamily: "Montreal" }}
          className="flex flex-col gap-10 text-center mx-auto sm:max-w-[85vw] lg:max-w-[75vw] max-w-[90vw] xl:text-[1.6rem] leading-[1.8rem] md:leading-9 lg:leading-10 xl:leading-[3rem] sm:text-[1.2rem] lg:text-[1.4rem] mt-[10rem]"
        >
          <p className="text-[1.3rem] sm:text-[1.5rem] md:text-[1.9rem] text-[#F3691F]">
            Who am I?
          </p>
          <p>{`Hi there! I'm Oskar Sollenberg.`}</p>
          <p>
            {`My journey started in the creative world at the Royal College of
            Music in Stockholm, where I immersed myself in a program all about
            Music and Media Production. During my time at KMH I got to improve
            in a variety of activities, from filming and creating sound/music
            for pictures, to learning about marketing and being introduced to
            coding for the first time.`}
          </p>
          <p>
            {`Programming and web development have been in the back of my mind
            ever since my time at KMH, and I have now spent a little over half a
            year learning everything I possibly can about web development at
            Hyper Island. " I love working with visually appealing content, but
            I've also set a clear goal of achieving the skill set of a
            full-stack engineer. In a perfect world, I would be able to combine
            my creativity with my technical skills in coding to bring to life
            visually stunning and functional websites.`}
          </p>
        </div>

        <div className="w-screen h-[20rem]"></div>
      </main>
    </>
  );
}
