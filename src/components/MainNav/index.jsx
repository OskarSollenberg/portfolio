"use client";
import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function MainNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [counter, setCounter] = useState(1);

  return (
    <>
      <div
        onClick={() => setMenuOpen((prev) => !prev)}
        className={` fixed bottom-8 p-4 bg-[black] text-[white] rounded-full flex justify-center items-center text-[1.5rem] 
           hover:text-[white] transition-allg duration-300 hover:text-[1.7rem] cursor-pointer`}
      >
        {counter < 100 ? counter : <GiHamburgerMenu />}
      </div>
    </>
  );
}
