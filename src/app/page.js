import dynamic from "next/dynamic";
import About from "@/src/components/About";
import InitLoading from "@/src/components/InitLoading";

const Scene = dynamic(() => import("@/src/components/Scene"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="">
      <InitLoading />
      <section className="h-screen">
        <Scene />
      </section>
      {/* <About /> */}
    </main>
  );
}
