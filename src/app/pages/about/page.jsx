"use client";
import SceneAbout from "@/src/components/SceneAbout";

export default function Projects() {
  return (
    <>
      <section
        className="w-screen h-screen mx-auto overflow-hidden transition-colors duration-700 ease-in-out bg-[#fdf9ef]"
        style={{
          fontFamily: "montreal",
          backgroundImage: `url("/medias/studio.jpg")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <main>
          <div className="flex items-end justify-center w-screen h-screen ">
            <SceneAbout />
          </div>
        </main>
      </section>
    </>
  );
}
