import SiteNav from "@/src/components/SiteNav";
import { projects } from "@/src/data/projects";
import SceneProjects from "@/src/components/SceneProjects";
import ProjectLink from "@/src/components/ProjectLink";
import Link from "next/link";
import ProgressBar from "@/src/components/ProgressBar";

export default function Projects() {
  return (
    <>
      <SiteNav isHomepage={false} />
      <section
        className="w-screen mx-auto overflow-hidden transition-colors duration-700 ease-in-out "
        style={{
          fontFamily: "Montreal",
        }}
      >
        <main>
          <SceneProjects />
          <div className="flex items-start justify-center w-screen h-screen ">
            <p className=" w-screen rounded-[1rem] p-[2rem] lg:p-[4rem] text-[1.5rem] md:text-3xl lg:text-3xl max-w-[85vw] md:max-w-[65vw] text-center lg:leading-[3rem] text-black ">
              {` Here is a showcase of my learning journey through out my time at `}
              <span className="text-[#f3691f]">{`Hyper Island`}</span>
              {`.`}

              <br />
              <br />
              {` Some are my personal projects but I've also had the pleasure of
              working with a variety of people. They are all smaller project
              built with the soul purpose of learning`}
            </p>
          </div>
          <div className=" mb-[50vh] p-[2rem]">
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
