"use client";

import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import { GiHamburgerMenu } from "react-icons/gi";

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
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    if (!mediaQuery.matches) {
      if (window.scrollY > 10) {
        setMenuOpen(false);
      } else {
        setMenuOpen(true);
      }
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", checkScroll);
    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    const handleResize = () => {
      if (mediaQuery.matches) {
        setMenuOpen(false);
      }
    };

    mediaQuery.addListener(handleResize);
    handleResize();

    return () => {
      mediaQuery.removeListener(handleResize);
    };
  }, []);

  return (
    <>
      <div
        className={`text-sm text-[white] transition-transform fixed bottom-4 flex gap-2 p-[6px] rounded-md duration-300 ease-in-out hover:-translate-y-2 group ${
          menuOpen
            ? "border-[2px] border-[black] bg-transparent-black bg-none"
            : "border-none "
        }  `}
      >
        <div
          className={`bg-[black] rounded-md flex justify-center items-center text-[1rem] 
           hover:text-[#f3691f] transition-all duration-300 hover:text-[1.2rem] cursor-pointer   ${
             menuOpen
               ? "rounded-full h-[3.5rem] w-[3.5rem]"
               : "rounded-full h-[4rem] w-[4rem]"
           }  `}
        >
          {counter === 100 ? <GiHamburgerMenu /> : counter}
        </div>

        {menuOpen && (
          <div
            className={`p-[1rem] opacity-50 px-[1.3rem] transformO flex items-center justify-center origin-left bg-transparent-black rounded-md gap-10 border-[black] border-[1px] transition-all duration-200 hover:opacity-100 `}
          >
            {links.map((link, index) => {
              return (
                <button
                  className="border-r-[2px] border-[black] px-[6px] group-hover:border-[#f3691f] cursor-pointer transition-all duration-200 hover:text-[white] hover:-translate-y-[2px] "
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
