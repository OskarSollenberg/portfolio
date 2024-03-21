"use client";
import { motion } from "framer-motion";
import React from "react";

const ProjectLink = ({ title, imgSrc, subTitle }) => {
  return (
    <div className="group">
      <motion.div
        initial="initial"
        className=" relative flex flex-col items-center justify-center text-[#F3691F] sm:justify-between gap-8 text-center sm:text-start sm:flex-row border-b-2 border-[#FEFCE1] bg-[#f3691f1d] rounded-md mb-[2rem] p-[4rem] py-[4rem] transition-colors duration-500 hover:border-[#F3691F] hover:bg-[#f3691f] border-2 md:py-8 "
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
            className="relative z-10 block text-4xl font-bold transition-colors duration-500 group-hover:text-[#FEFCE1] md:text-6xl hover:scale-110 "
          >
            {title}
          </motion.span>
          <span className="relative z-10 mt-2 block text-base  transition-colors duration-500 group-hover:text-[#FEFCE1] max-w-[10rem] sm:max-w-[20rem] md:max-w-[30rem]">
            {subTitle}
          </span>
        </div>
        <motion.img
          transition={{ type: "spring" }}
          src={imgSrc}
          className="sm:absolute rotate-0 md:scale-0 md:group-hover:scale-100 transition-all duration-500 ease-in-out group-hover:rotate-[12.5deg] md:-rotate-[12.5deg]  h-[8rem] w-[12rem] group-hover:scale-1 z-[100] rounded-lg object-cover  md:h-[12rem] md:w-[18rem] lg:h-[18rem] lg:w-[25rem] right-[4rem] border-2"
          alt={`Image representing a link for ${title}`}
        />
      </motion.div>
    </div>
  );
};

export default ProjectLink;
