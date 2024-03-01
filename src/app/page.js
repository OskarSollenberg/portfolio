import dynamic from "next/dynamic";
import About from "@/src/components/About";
import Loading from "../components/loading";

const Scene = dynamic(() => import("@/src/components/Scene"), {
  ssr: false,
});

// FDF9EF;

export default function Home() {
  return (
    <main className="bg-[#E43B13]">
      <section className="h-screen">
        <Loading />
        <Scene />
      </section>
      <About />
    </main>
  );
}
