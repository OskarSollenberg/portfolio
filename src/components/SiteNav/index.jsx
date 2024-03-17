"use client";
import { useEffect, useState } from "react";
import Nav from "./Nav";
import CountDown from "./CountDown";

import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function SiteNav({ isHomepage }) {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);

  return (
    <>
      <div
        style={{
          fontFamily: "Montreal",
        }}
        className={` fixed flex items-center justify-start gap-[1rem] -translate-x-[50%] md:translate-x-0 left-[50%] md:left-[4rem]  bottom-[2rem]  bg-black text-[#FDF9EF] text-sm rounded-md transition-all duration-300 ease-in-out z-[2000] p-[4px]
		${isActive ? "w-[4rem] " : "w-[4rem] md:w-auto"}`}
      >
        <div
          onClick={() => {
            setIsActive(!isActive);
          }}
          className="w-16 h-8 cursor-pointer flex items-center justify-content-center"
        >
          <div
            className={`w-full flex flex-col justify-center items-center ${
              isActive ? "-space-y-[1.5px] " : "space-y-2"
            }`}
          >
            <div
              className={`h-0.5 w-[2rem] bg-white mx-auto relative transition-transform duration-300 ${
                isActive ? "rotate-45 " : ""
              }`}
            ></div>
            <div
              className={`h-0.5 w-[2rem] bg-white mx-auto relative transition-transform duration-300 ${
                isActive ? "-rotate-45" : ""
              }`}
            ></div>
          </div>
        </div>
        {!isActive && isHomepage && (
          <div className="hidden md:flex">
            <CountDown />
          </div>
        )}
      </div>

      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </>
  );
}
