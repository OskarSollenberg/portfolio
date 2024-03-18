import { motion } from "framer-motion";
import Link from "next/link";

import React from "react";

const NavItem = ({ title, imgSrc, subTitle }) => {
  return (
    <div className="group">
      <motion.div
        initial="initial"
        className=" relative flex flex-col items-center justify-center sm:justify-between gap-8 text-center sm:text-start sm:flex-row border-b-2 border-neutral-700 py-[4rem] transition-colors duration-500 hover:border-neutral-50 md:py-8 "
      >
        <div>
          <motion.span
            variants={{
              initial: { x: 0 },
              whileHover: { x: 30, scale: 1.1 },
            }}
            transition={{
              type: "spring",
              staggerChildren: 0.075,
              delayChildren: 0.25,
            }}
            className="relative z-10 block text-4xl font-bold text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50 md:text-6xl hover:scale-110 "
          >
            {title}
          </motion.span>
          <span className="relative z-10 mt-2 block text-base text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50 max-w-[10rem] sm:max-w-[20rem] md:max-w-[30rem]">
            {subTitle}
          </span>
        </div>
        <motion.img
          transition={{ type: "spring" }}
          src={imgSrc}
          className="sm:absolute rotate-0 md:scale-0 md:group-hover:scale-100 transition-all duration-500 ease-in-out group-hover:rotate-[12.5deg] md:-rotate-[12.5deg]  h-[8rem] w-[12rem] group-hover:scale-1 z-[1000] rounded-md object-cover  md:h-[12rem] md:w-[18rem] lg:h-[18rem] lg:w-[25rem] right-[4rem] border-2"
          alt={`Image representing a link for ${title}`}
        />
      </motion.div>
    </div>
  );
};

export default NavItem;
