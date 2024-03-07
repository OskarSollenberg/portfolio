import dynamic from "next/dynamic";
import About from "@/src/components/About";
import InitLoading from "@/src/components/InitLoading";
import SocialMedia from "../components/SocialMedia";
import ProgressBar from "../components/progressBar";
import Timeline from "../components/Timeline";

const Scene = dynamic(() => import("@/src/components/Scene"), {
  ssr: true,
});

if (typeof window !== "undefined") {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
}

export default function Home() {
  return (
    <>
      <InitLoading />
      <main>
        <section className="h-screen">
          <Scene />
          <SocialMedia />
        </section>
        <section>
          <Timeline />
        </section>
        <section>
          <About />
        </section>
      </main>
      <ProgressBar />
    </>
  );
}
