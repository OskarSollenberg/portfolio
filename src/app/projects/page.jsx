"use client";
import SiteNav from "@/src/components/SiteNav";
import { projects } from "@/src/data/projects";
import SceneProjects from "@/src/components/SceneProjects";
import ProjectLink from "@/src/components/ProjectLink";
import Link from "next/link";
import Arrow from "@/src/components/Arrow";
import ProgressBar from "@/src/components/ProgressBar";
import SplitType from "split-type";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const textRef = useRef(null);

  useEffect(() => {
    const split = new SplitType(textRef.current, { type: "lines,words,chars" });
    const chars = split.chars;

    gsap.from(chars, {
      opacity: 0,
      y: 20,
      stagger: 0.01,
      ease: "back.out",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top center",
      },
    });
  }, []);

  return (
    <>
      <div className="absolute inset-0 flex items-center justify-center text-[5rem] sm:text-[6rem] md:text-[7rem] lg:text-[8rem] text-[#F3691F] translate-y-[7rem] sm:translate-y-[8rem] md:translate-y-[9rem] lg:translate-y-[10rem] xl:translate-y-[11rem]">
        <Arrow />
      </div>

      <SiteNav isHomepage={false} />

      <section
        className="w-screen mx-auto overflow-hidden transition-colors duration-700 ease-in-out "
        style={{
          fontFamily: "Montreal",
        }}
      >
        <main>
          <SceneProjects />

          <div
            ref={textRef}
            className="w-screen text-center flex flex-col item-start p-10 text-[1.3rem] sm:text-[1.5rem] md:text-3xl text-black max-w-5xl mx-auto mb-[10rem] gap-10"
          >
            {" "}
            <p>
              {`Here is a showcase of my learning journey throughout my time at `}
              <span className="text-[#f3691f]">{`Hyper Island.`}</span>
            </p>
            <p>
              {`Some are my personal projects, but I've also had the pleasure of working with a variety of people. They are all smaller projects built with the sole purpose of learning.`}
            </p>
          </div>
          <div className="mb-[50vh] p-4 sm:p-[2rem]">
            <div className="mx-auto max-w-5xl">
              {projects.map((project, index) => (
                <Link href={`/projects/${project.href}`} key={project.title}>
                  <ProjectLink
                    title={project.title}
                    subTitle={project.subTitle}
                    imgSrc={project.imgSrc}
                  />
                </Link>
              ))}
            </div>
          </div>
        </main>
      </section>
      <ProgressBar />
    </>
  );
}
