import dynamic from "next/dynamic";
import About from "@/src/components/About";
import SiteHeader from "../components/SiteHeader";

const Scene = dynamic(() => import("@/src/components/Scene"), {
  ssr: true,
});

export default function Home() {
  return (
    <div className="w-screen ">
      <main>
        <Scene />
        <About index={100} />
      </main>
    </div>
  );
}
