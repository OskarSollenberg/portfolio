import React, { useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { menuSlide } from "../anim";
import Link from "./Link";
import Curve from "./Curve";

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

export default function index() {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="h-screen bg-[#292929] fixed right-0 top-0 text-white w-screen"
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
              <Link
                key={index}
                data={{ ...data, index }}
                isActive={selectedIndicator == data.href}
                setSelectedIndicator={setSelectedIndicator}
                className="no-underline text-white font-light"
              ></Link>
            );
          })}
          <div className="flex mt-10 justify-between w-full text-xs text-white gap-10">
            <a>Awwwards</a>
            <a>Instagram</a>
            <a>Dribble</a>
            <a>LinkedIn</a>
          </div>
        </div>
      </div>
      <Curve />
    </motion.div>
  );
}
