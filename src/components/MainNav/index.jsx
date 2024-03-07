"use client";

import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import { GiHamburgerMenu } from "react-icons/gi";

export default function MainNav() {
  const clr = "rgba(105, 105, 105, 0.183)";
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
        duration: 3,
        onUpdate: function () {
          setCounter(Math.round(this.targets()[0].counter));
        },
      }
    );

    setTimeout(() => {
      if (window.innerWidth >= 600) {
        setMenuOpen(true);
      }
    }, 2800);

    return () => {
      counterAnimation.kill();
    };
  }, []);

  const checkScroll = () => {
    if (window.innerWidth >= 600) {
      if (window.scrollY === 1) {
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
    const handleResize = () => {
      if (window.innerWidth < 600) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div
        className={`text-sm text-[white] transition-transform fixed bottom-4 flex gap-2 p-[6px] rounded-md duration-300 ease-in-out hover:-translate-y-2 group ${
          menuOpen
            ? "border-[2px] border-[black] bg-[#69696934] bg-none"
            : "border-none "
        }  `}
      >
        <div
          onClick={() => setMenuOpen((prev) => !prev)}
          className={`bg-[black] text-[white] rounded-full flex justify-center items-center text-[1rem] 
           hover:text-[white] transition-allg duration-300 hover:text-[1.2rem] cursor-pointer   ${
             menuOpen
               ? " h-[3.5rem] w-[3.5rem] "
               : " h-[4rem] w-[4rem] bg-[#f16621] text-[black]"
           }  `}
        >
          {counter === 100 ? <GiHamburgerMenu /> : counter}
        </div>

        {menuOpen && (
          <div
            className={`p-[1rem] opacity-50 px-[1.3rem] transformO flex items-center justify-center origin-left bg-[#69696972] rounded-md gap-10 border-[black] border-[1px] transition-all duration-200 hover:opacity-100  hover:text-[white]  `}
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
