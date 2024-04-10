import Project from "./Project";
import Link from "next/link";
import { projects } from "@/src/data/projects";

export default function ProjectList() {
  return (
    <div className="mb-[50vh] p-4 sm:p-[2rem]">
      <div className="mx-auto max-w-5xl">
        {projects.map((project, index) => (
          <Link href={`/projects/${project.href}`} key={project.title}>
            <Project
              title={project.title}
              subTitle={project.subTitle}
              imgSrc={project.imgSrc}
              alt={project.title}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
