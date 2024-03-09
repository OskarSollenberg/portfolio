import dynamic from "next/dynamic";
import About from "@/src/components/About";
import Timeline from "../components/Timeline";

const Scene = dynamic(() => import("@/src/components/Scene"), {
  ssr: true,
});

export default function Home() {
  return (
    <div className="w-screen mx-auto overflow-hidden">
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
