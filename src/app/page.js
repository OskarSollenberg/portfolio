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
    <div className="max-w-[90rem] w-screen">
      <InitLoading />
      <main>
        <section className="h-screen">
          <Scene />
        </section>
        <section>
          <Timeline />
        </section>
      </main>
    </div>
  );
}
