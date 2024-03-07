import dynamic from "next/dynamic";
import About from "@/src/components/About";
import InitLoading from "@/src/components/InitLoading";
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
    <div className="w-screen mx-auto">
      <InitLoading />
      <main>
        <section className="h-screen z-10 relative">
          <Scene />
        </section>
        <section className="-z-10">
          <Timeline />
        </section>
        <section className="">
          <About />
        </section>
      </main>
    </div>
  );
}
