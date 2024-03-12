"use client";

import React, { useEffect, useState } from "react";
import MyProjects from "@/src/components/MyProjects";
import { FaArrowRight } from "react-icons/fa";
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
          <div className="flex items-end justify-center w-screen h-screen ">
            {isScrolled ? (
              <p className=" text-2xl xl:text-3xl 2xl:text-4xl max-w-[80vw] md:max-w-[50vw] text-center mb-[12rem] leading-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                nostrum earum doloremque sunt, eos ea eum, quis eligendi,
                reprehenderit itaque voluptates saepe alias? Voluptatibus velit
                perferendis sequi harum, laboriosam aliquid!
              </p>
            ) : (
              <SceneProjects />
            )}
          </div>

          <MyProjects txtColor={txtColor} />
        </main>
      </section>
    </>
  );
}
