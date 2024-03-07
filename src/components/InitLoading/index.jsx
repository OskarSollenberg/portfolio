"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./styles.css";
import useLoading from "@/src/hooks/useLoading";

export default function InitLoading() {
  const loading = useLoading();
  const circleRef = useRef(null);
  const divRef = useRef(null);

  useEffect(() => {
    if (!loading) {
      gsap.to(circleRef.current, {
        duration: 1,
        opacity: 0,
      });

      gsap.to(divRef.current, {
        duration: 1,
        opacity: 0,
      });
    }
  }, [loading]);

  return (
    <div
      ref={divRef}
      className="absolute w-screen h-screen z-1 bg-[#f3691f]"
      style={{ opacity: 1 }}
    >
      <div className="flex justify-center items-center h-screen">
        <svg className="loader z-50" viewBox="0 0 50 50">
          <circle
            ref={circleRef}
            className="path"
            cx="25"
            cy="25"
            r="20"
            fill="none"
            strokeWidth="0.2"
            style={{ opacity: 1 }}
          ></circle>
        </svg>
      </div>
    </div>
  );
}
