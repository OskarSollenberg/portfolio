import menuIcon from "@/public/assets/hamburger.png";
import Image from "next/image";

export default function MainNav() {
  const links = ["About", "Work", "Education"];

  return (
    <>
      <div className="group bg-[#D0521A] hover:bg-transparent-black fixed bottom-4 hover:p-8 min-w-[5rem] min-h-[5rem] delay-100 rounded-full flex justify-center items-center transition-all duration-500 ease-in-out">
        <div className="absolute text-[2rem] text-[#FDF9EF] group-hover:hidden">
          <Image className="full max-w-14" src={menuIcon} alt="" />
        </div>
        <div className="gap-10 relative flex max-w-[1rem] opacity-0 group-hover:opacity-100 invisible group-hover:visible group-hover:max-w-[20rem] transition-all duration-500 ease-in-out transition-visibility ">
          {links.map((link) => (
            <a
              key={link}
              style={{
                transition:
                  "opacity 0.3s ease-in-out 0.3s, transform 0.15s ease-in-out, color 0.15s ease-in-out",
              }}
              className={`text-[#D0521A] text-lg group-hover:text-white opacity-0 group-hover:opacity-100 invisible group-hover:visible cursor-pointer hover:scale-110 hover:text-[#FDF9EF]`}
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
