import { FaGithub } from "react-icons/fa";
import { BiLogoNetlify } from "react-icons/bi";
import StickyLink from "@/src/components/StickyLink";

export default function SocialMedias({ github, netlify }) {
  return (
    <div className="flex justify-center lg:justify-start lg:ml-10 gap-[8rem] mb-[15rem] lg:mb-0 mt-[2rem] ">
      <a
        target="_blank"
        href={github}
        className="flex group flex-col gap-4 justify-center items-center ml-[3rem] sm:ml-0"
      >
        <StickyLink
          color={"#fff"}
          icon={<FaGithub />}
          size={50}
          type={"github"}
        />
        <p className="group-hover:opacity-0 text-[12px]">VIEW CODE</p>
      </a>
      <a
        target="_blank"
        href={netlify}
        className="flex group flex-col gap-4 justify-center items-center mr-[3rem] sm:mr-0"
      >
        <StickyLink
          color={"#fff"}
          icon={<BiLogoNetlify />}
          size={50}
          type={"netlify"}
        />
        <p className="group-hover:opacity-0 text-[12px] ">
          {netlify === "#" ? "Website is under repair" : "LAUNCH WEBSITE"}
        </p>
      </a>
    </div>
  );
}
