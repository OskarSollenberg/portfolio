"use client";

import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import hinderImage from "@/public/medias/hinder.png";
import Image from "next/image";

export default function Timeline() {
  const [background, setBackground] = useState(false);
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  const projects = [
    { title: "First Project", textSize: "5rem", image: hinderImage },
    { title: "First Project", textSize: "5rem" },
    { title: "Most recent Project", textSize: "5rem" },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Check if component has mounted on the client side
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
            scrub: 0.6,
            pin: true,
            onEnter: () => setBackground(true),
            onLeaveBack: () => setBackground(false),
          },
        }
      );
      return () => {
        {
          /* A return function for killing the animation on component unmount */
        }
        pin.kill();
      };
    }
  }, []);

  return (
    <>
      <div
        className={`overflow-hidden transition-all duration-500 text-[white]`}
      >
        <div ref={triggerRef}>
          <div
            ref={sectionRef}
            className="h-screen w-[400vw] flex flex-row relative text-center"
          >
            <div
              className={`h-screen w-screen flex flex-col justify-center items-center `}
            >
              <h3 className={`text-[10rem]`}>FEATURED</h3>
              <h3 className="text-[10rem] translate-x-20">PROJECTS</h3>

              {/* <p className="max-w-[50rem]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                tenetur quisquam quaerat! Natus veniam modi quam, eveniet sint
                sapiente similique illum cupiditate labore beatae vero rerum.
                Sequi officiis dignissimos id.
              </p> */}
            </div>
            {projects.map((project, index) => (
              <div
                key={index}
                className={`h-screen w-screen flex flex-col justify-center items-center `}
              >
                {/* <h3 className={`text-[${project.textSize}]`}>
                  {project.title}
                </h3> */}
                {/* {project.subtitle && (
                  <h3 className="text-[10rem] translate-x-20">
                    {project.subtitle}
                  </h3>
                )} */}
                {index === 0 && project.image && (
                  <div className="w-full">
                    <Image
                      src={project.image}
                      alt={project.title}
                      layout="responsive"
                      width={500}
                      height={300}
                    />
                  </div>
                )}
                {index !== 0 && (
                  <p className="max-w-[50rem]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iusto tenetur quisquam quaerat! Natus veniam modi quam,
                    eveniet sint sapiente similique illum cupiditate labore
                    beatae vero rerum. Sequi officiis dignissimos id.
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
