"use client";
import { projects } from "@/src/data/projects";
import { useParams } from "next/navigation";
import ReturnBtn from "./ReturnBtn";
import { useEffect, useState } from "react";
import SocialMedias from "./SocialMedias";
import ProjectDetails from "./ProjectDetails";
import Learnings from "./Learnings";

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
            <ProjectDetails title={title} description={description} />
            <div className="flex flex-col gap-4 px-[1rem]">
              <h2 className="text-2xl font-bold md:text-2xl">
                Biggest learnings
              </h2>
              <Learnings learnings={learnings} />
              <SocialMedias github={github} netlify={netlify} />
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
