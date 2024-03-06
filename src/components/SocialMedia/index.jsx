import React, { useEffect, useState } from "react";

export default function SocialMedia() {
  const [isOpen, setIsOpen] = useState(false);
  const [textcolor, setTextcolor] = useState("white");

  useEffect(() => {
    let timer1 = setTimeout(() => {
      setIsOpen(true);
    }, 7000);

    let timer2 = setTimeout(() => {
      setIsOpen(false);
    }, 10000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

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
          className="group-hover:hidden flex flex-col items-center justify-center"
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
        <div className="hidden group-hover:block" style={{ color: textcolor }}>
          \ \<br />
          \ \<br />
          \ \<br />
        </div>
      </div>
      <div className="group-hover:block hidden" style={{ color: textcolor }}>
        L
      </div>
      <div className="group-hover:block hidden" style={{ color: textcolor }}>
        F
      </div>
      <div className="group-hover:block hidden" style={{ color: textcolor }}>
        I
      </div>
    </div>
  );
}
