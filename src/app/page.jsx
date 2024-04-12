import dynamic from "next/dynamic";
import SiteNav from "../components/SiteNav";

const SceneHome = dynamic(() => import("@/src/components/SceneHome"), {
  ssr: true,
});

export default function Home() {
  return (
    <main className="w-[100dvw] h-[100dvh] overflow-hidden">
      {/* <div
        style={{
          fontFamily: "Montreal",
        }}
        className="absolute w-full top-[2rem] bold text-[3rem] left-[80%] text-[#F3691F] "
      >
        LET'S CHAT
      </div> */}

      {/* <div
        style={{
          fontFamily: "Montreal",
        }}
        className="absolute top-[2rem] left-[2rem] flex justify-center items-center gap-8"
      >
        <div className="w-auto p-4 rounded-md bold text-[1rem] border-2 border-[#f3691f4a]  text-[#f3691f7b]">
          <div className="">
            My name is Oskar Sollenberg, i am a Front End Developer base in
            Stockholm Sweden{" "}
          </div>
        </div>
      </div> */}
      <SceneHome />
      <SiteNav isHomepage={true} />
    </main>
  );
}
