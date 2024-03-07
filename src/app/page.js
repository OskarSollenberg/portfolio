import dynamic from "next/dynamic";
import About from "@/src/components/About";
import InitLoading from "@/src/components/InitLoading";
// import { useState, useEffect } from "react";
import SocialMedia from "../components/SocialMedia";
import ProgressBar from "../components/progressBar";
import Timeline from "../components/Timeline";

import { scrollToTopOnUnload } from "./utils"; // adjust the path as needed

scrollToTopOnUnload();

const Scene = dynamic(() => import("@/src/components/Scene"), {
  ssr: true,
});

export default function Home() {
  return (
    <>
      <main>
        <InitLoading />
        <section className="h-screen">
          <Scene />
          <SocialMedia />
        </section>
        <section>
          <Timeline />
        </section>
        <section>
          <About />
        </section>
      </main>
      <ProgressBar />
    </>
  );
}
