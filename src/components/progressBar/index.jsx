import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";

export default function MainNav() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [counter, setCounter] = useState(1);
  const progressBar = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      progressBar.current,
      { width: "0%", backgroundColor: "black" },
      {
        width: "100%",
        duration: 4,
        onComplete: () => {
          gsap.set(progressBar.current, { width: "0%" });
        },
      }
    );

    const counterAnimation = gsap.to(
      { counter: 1 },
      {
        counter: 100,
        roundProps: "counter",
        duration: 4,
        onUpdate: function () {
          setCounter(this.targets()[0].counter);
        },
      }
    );

    return () => {
      counterAnimation.kill();
    };
  }, []);

  useEffect(() => {
    const updateScrollPosition = () => {
      const scrollY = window.scrollY;
      const fullHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = scrollY / fullHeight;
      setScrollPosition(scrollY);
      gsap.to(progressBar.current, { width: `${scrollPercent * 100}%` });
    };

    window.addEventListener("scroll", updateScrollPosition);

    return () => {
      window.removeEventListener("scroll", updateScrollPosition);
    };
  }, []);

  return (
    <>
      <div className=" bottom-0 left-0 h-2 bg-[transparent] w-full fixed">
        <div
          ref={progressBar}
          className={`rounded-xl h-full ${
            scrollPosition ? "bg-[#A8CBCE]" : "bg-none"
          }`}
        ></div>
      </div>
      <div
        className={`fixed top-0 right-0 p-4 text-lg font-bold transition-all duration-200 ${
          counter === 100 && "opacity-0"
        }`}
      >
        {counter}
      </div>
    </>
  );
}
