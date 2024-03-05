import React, { useState } from "react";

export default function SocialMedia() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group socialMediaMenu absolute top-[50%] transform -translate-y-[50%] pt-[10rem] w-20 bg-transparent-black rounded-l-md h-20 transition-all duration-200 left-[99%] ${
        isHovered
          ? "transition-transform transform -translate-x-10"
          : "transform translate-x-0"
      } `}
    >
      <div className=" absolute flex justify-center items-center right-[100%] top-[25%] w-10 rounded-l-lg h-[50%] bg-transparent-black">
        <div className="group-hover:hidden text-[black]">
          / / /<br />
          / / /<br />
          / / /<br />
        </div>
        <div className="hidden group-hover:block">
          \ \ \<br />
          \ \ \<br />
          \ \ \<br />
        </div>
      </div>
    </div>
  );
}
