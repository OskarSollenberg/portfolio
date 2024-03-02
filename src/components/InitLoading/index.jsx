"use client";

import React, { useEffect, useState } from "react";

export default function InitLoading() {
  const [visible, setVisible] = useState(true);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setVisible(false);
      setHidden(true);
    }, 4000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      <div
        className={`absolute w-screen h-screen transition-all duration-200 z-1 bg-[white] ${
          visible ? "opacity-100" : "opacity-0 pointer-events-none"
        }${hidden ? "hidden" : " "}`}
        style={{ animation: `${visible ? "" : "bubble 4s forwards"}` }} // Add this line
      >
        <div className="flex justify-center items-center h-screen">
          <svg
            className={`loader z-50 ${visible ? "" : "hidden"}`}
            viewBox="0 0 50 50"
            style={{ mixBlendMode: "difference" }} // Add this line
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
        />{" "}
        {/* Add this line */}
      </div>

      <style jsx>{`
        .loader {
          width: 600px; /* Use viewport width */
          height: 600px; /* Use viewport height */
          animation: spin 4s linear infinite; // Change duration to 4s
        }

        .path {
          stroke: #ffffff; // Change this line
          stroke-linecap: round;
          animation: dash 4.8s ease-in-out infinite; // Change duration to 4s
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes dash {
          0% {
            stroke-dasharray: 1, 150;
            stroke-dashoffset: 0;
          }
          50% {
            stroke-dasharray: 90, 150;
            stroke-dashoffset: -35;
          }
          100% {
            stroke-dasharray: 150, 150;
            stroke-dashoffset: -150;
          }
        }

        // Modify this animation
        @keyframes slide {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(200%);
          }
        }

        // Add this class
        .animate-slide {
          animation: slide 5s linear infinite;
        }

        // Add this animation
        @keyframes bubble {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(0);
          }
        }
      `}</style>
    </>

    // ...rest of the code
  );
}
