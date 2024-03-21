import dynamic from "next/dynamic";
import SiteNav from "../components/SiteNav";

// import InitLoading from "../components/InitLoading";

const SceneHome = dynamic(() => import("@/src/components/SceneHome"), {
  ssr: true,
});

export default function Home() {
  return (
    <main className="w-screen  h-full overflow-hidden ">
      <SceneHome />
      <SiteNav isHomepage={true} />
    </main>
  );
}
