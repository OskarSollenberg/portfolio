"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

const StickyLink = ({ icon, color, size, type }) => {
  return (
    <div className="flex w-auto justify-end ">
      <MagnetButton icon={icon} color={color} size={size} type={type} />
    </div>
  );
};

const MagnetButton = ({ icon, color, size, type }) => {
  const ref = useRef(null);

  const d = `M${size},${size} m-${size},0 a${size},${size} 0 1,0 ${
    size * 2
  },0 a${size},${size} 0 1,0 -${size * 2},0`;

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
      className={`group relative grid h-[40px] w-[40px] place-content-center rounded-full transition-colors duration-700 ease-out`}
    >
      <div
        className={`absolute inset-0 z-0 scale-0 rounded-full bg-[${color}] transition-transform duration-700 ease-out group-hover:scale-100`}
      />
      <div style={{ fontSize: `${size}px`, color }}>{icon}</div>

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
        width={size * 2}
        height={size * 2}
        className="absolute z-10"
      >
        <path id="circlePath" d={d} fill="none" />
        <text>
          <textPath
            fill={color}
            href="#circlePath"
            style={{ letterSpacing: "0.2em" }}
            className={`fill-[${color}] text-[.75rem] font-light uppercase opacity-0 transition-opacity duration-700 ease-out group-hover:opacity-100 mr-5`}
          >
            {type === "github" && "CHECK OUT THE CODE CHECK OUT THE CODE "}
            {type === "socials" &&
              "ME CONNECT WITH ME CONNECT WITH CONNECT WITH"}
            {type === "netlify" && "LAUNCH THE WEBSITE LAUNCE THE WEBSITE"}
          </textPath>
        </text>
      </motion.svg>
    </motion.button>
  );
};

export default StickyLink;
