"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function Timeline() {
  if (typeof window !== "undefined") {
  }

  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

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
      <div></div>
      <div className="overflow-hidden text-[white]">
        <div ref={triggerRef}>
          <div
            ref={sectionRef}
            className="h-screen w-[400vw] flex flex-row relative text-center"
          >
            <div className="h-screen w-screen flex flex-col justify-center items-center">
              <h3 className="text-[10rem]">FEATURED</h3>
              <h3 className="text-[10rem] translate-x-20">PROJECTS</h3>
            </div>
            <div className="h-screen w-screen flex flex-col justify-center items-center">
              <h3 className="text-[5rem] ">First Project</h3>
              <p className="max-w-[50rem]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                tenetur quisquam quaerat! Natus veniam modi quam, eveniet sint
                sapiente similique illum cupiditate labore beatae vero rerum.
                Sequi officiis dignissimos id.
              </p>
            </div>
            <div className="h-screen w-screen flex flex-col justify-center items-center">
              <h3 className="text-[5rem] ">First Project</h3>
              <p className="max-w-[50rem]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                tenetur quisquam quaerat! Natus veniam modi quam, eveniet sint
                sapiente similique illum cupiditate labore beatae vero rerum.
                Sequi officiis dignissimos id.
              </p>
            </div>
            <div className="h-screen w-screen flex flex-col justify-center items-center">
              <h3 className="text-[5rem] ">Most recent Project</h3>
              <p className="max-w-[50rem]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                tenetur quisquam quaerat! Natus veniam modi quam, eveniet sint
                sapiente similique illum cupiditate labore beatae vero rerum.
                Sequi officiis dignissimos id.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
