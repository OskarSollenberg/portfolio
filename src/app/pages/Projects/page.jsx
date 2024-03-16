"use client";

import React, { useEffect, useState } from "react";
import ProjectsNav from "@/src/components/ProjectsNav";
import { FaArrowRight } from "react-icons/fa";
import SceneProjects from "@/src/components/SceneProjects";

// const FONT_PATH = "/fonts/Migha-BlackCondensedCNTR.otf";
// const FONT_PATH = "/fonts/Class-357-Regular.ttf";
// const FONT_PATH = "/fonts/AkhbarBold.ttf";
// const FONT_PATH = "/fonts/Mortend-Extra-Bold.otf";

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
        className="w-screen mx-auto overflow-hidden transition-colors duration-700 ease-in-out"
        style={{
          fontFamily: "montreal",
          backgroundColor: bgColor,
          color: txtColor,
        }}
      >
        <main>
          <div className="flex items-end justify-center w-screen h-screen ">
            {isScrolled ? (
              <p className="text-2xl md:text-3xl lg:text-2xl max-w-[85vw] md:max-w-[70vw] xl:max-w-[50vw] text-center mb-[4rem] lg:leading-[3rem]">
                {`
                These are some of the projects I've worked on during my time at
                Hyper Island.`}
                <br />
                <br />
                {`Most of these projects are smaller projects with different focus
                areas. Some are my personal projects but I've also got the
                opportunity to work with a variety of people during these
                projects and I've learned a lot from each and every one of them.`}
              </p>
            ) : (
              <SceneProjects />
            )}
          </div>
          <ProjectsNav />
        </main>
      </section>
    </>
  );
}
