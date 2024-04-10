import dynamic from "next/dynamic";
import SiteNav from "../components/SiteNav";

const SceneHome = dynamic(() => import("@/src/components/SceneHome"), {
  ssr: true,
});

export default function Home() {
  return (
    <main className="w-[100dvw] h-[100dvh] overflow-hidden">
      <SceneHome />
      <SiteNav isHomepage={true} />
    </main>
  );
}
