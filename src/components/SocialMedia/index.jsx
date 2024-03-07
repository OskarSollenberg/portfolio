"use client";

import React, { useEffect, useState } from "react";
import { ImFacebook2 } from "react-icons/im";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

export default function SocialMedia() {
  const [isOpen, setIsOpen] = useState(false);
  const [textcolor, setTextcolor] = useState("white");

  //   useEffect(() => {
  //     let timer1 = setTimeout(() => {
  //       setIsOpen(true);
  //     }, 7000);

  //     let timer2 = setTimeout(() => {
  //       setIsOpen(false);
  //     }, 10000);

  //     return () => {
  //       clearTimeout(timer1);
  //       clearTimeout(timer2);
  //     };
  //   }, []);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY >= 10) {
        setTextcolor("#F16721");
        setIsOpen(false);
      } else {
        setTextcolor("white");
        setIsOpen(true);
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
      className={`group absolute bottom-[2rem] transform -translate-y-[50%] h-[12rem] w-20  gap-5 transition-all duration-500 left-[99%] flex flex-col items-center justify-center ${
        isOpen
          ? "bg-transparent-black transform -translate-x-16"
          : "transform translate-x-0 "
      } `}
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
