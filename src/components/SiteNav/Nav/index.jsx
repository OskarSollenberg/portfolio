import React, { useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import StickyLink from "../../StickyLink";
import { TiSocialLinkedinCircular } from "react-icons/ti";

import NavLink from "./NavLink";
import Curve from "./Curve";
import Link from "next/link";
// import NavFooter from "./NavFooter";

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Projects",
    href: "/projects",
  },
  {
    title: "About",
    href: "/about",
  },
  //   {
  //     title: "Contact",
  //     href: "/pages/contact",
  //   },
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
    <>
      <div className="absolute top-0 right-0 z-[400] mt-[4rem] mr-[4rem] md:mt-[5.5rem] md:mr-[5.5rem] ">
        <StickyLink
          icon={<TiSocialLinkedinCircular />}
          color={"#f3691f"}
          size={50}
          type={"socials"}
        />
      </div>
      <motion.div
        variants={menuSlide}
        initial="initial"
        animate="enter"
        exit="exit"
        className="h-screen w-[100vw] bg-[#292929ee] fixed z-[300] right-0 top-0"
      >
        <div className=" h-full flex flex-col items-center justify-center">
          <div
            style={{
              fontFamily: "Montreal",
            }}
            onMouseLeave={() => {
              setSelectedIndicator(pathname);
            }}
            className=" flex leading-[4rem] flex-col text-[4rem] sm:text-[8rem] sm:leading-[10rem] md:text-[10rem] md:leading-[12rem]"
          >
            <div className="text-[#f3691f] border-[#FEFCE1] border-b uppercase text-xs mb-10 ">
              <p>This is a navigation</p>
            </div>
            {navItems.map((navItem, index) => {
              return (
                <Link href={navItem.href} key={index}>
                  <NavLink
                    data={{ ...navItem }}
                    isActive={selectedIndicator == navItem.href}
                    setSelectedIndicator={setSelectedIndicator}
                  ></NavLink>
                </Link>
              );
            })}
            {/* <NavFooter /> */}
          </div>
        </div>
        <Curve />
      </motion.div>
    </>
  );
}
