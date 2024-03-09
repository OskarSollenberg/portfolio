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
    <div className="w-screen mx-auto overflow-hidden">
      {/* <InitLoading index={10} /> */}
      <main>
        <section className="h-screen relative">
          <Scene index={20} />
        </section>
        <section className="">
          <Timeline index={2} />
        </section>
        <section className="">
          <About index={100} />
        </section>
      </main>
    </div>
  );
}
