import React from "react";
import { RiArrowGoBackFill } from "react-icons/ri";
import Link from "next/link";
export default function ReturnBtn() {
  return (
    <div>
      <Link href="/projects">
        <div
          className={`fixed flex items-center rounded-lg justify-start gap-[1rem] -translate-x-1/2 left-[50%] bottom-[2rem] text-[#FDF9EF] text-sm transition-all duration-100 ease-in-out `}
        >
          <div
            className={`w-16 h-16 min-w-16 min-h-16 cursor-pointer flex items-center justify-content-center rounded-full justify-center transition-all duration-100 ease-in-out text-[white] shadow-2xl bg-[#00000085] hover:bg-black hover:scale-105 active:scale-100`}
          >
            <RiArrowGoBackFill />
          </div>
        </div>
      </Link>
    </div>
  );
}
