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

  return (
    <>
      <SiteNav isHomepage={false} black={true} />

      <div className=" translate z-50">
        <SceneAbout />
      </div>
      <main className="absolute w-screen h-screen top-0 bg-[#F3691F]">
        <div
          ref={imageRef}
          className="w-screen h-screen opacity-20 bg-no-repeat bg-cover bg-left lg:bg-center"
          style={{
            fontFamily: "montreal",
            backgroundImage: `url("/medias/studio.jpg")`,
          }}
        ></div>

        <div className=" w-screen h-screen"></div>
        <div className=" flex justify-center items-start h-[50vh] text-lg ">
          <p className="text-center max-w-[80vw] text-sm sm:max-w-[60vw] md:text-md lg:text-lg xl:text-xl -translate-y-5">
            Hej! Mitt namn är Oskar Sollenberg. På KMH i Stockholm läste jag ett
            program som heter musik- och medieproduktion. Det är en bred
            utbildning där jag fick testa på många olika saker såsom
            musikproduktion, film, foto, programmering och marknadsföring.
            <br />
            <br />
            De senaste åren har jag använt mig av dessa kunskaper för att
            praktisera och jobba i olika sammanhang såsom i fotostudio, på
            musikbolag och nu senast med långfilm. Nu har jag valt att nischa
            mig och studerar programmering/webbutveckling med målet att kunna
            kombinera min kreativitet med kunskap inom programmering för att
            både designa och bygga hemsidor som Front End Developer.
          </p>
        </div>
      </main>
    </>
  );
}
