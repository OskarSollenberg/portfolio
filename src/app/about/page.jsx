import SceneAbout from "@/src/components/SceneAbout";
import Arrow from "@/src/components/Arrow";
import AboutText from "./AboutText";

export default function About() {
  return (
    <>
      <div className="absolute inset-0 flex items-center justify-center text-[5rem] sm:text-[6rem] md:text-[7rem] lg:text-[8rem] text-[#F3691F] translate-y-[7rem] sm:translate-y-[8rem] md:translate-y-[9rem] lg:translate-y-[10rem] xl:translate-y-[11rem] z-[1000] text-center">
        <Arrow />
      </div>
      <div className="translate z-50">
        <SceneAbout />
      </div>
      <main className="absolute w-screen h-screen  top-0 text-black">
        <div className="w-screen h-screen bg-no-repeat bg-cover bg-left bg-aboutImg_lg"></div>
        <div className=" w-screen"></div>
        <AboutText />
        <div className="w-screen h-[20rem]"></div>
      </main>
    </>
  );
}
