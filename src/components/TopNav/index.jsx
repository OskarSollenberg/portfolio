"use client";
import { navItems } from "@/src/data/navItems";
import LinkItem from "./LinkItem";
import { useState } from "react";

export default function TopNav() {
  const clr = "rgba(105, 105, 105, 0.183)";

  const [activeLink, setActiveLink] = useState("/");

  return (
    <>
      <div
        className={`text-sm w-screen justify-end transition-transform fixed right-0 top-0 flex gap-2 p-[6px] duration-300 ease-in-out scale-[80%] origin-top-right  hover:scale-[110%] group cursor-pointer text-white z-[4000]`}
      >
        <div
          className={`p-[1rem] opacity-50 px-[1.3rem] transformO flex items-center justify-center origin-left  rounded-md gap-10 transition-all duration-200 hover:opacity-100  `}
        >
          {navItems.map((navItem, index) => {
            return (
              <LinkItem
                activeLink={activeLink}
                setActiveLink={setActiveLink}
                title={navItem.title}
                key={index}
                link={navItem.href}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
