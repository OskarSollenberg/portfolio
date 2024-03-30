"use client";
import { FaGithub } from "react-icons/fa";
import { BiLogoNetlify } from "react-icons/bi";
import { RiArrowGoBackFill } from "react-icons/ri";
import StickyLink from "@/src/components/StickyLink";
import { projects } from "@/src/data/projects";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Project() {
  const params = useParams();
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const selectedProject = projects.find(
      (project) => project.href === params.project
    );
    setSelectedProject(selectedProject);
  }, [params.project]);

  if (!selectedProject) {
    return <div></div>;
  }

  const {
    title,
    subTitle,
    imgSrc,
    video,
    description,
    learnings,
    github,
    netlify,
  } = selectedProject;

  return (
    <section className="block w-screen h-screen lg:flex justify-center items-center ">
      <div className="absolute z-[500] top-[2rem] left-[2rem] text-[1rem] hover:bg-[#F3691F] rounded-lg  transition-all hover:scale-125 duration-200 bg-black text-white hover:text-black cursor-pointer p-2 ">
        <Link href="/projects">
          <RiArrowGoBackFill />
        </Link>
      </div>

      <div className="flex mt-[4rem] flex-col-reverse lg:grid items-center justify-center lg:grid-cols-2 text-center lg:text-start">
        <div className="w-full h-full text-black flex justify-center items-center md:px-10 sm:mt-0 md:mt-0">
          <div className=" flex flex-col gap-[2.5rem]">
            <div className="px-[1rem]">
              <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
                {title}
              </h2>
              <p className="mt-4 text-[.9rem] w-full leading-[1.5rem]">
                {description}
              </p>
            </div>
            <div className="flex flex-col gap-4 px-[1rem] h-full">
              <h2 className="text-2xl font-bold md:text-2xl">
                Biggest learnings
              </h2>
              <ul className="flex flex-col gap-4 lg:gap-1 text-[.8rem] lg:text-[.9rem] italic translate-x-0">
                {learnings.map((project, index) => (
                  <li key={index}> - {project.learning}</li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center gap-[8rem] mb-[3rem] mt-[2rem] ">
              <a
                href={github}
                className="flex group flex-col gap-4 justify-center items-center ml-[3rem] sm:ml-0"
              >
                <StickyLink
                  color={"#000"}
                  icon={<FaGithub />}
                  size={50}
                  type={"github"}
                />

                <p className="group-hover:opacity-0 text-[12px]">VIEW CODE</p>
              </a>
              <a
                href={netlify}
                className="flex group flex-col gap-4 justify-center items-center mr-[3rem] sm:mr-0"
              >
                <StickyLink
                  color={"#000"}
                  icon={<BiLogoNetlify />}
                  size={50}
                  type={"netlify"}
                />

                <p className="group-hover:opacity-0 text-[12px]">
                  LAUNCH WEBSITE
                </p>
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center lg:p-8 h-full ">
          <video
            src={video}
            type="video/webm"
            loop
            autoPlay
            muted
            className="mb-[3rem] lg:mb-0 mt-[5rem] lg:mt-0 max-w-[80vw] lg:max-w-full "
          ></video>
        </div>
      </div>
    </section>
  );
}
