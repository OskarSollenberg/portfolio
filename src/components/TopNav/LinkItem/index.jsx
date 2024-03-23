import Link from "next/link";

import { usePathname } from "next/navigation";

export default function index({ link, title, activeLink, setActiveLink }) {
  const pathname = usePathname();
  return (
    <div>
      <Link
        href={link}
        className={`border-r-[2px] active:scale-[90%]  px-[6px] cursor-pointer transition-all duration-100 hover-bg-[#f3691f] hover:text-[#f3691f] 
		${
      link === pathname
        ? "text-[#f3691f]  border-[black] line-through "
        : "text-[black] opacity-100 border-none underline-none "
    }`}
      >
        {title}
      </Link>
    </div>
  );
}
