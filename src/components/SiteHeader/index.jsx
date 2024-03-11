"use client";
import React, { useState, useEffect } from "react";

export default function SiteHeader({ index }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      className={`absolute w-full min-h-16 text-[black] top-0 flex items-center justify-center transition-transform duration-70 ease-in-out z-[${index}] ${
        isVisible ? "transform translate-y-0" : "transform -translate-y-full"
      }`}
    >
      <div className="flex items-center justify-between w-full mx-10">
        <div className="w-[5rem] h-full "></div>
        <ul className="flex gap-[5rem]">
          <li>Home</li>
          <li>Work</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="w-[5rem] h-full ">Get In Touch</div>
      </div>
    </div>
  );
}
