import React from "react";
import NavItem from "./NavItem";
// import { projects } from "../../data/projects";
import { projects } from "@/src/data/projects";

export default function MyProjects() {
  return (
    <section className="bg-black mb-[50vh] p-[2rem]">
      <div className="mx-auto max-w-5xl">
        {projects.map((project, index) => (
          <NavItem
            key={index}
            title={project.title}
            subTitle={project.subTitle}
            imgSrc={project.imgSrc}
            href={`./projects/${project.title}`}
          />
        ))}
      </div>
    </section>
  );
}
