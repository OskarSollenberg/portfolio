"use client";
import { useEffect, useState } from "react";
import Nav from "./nav";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Home() {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);

  return (
    <>
      <div className={`p-[30px] fixed bottom-0 z-[1000] `}>
        <div>
          <div
            onClick={() => {
              setIsActive(!isActive);
            }}
            className="w-20 h-20 rounded-full bg-blue-600 cursor-pointer flex items-center justify-content-center"
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
        </div>
      </div>
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </>
  );
}
