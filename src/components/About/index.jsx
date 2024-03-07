import React from "react";

function page({ index }) {
  return (
    <div className={`h-screen w-screen text-[white] text-center z-[${index}]`}>
      ABOUT
    </div>
  );
}

export default page;
