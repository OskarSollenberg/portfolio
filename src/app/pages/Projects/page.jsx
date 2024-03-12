"use client";

import React, { useEffect, useState } from "react";
import MyProjects from "@/src/components/MyProjects";
import { FaArrowRight } from "react-icons/fa";
import InitLoading from "../../../components/InitLoading";
import SceneProjects from "@/src/components/SceneProjects";

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
          <MyProjects txtColor={txtColor} />
        </main>
      </section>
      <SceneProjects />
      <InitLoading />
    </>
  );
}
