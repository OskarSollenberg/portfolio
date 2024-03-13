import dynamic from "next/dynamic";

// import InitLoading from "../components/InitLoading";

const Scene = dynamic(() => import("@/src/components/Scene"), {
  ssr: true,
});

export default function Home() {
  return (
    <div className="w-screen h-screen overflow-hidden bg-[#FDF9EF]">
      {/* <InitLoading /> */}
      <main>
        <Scene />
      </main>
    </div>
  );
}
