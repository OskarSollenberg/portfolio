"use client";
import React, { useEffect } from "react";
import "./styles.css";
import useLoading from "@/src/hooks/useLoading";

export default function InitLoading() {
  const loading = useLoading();

  //   useEffect(() => {
  //     document.body.style.overflow = loading ? "hidden" : "auto";

  //     return () => {
  //       document.body.style.overflow = "auto";
  //     };
  //   }, [loading]);

  return (
    <div
      className={`absolute w-screen h-screen transition-opacity duration-1000 z-1 bg-[black] ${
        loading ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex justify-center items-center h-screen">
        <svg
          className={`loader z-50 ${loading ? "" : "hidden"}`}
          viewBox="0 0 50 50"
          style={{ mixBlendMode: "difference" }}
        >
          <circle
            className="path"
            cx="25"
            cy="25"
            r="20"
            fill="none"
            strokeWidth="0.2"
          ></circle>
        </svg>
      </div>
      <div
        className="absolute w-screen border-[4rem] border-white animate-slide text-[#F13412] rounded-2xl "
        style={{ top: "42%" }}
      />
    </div>
  );
}
