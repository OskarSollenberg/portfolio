import React from "react";
import NavItem from "./NavItem";
// import { projects } from "../../data/projects";
import { projects } from "@/src/data/projects";
import Link from "next/link";

export default function MyProjects() {
  return (
    <section className="bg-black mb-[50vh] p-[2rem]">
      <div className="mx-auto max-w-5xl">
        {projects.map((project, index) => (
          <Link
            href={`./projects/${project.title}`}
            key={project.title}
            passHref
          >
            <NavItem
              key={index}
              title={project.title}
              subTitle={project.subTitle}
              imgSrc={project.imgSrc}
              href={`/projects/${project.title}`}
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
