import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const Card = ({ title, description, image, txtColor }) => {
  const ref = useRef(null);

  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rY = mouseX / width - HALF_ROTATION_RANGE;
    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;

    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <>
      <div
        style={{ color: txtColor }}
        className={`flex flex-col justify-end items-start w-full place-content-center px-4 py-12  cursor-pointer`}
      >
        <motion.div
          ref={ref}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            transformStyle: "preserve-3d",
          }}
          animate={{
            rotateX,
            rotateY,
          }}
          className="relative h-[20rem] w-[30rem] rounded-xl"
        >
          <div
            style={{
              transform: "translateZ(75px)",
              transformStyle: "preserve-3d",
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
            }}
            className="absolute flex flex-col inset-4 place-content-center rounded-xshadow-lg"
          >
            <p
              style={{
                transform: "translateZ(50px)",
              }}
              className={`text-center text-[4rem] font-bold ${
                txtColor === "#fdf9ef" ? "text-[#F3691F]" : "text-black"
              } ]`}
            >
              {title}
            </p>
          </div>
        </motion.div>
        <div className="text-start">
          <h2 className="text-[2rem]">{title}</h2>
          <p className="">{description}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
