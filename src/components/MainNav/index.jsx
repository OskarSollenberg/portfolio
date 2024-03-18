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

  return (
    <>
      <div
        className={`text-sm text-[black] w-screen justify-end transition-transform fixed right-0 top-0 flex gap-2 p-[6px] duration-300 ease-in-out scale-[80%] origin-top-right  hover:scale-[110%] group cursor-pointer z-50`}
      >
        <div
          className={`p-[1rem] opacity-50 px-[1.3rem] transformO flex items-center justify-center origin-left  rounded-md gap-10 transition-all duration-200 hover:opacity-100  `}
        >
          {links.map((link, index) => {
            return (
              <button
                className="border-r-[2px] border-[black] hover:text-[#f3691f] px-[6px] group-hover:border-[#f3691f] cursor-pointer transition-all duration-200 hover:-translate-y-[2px] "
                key={index}
              >
                {link.name}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}
