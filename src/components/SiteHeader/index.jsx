"use client";
import React, { useState, useEffect } from "react";

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
      className={`absolute w-full z-10 min-h-16 text-[white]flex items-center justify-center transition-transform duration-700	 ease-in-out ${
        isVisible ? "transform translate-y-0" : "transform -translate-y-full"
      }`}
    >
      {/* <h1>Herman</h1> */}
    </div>
  );
}
