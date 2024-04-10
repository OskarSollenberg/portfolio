import SiteNav from "@/src/components/SiteNav";
import SceneProjects from "@/src/components/SceneProjects";
import Arrow from "@/src/components/Arrow";
import ProgressBar from "@/src/components/ProgressBar";
import ProjectList from "@/src/components/ProjectsList";
import PageDescription from "./PageDescription";

export default function Projects() {
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
          <PageDescription />
          <ProjectList />
        </main>
      </section>
      <ProgressBar />
    </>
  );
}
