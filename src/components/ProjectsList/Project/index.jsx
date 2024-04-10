"use client";
import { motion } from "framer-motion";
import React from "react";

export default function Project({ title, imgSrc, subTitle }) {
  return (
    <div className="group">
      <motion.div
        initial="initial"
        className=" relative flex flex-col items-center justify-center text-[#F3691F] sm:justify-between gap-8 text-center sm:text-start sm:flex-row border-b-2 border-[#FEFCE1] bg-[#f3691f1d]  mb-[2rem] p-[2rem] sm:p-[4rem] transition-colors duration-500 hover:border-[#F3691F] hover:bg-[#f3691f] border-2 md:py-8 "
      >
        <div>
          <motion.h2
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
          </motion.h2>
          <p className="relative z-10 mt-2 block text-base  transition-colors duration-500 group-hover:text-[#FEFCE1] max-w-[20rem] sm:max-w-[50rem]">
            {subTitle}
          </p>
        </div>
        <motion.img
          transition={{ type: "spring" }}
          src={imgSrc}
          className="lg:absolute rotate-0 lg:scale-0 lg:group-hover:scale-100 transition-all duration-500 ease-in-out group-hover:rotate-[12.5deg] lg:-rotate-[12.5deg]  h-[8rem] w-[12rem] group-hover:scale-1 z-[100] rounded-sm object-cover lg:h-[12rem] lg:w-[18rem] xl:h-[18rem] xl:w-[25rem] right-[4rem] "
          alt={`Image representing a link for ${title}`}
        />
      </motion.div>
    </div>
  );
}
