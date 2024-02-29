import dynamic from "next/dynamic";
import About from "@/components/About";

const Scene = dynamic(() => import("@/src/components/Scene"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="bg-[#FDF9EF]">
      <section className="h-screen">
        <Scene />
      </section>
      <About />
    </main>
  );
}
