import dynamic from "next/dynamic";
import SiteNav from "../components/SiteNav";
import SiteHeader from "../components/SiteHeader";

const SceneHome = dynamic(() => import("@/src/components/SceneHome"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="w-[100dvw] h-[100dvh] overflow-hidden">
      <SiteHeader />
      <SceneHome />
      <SiteNav isHomepage={true} />
    </main>
  );
}
