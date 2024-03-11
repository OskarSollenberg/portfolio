"use client";

import React, { useEffect, useState } from "react";
import MyProjects from "@/src/components/MyProjects";
import { FaArrowRight } from "react-icons/fa";
import InitLoading from "../../../components/InitLoading";
import SceneProjects from "../../../components/SceneProjects";

export default function Projects() {
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
      <section
        className="w-screen mx-auto overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          fontFamily: "MyCustomFont",
          backgroundColor: bgColor,
          color: txtColor,
        }}
      >
        <main>
          <Text isScrolled={isScrolled} />
          <MyProjects txtColor={txtColor} />
        </main>
      </section>

      <InitLoading />
      <SceneProjects />
    </>
  );
}

export const Text = ({ isScrolled }) => {
  return (
    <div className="relative md:absolute top-[12rem] left-[15%] z-0 ">
      <div className="flex relative">
        <div className="flex">
          <h1 className="text-4xl flex sm:text-6xl lg:text-[8rem] xl:text-[9rem] ">
            P
          </h1>
          <h1 className="text-4xl flex sm:text-6xl lg:text-[8rem] xl:text-[9rem] ">
            R
          </h1>
          <h1 className="text-4xl flex text-transparent sm:text-6xl lg:text-[8rem] xl:text-[9rem] ">
            O
          </h1>
          <h1 className="text-4xl flex sm:text-6xl lg:text-[8rem] xl:text-[9rem] ">
            J
          </h1>
          <h1 className="text-4xl flex sm:text-6xl lg:text-[8rem] xl:text-[9rem] ">
            E
          </h1>{" "}
          <h1 className="text-4xl flex sm:text-6xl lg:text-[8rem] xl:text-[9rem] ">
            C
          </h1>
          <h1 className="text-4xl flex sm:text-6xl lg:text-[8rem] xl:text-[9rem] ">
            T
          </h1>
          <h1 className="text-4xl flex sm:text-6xl lg:text-[8rem] xl:text-[9rem] ">
            S
          </h1>
        </div>
        <p
          className={` transition-all duration-300 ease-in-out text-4xl flex sm:text-[2rem] lg:text-[3rem] xl:text-[4rem]  ${
            isScrolled && "sticky -rotate-180"
          } `}
        >
          <FaArrowRight />
        </p>
      </div>
      <p className="text-sm sm:text-base md:text-lg lg:text-[1rem] max-w-[25rem]">
        Here are some of the projects I have worked on through out my time on
        Hyper Island. Click on the cards to see more details.
      </p>
    </div>
  );
};
