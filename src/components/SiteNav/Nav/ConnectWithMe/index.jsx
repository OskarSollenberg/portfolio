"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { MdOutlineArrowUpward } from "react-icons/md";
import { TiSocialLinkedinCircular } from "react-icons/ti";

const ConnectWithMe = () => {
  return (
    <div className="flex w-auto justify-end mt-[5.5rem] mr-[5.5rem]  ">
      <MagnetButton />
    </div>
  );
};

const MagnetButton = () => {
  const ref = useRef(null);

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const { height, width, left, top } = ref.current.getBoundingClientRect();

    setX(e.clientX - (left + width / 2));
    setY(e.clientY - (top + height / 2));
  };

  const handleMouseLeave = () => {
    setX(0);
    setY(0);
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="group relative grid h-[40px] w-[40px] place-content-center rounded-full border-2 border-[#FDF9EF] transition-colors duration-700 ease-out"
    >
      <div className="absolute inset-0 z-0 scale-0 rounded-full bg-[#FDF9EF] transition-transform duration-700 ease-out group-hover:scale-100" />
      <div className="text-[4rem] text-[#FDF9EF]">
        <TiSocialLinkedinCircular />
      </div>

      <motion.svg
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
        style={{
          top: "50%",
          left: "50%",
          x: "-50%",
          y: "-50%",
        }}
        width="200"
        height="200"
        className="absolute z-10"
      >
        <path
          id="circlePath"
          d="M100,100 m-70,0 a70,70 0 1,0 140,0 a70,70 0 1,0 -140,0"
          fill="none"
        />
        <text>
          <textPath
            href="#circlePath"
            fill="[#FDF9EF]"
            style={{ letterSpacing: "0.2em" }}
            className="fill-[#FDF9EF] text-[.75rem] font-light uppercase opacity-0 transition-opacity duration-700 ease-out group-hover:opacity-100 mr-5"
          >
            ME CONNECT WITH ME CONNECT WITH CONNECT WITH
          </textPath>
        </text>
      </motion.svg>
    </motion.button>
  );
};

export default ConnectWithMe;
