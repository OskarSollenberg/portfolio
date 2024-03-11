"use client";

import React, { useEffect, useState } from "react";
import MyProjects from "@/src/components/MyProjects";
const FONT_PATH = "/fonts/PPNeueMontreal-Bold.otf";
import { FaArrowRight } from "react-icons/fa";

export default function Home() {
  const [bgColor, setBgColor] = useState("#fdf9ef");
  const [txtColor, setTxtColor] = useState("black");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsScrolled(true);
        setBgColor("black");
        setTxtColor("#fdf9ef");
      } else {
        setBgColor("#fdf9ef");
        setTxtColor("black");
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className="w-screen mx-auto overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          backgroundColor: bgColor,
          color: txtColor,
          fontFamily: FONT_PATH,
        }}
      >
        <main>
          <div className="relative md:absolute top-[8rem] left-[15%]">
            <div className="flex relative">
              <h1 className="text-4xl flex sm:text-6xl lg:text-8xl xl:text-[10rem] z-[1000]">
                PROJECTS
              </h1>

              <p
                className={` transition-all duration-300 ease-in-out text-[4rem] ${
                  isScrolled && "sticky -rotate-180"
                } `}
              >
                <FaArrowRight />
              </p>
            </div>

            <p className="text-sm sm:text-base md:text-lg lg:text-[1rem] max-w-[25rem]">
              Here are some of the projects I have worked on through out my time
              on Hyper Island. Click on the cards to see more details.
            </p>
          </div>

          <MyProjects txtColor={txtColor} />
        </main>
      </div>
    </>
  );
}
