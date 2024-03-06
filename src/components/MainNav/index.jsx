"use client";

import React, { useState, useEffect } from "react";
import { gsap } from "gsap";

export default function MainNav() {
  const links = ["About", "Work", "Contact"];
  const [menuOpen, setMenuOpen] = useState(false);
  const [textColor, setTextColor] = useState("white");
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    const counterAnimation = gsap.to(
      { counter: 1 },
      {
        counter: 100,
        roundProps: "counter",
        duration: 4,
        onUpdate: function () {
          setCounter(Math.round(this.targets()[0].counter));
        },
      }
    );

    setTimeout(() => {
      setMenuOpen(true);
    }, 4000);

    return () => {
      counterAnimation.kill();
    };
  }, []);

  const checkScroll = () => {
    if (window.scrollY > 10) {
      setMenuOpen(false);
      setTextColor("#F16721");
    } else {
      setMenuOpen(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScroll);
    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  return (
    <>
      <div
        onMouseLeave={() => window.scrollY > 10 && setMenuOpen(false)}
        onMouseEnter={() => setMenuOpen(true)}
        className={`group bg-[black] p-5 px-6 fixed bottom-4 ${
          menuOpen ? " bottom-8 p-6 " : ""
        } delay-100 rounded-full  flex justify-center items-center transition-all duration-500 ease-in-out`}
      >
        <div
          className={`absolute text-[1rem] text-[${textColor}] ${
            menuOpen ? "hidden" : ""
          } transition-all duration-300`}
        >
          {counter !== 100 ? counter : "M"}
        </div>
        <div
          className={`gap-10 h-full flex max-w-[1rem] ${
            menuOpen
              ? "opacity-100 visible max-w-[20rem]"
              : "opacity-0 invisible"
          } transition-all duration-500 ease-in-out transition-visibility `}
        >
          {links.map((link) => (
            <a
              key={link}
              style={{
                transition:
                  "opacity 0.3s ease-in-out 0.3s, transform 0.15s ease-in-out, color 0.15s ease-in-out",
              }}
              className={`text-[white] text-md hover:text-[#E43B13] ${
                menuOpen ? "opacity-100 visible" : `opacity-0 invisible `
              }
              } cursor-pointer hover:scale-110`}
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
