import dynamic from "next/dynamic";
import SiteNav from "../components/SiteNav";

// import InitLoading from "../components/InitLoading";

const Scene = dynamic(() => import("@/src/components/Scene"), {
  ssr: true,
});

export default function Home() {
  return (
    <div className="w-screen h-screen overflow-hidden ">
      <SiteNav isHomepage={true} />

      {/* <InitLoading /> */}
      <main>
        <Scene />
      </main>
    </div>
  );
}
