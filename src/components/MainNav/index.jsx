"use client";

import React, { useState, useEffect } from "react";
import { gsap } from "gsap";

export default function MainNav() {
  const links = [
    {
      name: "About",
    },
    {
      name: "Work",
    },
    {
      name: "Contact",
    },
  ];
  const [menuOpen, setMenuOpen] = useState(false);
  //   const [textColor, setTextColor] = useState("white");
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    const counterAnimation = gsap.to(
      { counter: 1 },
      {
        counter: 100,
        roundProps: "counter",
        duration: 4,
        onUpdate: function () {
          setCounter(Math.round(this.targets()[0].counter));
        },
      }
    );

    setTimeout(() => {
      setMenuOpen(true);
    }, 4000);

    return () => {
      counterAnimation.kill();
    };
  }, []);

  const checkScroll = () => {
    if (window.scrollY > 10) {
      setMenuOpen(false);
      //   setTextColor("#F16721");
    } else {
      setMenuOpen(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScroll);
    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  return (
    <>
      <div className="bg-transparent-black border-[2px] border-[black] text-sm text-[white] fixed bottom-4 flex gap-2 p-[6px] rounded-md hover:bottom-8 transition-all duration-200 group">
        <div
          className={`p-[1rem] px-[1.3rem] bg-[black] rounded-md flex justify-center items-center ${
            menuOpen ? "" : ""
          } `}
        >
          {counter === 100 ? "M" : counter}
        </div>
        {menuOpen && (
          <div
            className={`p-[1rem] px-[1.3rem] transformO flex items-center justify-center origin-left bg-transparent-black rounded-md gap-10 border-[black] border-[1px]`}
          >
            {links.map((link, index) => {
              return (
                <button
                  className="border-r-[2px] border-[black] px-[6px] group-hover:border-[white] cursor-pointer transition-all duration-200 hover:text-[white] "
                  key={index}
                >
                  {link.name}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
