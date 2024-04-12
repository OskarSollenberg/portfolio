"use client";
import { useState, useLayoutEffect } from "react";
import Nav from "./Nav";
import CountDown from "./CountDown";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import HamburgerMenu from "./HamburgerMenu";

export default function SiteNav({ isHomepage }) {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();
  const [lastPathname, setLastPathname] = useState(null);

  const handleClick = () => {
    if (pathname !== lastPathname) {
      setIsActive(false);
      setLastPathname(pathname);
    } else {
      setIsActive(!isActive);
    }
  };

  useLayoutEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    if (isActive) {
      document.body.style.overflow = "hidden";
    }
    return () => (document.body.style.overflow = originalStyle);
  }, [isActive]);

  return (
    <div>
      <div
        style={{
          fontFamily: "Montreal",
        }}
        className={`fixed flex items-center rounded-lg justify-start gap-[1rem] -translate-x-1/2 md:translate-x-0  md:left-[4rem] left-[50%] bottom-[2rem] text-[#FDF9EF] text-sm transition-all duration-300 ease-in-out z-[5000]
    ${isActive ? "w-[4rem] " : "w-[4rem] md:w-auto"}
    `}
      >
        <HamburgerMenu isActive={isActive} onClick={handleClick} />
        {!isActive && isHomepage && (
          <div className="hidden md:flex">
            <CountDown />
          </div>
        )}
      </div>
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </div>
  );
}
