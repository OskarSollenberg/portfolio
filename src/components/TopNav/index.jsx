import { navItems } from "@/src/data/navItems";
import LinkItem from "./LinkItem";

export default function TopNav() {
  return (
    <>
      <div
        style={{
          fontFamily: "Montreal",
        }}
        className={`text-sm justify-end transition-all fixed right-0 top-0 flex gap-2 p-[6px] duration-300 ease-in-out scale-[80%] origin-top-right w-auto hover:scale-[110%] group cursor-pointer z-[3000]`}
      >
        <div
          className={`p-[1rem] px-[1.3rem] flex items-center justify-center origin-left gap-10 transition-all duration-200 hover:opacity-100`}
        >
          {navItems.map((navItem, index) => {
            return (
              <LinkItem title={navItem.title} key={index} link={navItem.href} />
            );
          })}
        </div>
      </div>
    </>
  );
}
