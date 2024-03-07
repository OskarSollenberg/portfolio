"use client";

import React, { useEffect, useState } from "react";
import { ImFacebook2 } from "react-icons/im";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

export default function SocialMedia({ index }) {
  const [isOpen, setIsOpen] = useState(false);
  const [textcolor, setTextcolor] = useState("#F16721");
  const [lowPosition, setLowPosition] = useState(false);

  useEffect(() => {
    let timer1 = setTimeout(() => {
      setLowPosition(true);
    }, 3000);

    return () => {
      clearTimeout(timer1);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY >= 10) {
        setTextcolor("white");
        setLowPosition(true);
        //   setIsOpen(false);
      } else {
        setTextcolor("#F16721");
        //   setIsOpen(true);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      className={`group absolute bottom-full transform -translate-y-[50%] h-[12rem] w-20  gap-5 transition-all duration-500 left-[99%] flex flex-col items-center justify-center z-[${index}] ${
        isOpen
          ? "bg-transparent-black transform -translate-x-16"
          : "transform translate-x-0 "
      } ${lowPosition ? "translate-y-[90vh]" : "transform translate-x-0 "} `}
    >
      <div className=" absolute rounded-l-md flex p-4 justify-center items-center right-[100%] h-full w-8 bg-[black]">
        <div
          className={`${
            isOpen ? "hidden" : "flex"
          } flex-col items-center justify-center`}
          style={{ color: textcolor }}
        >
          <p>S</p>
          <p>O</p>
          <p>C</p>
          <p>I</p>
          <p>A</p>
          <p>L</p>
          <p>S</p>
        </div>
        <div className={` text-[#F3691F] ${isOpen ? "flex" : "hidden"}`}>
          \ \<br />
          \ \<br />
          \ \<br />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-6 ">
        <a
          className={` text-[2.5rem] text-[white] hover:scale-110 ${
            isOpen ? "flex" : "hidden"
          }`}
        >
          <FaLinkedin />
        </a>
        <a
          className={`text-[2rem] text-[white] hover:scale-110 ${
            isOpen ? "flex" : "hidden"
          }`}
        >
          <ImFacebook2 />
        </a>
        <a
          className={`text-[2.7rem] text-[white] hover:scale-110 ${
            isOpen ? "flex" : "hidden"
          }`}
        >
          <AiFillInstagram />
        </a>
      </div>
    </div>
  );
}
