import dynamic from "next/dynamic";
import About from "@/src/components/About";
import Background from "@/src/components/Background";

const Scene = dynamic(() => import("@/src/components/Scene"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="bg-[#E43B13]">
      <Background />
      <section className="h-screen">
        <Scene />
      </section>
      <About />
    </main>
  );
}
