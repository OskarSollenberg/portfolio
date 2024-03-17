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
      y: "160%",
      scale: 0.6,
      height: "30rem",
      width: "100vw",
      borderRadius: "4rem",
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
          className="w-screen  h-screen opacity-20 "
          style={{
            fontFamily: "montreal",
            backgroundImage: `url("/medias/studio.jpg")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>

        <div className=" w-screen h-screen"></div>
        <div className=" flex justify-center items-start h-[200vh] text-lg text-white ">
          <p
            ref={pRef}
            className="text-center max-w-[90vw] opacity-0 md:max-w-[50vw] translate-y-[2rem] transition-all "
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero
            explicabo, accusantium ut laudantium possimus tempore architecto
            incidunt velit dolore veritatis temporibus. Labore corporis, minima
            magni modi debitis sequi odio libero? Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Libero explicabo, accusantium ut
            laudantium possimus tempore architecto incidunt velit dolore
            veritatis temporibus. Labore corporis, minima magni modi debitis
            sequi odio libero? Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Libero explicabo, accusantium ut laudantium
            possimus tempore architecto incidunt velit dolore veritatis
            temporibus. Labore corporis, minima magni modi debitis sequi odio
            libero?
          </p>
        </div>
        <div className=" w-screen h-screen"></div>
        <div className=" w-screen h-screen"></div>
      </main>
    </>
  );
}
