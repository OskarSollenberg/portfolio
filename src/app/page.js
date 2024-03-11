import dynamic from "next/dynamic";
import ProgressBarComp from "@/src/components/ProgressBarComp";
import InitLoading from "../components/InitLoading";

const Scene = dynamic(() => import("@/src/components/Scene"), {
  ssr: true,
});
export default function Home() {
  return (
    <div className="w-screen ">
      <InitLoading />
      <main>
        <Scene />
      </main>
      <ProgressBarComp isHomePage={true} />
    </div>
  );
}
