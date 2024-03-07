"use client";
import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function DynamicHeader({ index }) {
  const [textColor, setTextColor] = useState("#f3691f");
  const [pin, setPin] = useState(false);

  const navLinks = ["ABOUT", "WORK", "CONTACT"];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    setTimeout(() => {
      setPin(true);
      setTextColor("white");
    }, 3000);

    navLinks.forEach((link, index) => {
      gsap.fromTo(
        `.link-${index}`,
        {
          y: 0,
          y: 0,
        },
        {
          x: "-300vw",
          ease: "none",
          scrollTrigger: {
            trigger: `.link-${index}`,
            start: "top top",
            end: "2000 top",
            scrub: 1.2,
            pin: pin,
            onEnter: () => setTextColor("white"),
            onLeaveBack: () => setTextColor("#f3691f"),
          },
        }
      );
    });
  }, [pin]);

  return (
    <div className={`flex absolute top-[1rem] right-0 z-[${index}]`}>
      {navLinks.map((link, index) => (
        <div
          key={index}
          style={{ color: textColor }}
          className={`link-${index} flex top-[1rem] justify-center items-center hover:text-[white]`}
        >
          <a
            className="transition-all hover:text-[white] duration-200 mx-[1rem] sm:mx-[2rem] md:mx-[5rem] cursor-pointer"
            href="#"
          >
            {link}
          </a>
        </div>
      ))}
    </div>
  );
}
