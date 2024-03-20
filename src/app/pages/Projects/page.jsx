"use client";

import SiteNav from "@/src/components/SiteNav";
import React, { useEffect, useState } from "react";
import MyProjects from "@/src/components/MyProjects";
import { FaArrowRight } from "react-icons/fa";
import SceneProjects from "@/src/components/SceneProjects";
import NavItem from "@/src/components/NavItem";
import { projects } from "@/src/data/projects";
import Link from "next/link";

// const FONT_PATH = "/fonts/Migha-BlackCondensedCNTR.otf";
// const FONT_PATH = "/fonts/Class-357-Regular.ttf";
// const FONT_PATH = "/fonts/AkhbarBold.ttf";
// const FONT_PATH = "/fonts/Mortend-Extra-Bold.otf";

export default function Projects() {
  const [bgColor, setBgColor] = useState("#FEFCE1");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsScrolled(true);
        setBgColor("black");
      } else {
        setBgColor("#FEFCE1");
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
      <SiteNav isHomepage={false} />

      <section
        className="w-screen mx-auto overflow-hidden text-white transition-colors duration-700 ease-in-out"
        style={{
          fontFamily: "montreal",
          backgroundColor: bgColor,
        }}
      >
        <main>
          <div className="flex items-end justify-center w-screen h-screen ">
            {isScrolled ? (
              <p className=" w-screen rounded-[2rem] py-[4rem] text-[1.5rem] md:text-3xl lg:text-3xl max-w-[85vw] md:max-w-[65vw]  text-center mb-[5rem] lg:mb-[7rem]  lg:leading-[3rem]">
                {`
				Here is a showcase of my learning jurney through out my time at Hyper Island.`}
                <br />
                <br />
                {` Some are my personal projects but I've also had the pleasure of
                working with a variety of people. They are all smaller project built with the soul purpose of learning`}
              </p>
            ) : (
              <SceneProjects />
            )}
          </div>
          <div className="bg-black mb-[50vh] p-[2rem]">
            <div className="mx-auto max-w-5xl">
              {projects.map((project, index) => (
                <Link
                  href={`./projects/${project.href}`}
                  key={project.title}
                  passHref
                >
                  <NavItem
                    key={index}
                    title={project.title}
                    subTitle={project.subTitle}
                    imgSrc={project.imgSrc}
                    href={`/projects/${project.href}`}
                  />
                </Link>
              ))}
            </div>
          </div>
        </main>
      </section>
    </>
  );
}
