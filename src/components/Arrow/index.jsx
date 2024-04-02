"use client";
import React, { use, useEffect, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { motion } from "framer-motion";
import useLoading from "@/src/hooks/useLoading";

export default function Arrow() {
  const isLoading = useLoading();

  return (
    <motion.div
      className={` ${
        isLoading ? "opacity-0" : "opacity-40 transition-all duration-500"
      } `}
      animate={{ y: ["0%", "20%", "0%"] }}
      transition={{
        duration: 1.5,
        ease: "easeInOut",
        repeatType: "loop", // Changed this line
        repeat: Infinity,
        repeatDelay: 1,
      }}
    >
      <MdKeyboardArrowDown />
    </motion.div>
  );
}
