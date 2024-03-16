import { motion } from "framer-motion";
import React from "react";

const NavItem = ({ heading, imgSrc, subheading, href }) => {
  return (
    <motion.a
      href={href}
      initial="initial"
      whileHover="whileHover"
      className="group relative flex items-center justify-between border-b-2 border-neutral-700 py-4 transition-colors duration-500 hover:border-neutral-50 md:py-8 group"
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
          {heading}
        </motion.span>
        <span className="relative z-10 mt-2 block text-base text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50">
          {subheading}
        </span>
      </div>

      <motion.img
        variants={{
          initial: { scale: 0, rotate: "-12.5deg" },
          whileHover: { scale: 1, rotate: "12.5deg" },
        }}
        transition={{ type: "spring" }}
        src={imgSrc}
        className="absolute z-0 h-[12rem] w-[15rem] rounded-md object-cover md:h-[18rem] md:w-[25rem] right-[4rem] border-2"
        alt={`Image representing a link for ${heading}`}
      />
    </motion.a>
  );
};

export default NavItem;
