"use client";
import dynamic from "next/dynamic";
import About from "@/src/components/About";
import InitLoading from "@/src/components/InitLoading";
import { useState, useEffect } from "react";
import SocialMedia from "../components/SocialMedia";
import ProgressBar from "../components/progressBar";

const Scene = dynamic(() => import("@/src/components/Scene"), {
  ssr: false,
});

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Scroll to top on page reload
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };

    const timer = setTimeout(() => {
      setIsLoaded(true);
      document.body.style.overflowY = "auto";
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <main>
      <InitLoading />
      <section className="h-screen">
        <Scene />
        <SocialMedia />
      </section>
      <section className={`h-screen ${isLoaded ? " " : "overflow-hidden"}`}>
        <About />
      </section>
      <ProgressBar />
    </main>
  );
}
