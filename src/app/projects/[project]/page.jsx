"use client";
import { FaGithub } from "react-icons/fa";
import { BiLogoNetlify } from "react-icons/bi";
import StickyLink from "@/src/components/StickyLink";
import { projects } from "@/src/data/projects";
import { useParams } from "next/navigation";
import ReturnBtn from "./ReturnBtn";
import { useEffect, useState } from "react";
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
    videoWebm,
    videoMp4,
    description,
    learnings,
    github,
    netlify,
  } = selectedProject;

  return (
    <section>
      <ReturnBtn />
      <div className="flex flex-col-reverse lg:grid items-center justify-center lg:grid-cols-2 text-center text-white lg:text-start ">
        <div className="w-full flex justify-center item-center lg:items-center md:px-10 sm:mt-0 md:mt-0 bg-[#F3691F] lg:h-screen lg:w-[50vw]">
          <div className=" flex flex-col mt-[3rem] lg:justify-end gap-[2rem] ">
            <div className="px-[1rem]">
              <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
                {title}
              </h2>
              <p className="mt-4 text-[.9rem] w-full leading-[1.5rem] p-4 lg:p-0 max-w-[40rem]">
                {description}
              </p>
            </div>
            <div className="flex flex-col gap-4 px-[1rem]">
              <h2 className="text-2xl font-bold md:text-2xl">
                Biggest learnings
              </h2>
              <ul className="flex flex-col p-4 lg:p-0 gap-2 lg:gap-[0.6rem] text-[.8rem] lg:text-[.9rem] italic">
                {learnings.map((project, index) => (
                  <li key={index}>{project.learning}</li>
                ))}
              </ul>
              <div className="flex justify-center lg:justify-start lg:ml-10 gap-[8rem] mb-[15rem] lg:mb-0 mt-[2rem] ">
                <a
                  href={github}
                  className="flex group flex-col gap-4 justify-center items-center ml-[3rem] sm:ml-0"
                >
                  <StickyLink
                    color={"#fff"}
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
                    color={"#fff"}
                    icon={<BiLogoNetlify />}
                    size={50}
                    type={"netlify"}
                  />

                  <p className="group-hover:opacity-0 text-[12px] ">
                    {netlify === "#"
                      ? "Website is under repair"
                      : "LAUNCH WEBSITE"}
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center lg:w-full lg:mt-0 w-screen md:p-10 ">
          <div className="max-w-[50rem]">
            <video type="video/webm" loop autoPlay muted playsInline>
              <source src={videoWebm} type="video/webm" />
              <source src={videoMp4} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
