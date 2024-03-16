import Link from "next/link";
import { motion } from "framer-motion";

export const slide = {
  initial: { x: 80 },
  enter: (i) => ({
    x: 0,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
  }),
  exit: (i) => ({
    x: 80,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
  }),
};

export const scale = {
  open: { scale: 1, transition: { duration: 0.3 } },
  closed: { scale: 0, transition: { duration: 0.4 } },
};

export default function NavLink({ data, isActive, setSelectedIndicator }) {
  const { title, href, index } = data;

  return (
    <motion.div
      className={`relative flex items-center no-underline text-white font-light`}
      onMouseEnter={() => {
        setSelectedIndicator(href);
      }}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <motion.div
        variants={scale}
        animate={isActive ? "open" : "closed"}
        className={`w-[10px] h-[10px] bg-white rounded-[50%] absolute left-[-30px]`}
      ></motion.div>
      <Link href={href}>{title}</Link>
    </motion.div>
  );
}
