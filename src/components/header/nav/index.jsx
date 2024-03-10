import React, { useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

import NavLink from "./NavLink";
import Curve from "./Curve";
import NavFooter from "../NavFooter";

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Work",
    href: "/work",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export const menuSlide = {
  initial: { x: "calc(100% + 100px)" },
  enter: { x: "0", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
  exit: {
    x: "calc(100% + 100px)",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
};

export default function Nav() {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="h-screen bg-[#292929] fixed right-0 top-0 text-white w-screen md:w-auto"
    >
      <div className="box-content h-full p-24 flex flex-col justify-between">
        <div
          onMouseLeave={() => {
            setSelectedIndicator(pathname);
          }}
          className="flex flex-col text-7xl gap-3 mt-20"
        >
          <div className="text-[#999999] border-b border-[#999999] uppercase text-xs mb-10">
            <p>Navigation</p>
          </div>
          {navItems.map((data, index) => {
            return (
              <NavLink
                key={index}
                data={{ ...data, index }}
                isActive={selectedIndicator == data.href}
                setSelectedIndicator={setSelectedIndicator}
                className="no-underline text-white font-light"
              ></NavLink>
            );
          })}
          <NavFooter />
        </div>
      </div>
      <Curve />
    </motion.div>
  );
}
