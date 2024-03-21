"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SceneAbout from "@/src/components/SceneAbout";
import SiteNav from "@/src/components/SiteNav";
import ProgressBar from "@/src/components/ProgressBar";

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

  return (
    <>
      <SiteNav isHomepage={false} black={true} />

      <div className=" translate z-50">
        <SceneAbout />
      </div>
      <main className="absolute w-screen h-screen top-0 bg-[#FEFCE1]">
        <div
          ref={imageRef}
          className="w-screen h-screen opacity-60 bg-no-repeat bg-cover bg-left lg:bg-center"
          style={{
            fontFamily: "montreal",
            backgroundImage: `url("/medias/studio.jpg")`,
          }}
        ></div>

        <div className=" w-screen h-screen"></div>
        <div className=" flex justify-center items-center h-[50vh] text-lg ">
          <p className="text-center max-w-[vw] text-sm sm:max-w-[60vw] md:text-md lg:text-lg xl:text-xl -translate-y-5]">
            {`Hi there! I'm Oskar Sollenberg. I started my journey in the creative
            world at the Royal College of Music (KMH) in Stockholm, where I
            immersed myself in a program all about Music and Media Production.
            It wasn't just about notes and beats. I got to improve in a variety
            of activities, from filming and creating sound/music for pictures,
            to learning about marketing and being introduced to coding for the
            first time.`}
            <br />
            <br />
            {`Since then, I've applied all these skills in different places: photo
            studios, music labels, and even on the set of feature films. Now,
            I'm taking a bold step forward into a realm that fascinates me.
            Programming and web development have been calling to me ever since
            my time at KMH, and I have now spent a little over half a year
            learning everything I possibly can about web development. Right now,
            I am focused on gaining a deeper level of understanding. I have a
            clear goal of achieving the skill set of a full-stack engineer, but
            given my creative background, I'm not averse to the idea of working
            closely with design/UI and UX as well. In a perfect world, I would
            be able to combine my creativity with my technical skills in coding
            to bring to life visually stunning and functional websites.`}
          </p>
        </div>
        <div className="w-screen h-[20rem]"></div>
      </main>
      <ProgressBar />
    </>
  );
}
