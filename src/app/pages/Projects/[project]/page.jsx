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

  console.log("params:" + params.project);
  console.log("Projects:" + projects[0].title);

  useEffect(() => {
    const selectedProject = projects.find(
      (project) => project.title === params.project
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
      <div className="grid lg:grid-cols-2 w-screen h-screen text-center lg:text-start">
        <div className="absolute top-[2rem] left-[2rem] text-[1rem]  bg-black text-white p-2 rounded-lg hover:scale-110 transition-all duration-200 hover:bg-white hover:text-black active:scale-90 cursor-pointer">
          <Link href="/pages/projects">
            <div className="flex justify-center items-center gap-2" href="">
              Projects <RiArrowGoBackFill />
            </div>
          </Link>
        </div>

        <div className="bg-[#f3691f] w-full text-white h-full flex justify-center items-center p-10 ">
          <div className="p-4 md:p-8 flex flex-col gap-[4rem]">
            <div>
              <h2 className="text-2xl font-bold md:text-4xl lg:text-5xl">
                {title}
              </h2>
              <p className="mt-4  text-base lg:text-lg">{description}</p>
            </div>
            <div>
              <h2 className="text-1xl font-bold md:text-2xl">
                Biggest learnings
              </h2>
              <p className="mt-4  text-base lg:text-lg">{learnings}</p>
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
        <div className="bg-[#fefce1] mb-[10rem] lg:mb-0 w-full h-full flex justify-center items-center p-10">
          <div className="h-full">
            <img className="h-full object-cover" src={imgSrc} alt="" />
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
