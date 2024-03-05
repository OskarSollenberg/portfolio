"use client";
import dynamic from "next/dynamic";
import About from "@/src/components/About";
import InitLoading from "@/src/components/InitLoading";
import { useState, useEffect } from "react";
import SocialMedia from "../components/SocialMedia";
import HoverMe from "../components/hoverMe";

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

    // Prevent scrolling
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setIsLoaded(true);
      // Allow scrolling
      document.body.style.overflow = "auto";
    }, 4000);

    return () => {
      clearTimeout(timer);
      // Allow scrolling when component unmounts
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <main>
      <InitLoading />
      <section className="h-screen">
        {/* <HoverMe /> */}
        <Scene />
        <SocialMedia />
      </section>
      <section className={`h-screen ${isLoaded ? " " : "overflow-hidden"}`}>
        <About />
      </section>
    </main>
  );
}
