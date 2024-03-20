"use client";
import { FaGithub } from "react-icons/fa";
import { BiLogoNetlify } from "react-icons/bi";
import { RiArrowGoBackFill } from "react-icons/ri";

import ConnectWithMe from "../../../../components/ConnectWithMe";
import SiteNav from "@/src/components/SiteNav";
import { projects } from "@/src/data/projects";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Project() {
  const params = useParams();
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const selectedProject = projects.find(
      (project) => project.href === params.project
    );
    setSelectedProject(selectedProject);
  }, []);

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
    gihub,
    netlify,
  } = selectedProject;

  return (
    <section>
      <SiteNav isHomepage={false} />
      <div className="grid items-center justify-center lg:grid-cols-2 w-screen h-screen text-center lg:text-start">
        <div className="absolute z-[500] top-[2rem] left-[2rem] text-[1rem]  bg-black text-white p-2 rounded-lg  transition-all hover:scale-125 duration-200 hover:bg-[#F3691F] hover:text-black cursor-pointer">
          <Link href="/pages/projects">
            <RiArrowGoBackFill />
          </Link>
        </div>

        <div className=" w-full text-black h-full flex justify-center items-center p-10 ">
          <div className="p-4 md:p-8 flex flex-col gap-[4rem]">
            <div>
              <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
                {title}
              </h2>
              <p className="mt-4  text-base lg:text-lg">{description}</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold md:text-2xl">
                Biggest learnings
              </h2>
              <ul className="flex flex-col gap-4 lg:gap-1 underline underline-offset-[.3rem] lg:no-underline mt-4 text-sm lg:list-disc translate-x-0">
                {learnings.map((learningObj, index) => (
                  <li key={index}>{learningObj.learning}</li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center lg:justify-start items-start gap-[8rem] ">
              <div className="flex group flex-col gap-4 justify-center items-center">
                <ConnectWithMe
                  color={"#000"}
                  icon={<FaGithub />}
                  size={50}
                  type={"github"}
                />
                <p className="group-hover:opacity-0 text-[12px]">VIEW CODE</p>
              </div>
              <div className="flex group flex-col gap-4 justify-center items-center">
                <ConnectWithMe
                  color={"#000"}
                  icon={<BiLogoNetlify />}
                  size={50}
                  type={"netlify"}
                />
                <p className="group-hover:opacity-0 text-[12px]">
                  LAUNCH WEBSITE
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#fefce1] mb-[10rem] lg:mb-0 flex justify-center items-center p-10">
          <div className="h-full">
            <img
              className="h-full object-cover min-h-[30rem]"
              src={imgSrc}
              alt=""
            />
            {/* <video
              src={imgSrc}
              type="video/mp4"
              loop
              className="clip w-full"
            ></video> */}
          </div>
        </div>
      </div>
    </section>
  );
}
