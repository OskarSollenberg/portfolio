import React from "react";

export default function NavFooter() {
  return (
    <div className=" hidden sm:flex mt-10 justify-between w-full text-xs text-[#F3691F] gap-10">
      <a
        href="https://www.instagram.com/oskar_sollenberg/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Instagram
      </a>
      <a
        href="https://www.facebook.com/oskar.sollenberg/"
        target="_blank"
        rel="noopener noreferrer"
      >
        FaceBook
      </a>
      <a
        href="https://www.linkedin.com/in/oskar-sollenberg-12ab0b24b/"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
    </div>
  );
}
