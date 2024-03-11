"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function SiteHeader() {
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
      className={`absolute w-full min-h-16 text-[black] top-0 flex items-center justify-center transition-transform duration-70 ease-in-out z-[1000]  ${
        isVisible ? "transform translate-y-0" : "transform -translate-y-full"
      }`}
    >
      <div
        className={`flex items-center justify-between w-full mx-10 
        `}
      >
        <div className="w-[5rem] h-full "></div>
        <ul className="flex gap-[5rem]">
          <Link href="/#">Home</Link>
          <Link href="pages/Projects">Projects</Link>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
}
