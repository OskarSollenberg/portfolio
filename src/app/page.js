import dynamic from "next/dynamic";
import SiteNav from "../components/SiteNav";
import MainNav from "../components/MainNav";

// import InitLoading from "../components/InitLoading";

const Scene = dynamic(() => import("@/src/components/Scene"), {
  ssr: true,
});

export default function Home() {
  return (
    <main className="w-screen  h-full overflow-hidden ">
      {/* <InitLoading /> */}
      <Scene />
      <SiteNav isHomepage={true} />
    </main>
  );
}
