import { FaGithub } from "react-icons/fa";
import { BiLogoNetlify } from "react-icons/bi";
import ConnectWithMe from "../../../../components/ConnectWithMe";
import SiteNav from "@/src/components/SiteNav";

import { projects } from "@/src/data/projects";

export default function Project() {
  return (
    <section>
      <SiteNav isHomepage={false} />

      <div className="grid lg:grid-cols-2 w-screen h-screen text-center lg:text-start">
        <div className="bg-white w-full h-full flex justify-center items-center p-10 ">
          <div className="p-4 md:p-8 flex flex-col gap-[4rem]">
            <div>
              <h2 className="text-2xl font-bold md:text-4xl lg:text-5xl">
                Hinder
              </h2>
              <p className="mt-4 text-gray-600 text-base lg:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                animi, saepe exercitationem laudantium, perspiciatis.
              </p>
              <p className="mt-4 text-gray-600 text-base lg:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                animi, saepe exercitationem laudantium, perspiciatis voluptatum
                hic asperiores voluptate optio totam corrupti ullam quas aperiam
                repellendus nihil odit cum magnam libero?
              </p>
            </div>
            <div className="flex  justify-center lg:justify-start items-start gap-[8rem] ">
              <div className="flex group flex-col gap-2 justify-center items-center">
                <ConnectWithMe
                  color={"#000"}
                  icon={<FaGithub />}
                  size={50}
                  type={"github"}
                />
                <p className="group-hover:opacity-0 text-[12px]">CODE</p>
              </div>
              <div className="flex group flex-col gap-2 justify-center items-center">
                <ConnectWithMe
                  color={"#000"}
                  icon={<BiLogoNetlify />}
                  size={50}
                  type={"netlify"}
                />
                <p className="group-hover:opacity-0 text-[12px]">WEBSITE</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-red-200 mb-[10rem] lg:mb-0 w-full h-full flex justify-center items-center p-10">
          <div>
            <video
              src="https://tecdn.b-cdn.net/img/video/forest.mp4"
              type="video/mp4"
              loop
              class="clip w-full"
            ></video>
          </div>
        </div>
      </div>
    </section>
  );
}
