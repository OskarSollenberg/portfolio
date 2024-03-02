"use client";
import React from "react";
import "./styles.css";
import useLoading from "@/src/hooks/useLoading";

export default function InitLoading() {
  const loading = useLoading();

  return (
    <div
      className={`absolute w-screen h-screen transition-all duration-200 z-1 bg-[white] ${
        loading ? "opacity-100" : "opacity-0 pointer-events-none hidden"
      }`}
      style={{ animation: `${loading ? "" : "bubble 4s forwards"}` }}
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
        className="absolute w-screen left-10 right border-t border-white animate-slide"
        style={{ top: "50%" }}
      />
    </div>
  );
}
