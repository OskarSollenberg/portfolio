import React from "react";

export default function About({ index }) {
  return (
    <div className={`h-screen w-screen text-black text-center z-[${index}]`}>
      ABOUT SECTION
    </div>
  );
}
