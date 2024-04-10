"use client";
import { MdKeyboardArrowDown } from "react-icons/md";
import { motion } from "framer-motion";
import useLoading from "@/src/hooks/useLoading";

const animationProps = {
  animate: { y: ["0%", "40%", "0%"] },
  transition: {
    duration: 1.5,
    ease: "easeInOut",
    repeatType: "loop",
    repeat: Infinity,
    repeatDelay: 1,
  },
};

export default function Arrow() {
  const isLoading = useLoading();

  return (
    <motion.div
      className={
        isLoading ? "opacity-0" : "opacity-40 transition-all duration-500"
      }
      {...animationProps}
    >
      <MdKeyboardArrowDown />
    </motion.div>
  );
}
