"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import "./styles.css";

export default function Timeline() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
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
  }, []);

  return (
    <section className=" overflow-hidden">
      {/* The section up act just as a wrapper. If the trigger (below) is the
      first jsx element in the component, you get an error on route change */}

      {/* The div below act just as a trigger. As the doc suggests, the trigger and 
      the animation should alway be two separated refs */}
      <div ref={triggerRef}>
        <div
          ref={sectionRef}
          className="h-screen w-[400vw] flex flex-row relative"
        >
          <div className="h-screen w-screen flex justify-center items-center">
            <h3>Section 1</h3>
          </div>
          <div className="h-screen w-screen flex justify-center items-center">
            <h3>Section 2</h3>
          </div>
          <div className="h-screen w-screen flex justify-center items-center">
            <h3>Section 3</h3>
          </div>
          <div className="h-screen w-screen flex justify-center items-center">
            <h3>Section 4</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
