import React, { useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import ConnectWithMe from "../../ConnectWithMe";
import { TiSocialLinkedinCircular } from "react-icons/ti";

import NavLink from "./NavLink";
import Curve from "./Curve";
// import NavFooter from "./NavFooter";

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Projects",
    href: "/pages/projects",
  },
  {
    title: "About",
    href: "/pages/about",
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
      <div className="absolute top-0 right-0 z-[4000] mt-[4rem] mr-[4rem]  md:mt-[5.5rem] md:mr-[5.5rem]  ">
        <ConnectWithMe
          icon={<TiSocialLinkedinCircular />}
          color={"#fff"}
          size={50}
          type={"socials"}
        />
      </div>
      <motion.div
        variants={menuSlide}
        initial="initial"
        animate="enter"
        exit="exit"
        className="h-screen w-[100vw] bg-[#292929ee] fixed z-[1000] right-0 top-0 text-white "
      >
        {/* lg:w-[89vw] */}
        <div className=" md:ml-[15rem] h-full flex flex-col items-center md:items-start justify-center">
          <div
            style={{
              fontFamily: "Montreal",
            }}
            onMouseLeave={() => {
              setSelectedIndicator(pathname);
            }}
            className=" flex flex-col text-[3rem] sm:text-[7rem] md:text-[8rem] leading-tight "
          >
            {/* <div className="text-[#999999] border-b uppercase text-xs mb-10 ">
              <p>Navigation</p>
            </div> */}
            {navItems.map((data, index) => {
              return (
                <NavLink
                  key={index}
                  data={{ ...data, index }}
                  isActive={selectedIndicator == data.href}
                  setSelectedIndicator={setSelectedIndicator}
                ></NavLink>
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
