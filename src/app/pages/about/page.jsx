"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SceneAbout from "@/src/components/SceneAbout";
import SiteNav from "@/src/components/SiteNav";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const imageRef = useRef(null);
  const pRef = useRef(null); // Add this line

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
        onToggle: (self) => {
          if (!self.isActive) {
            gsap.from(pRef.current, {
              y: "0",
              opacity: 1,
              duration: 0.5,
              ease: "expo.inOut",
            });
          }
        },
      },
    });
  }, []);

  return (
    <>
      <SiteNav isHomepage={false} />

      <div className=" translate z-50">
        <SceneAbout />
      </div>
      <main className="absolute w-screen h-screen top-0 ">
        <div
          ref={imageRef}
          className="w-screen h-screen opacity-20 bg-no-repeat bg-cover bg-left lg:bg-center"
          style={{
            fontFamily: "montreal",
            backgroundImage: `url("/medias/studio.jpg")`,
          }}
        ></div>

        <div className=" w-screen h-screen"></div>
        <div className=" flex justify-center items-start h-[200vh] text-lg ">
          <p
            ref={pRef}
            className="text-center max-w-[90vw] opacity-0 md:max-w-[70vw] translate-y-[2rem] transition-all text-2xl "
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
            asperiores dicta beatae dolore hic sint, deserunt cum in porro
            quidem id tempora magni et, minima esse? Nulla in qui asperiores.
          </p>
        </div>
        <div className=" w-screen h-screen"></div>
        <div className=" w-screen h-screen"></div>
      </main>
    </>
  );
}
