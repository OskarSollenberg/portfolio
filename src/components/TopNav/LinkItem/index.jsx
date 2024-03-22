import Link from "next/link";

import { usePathname } from "next/navigation";

export default function index({ link, title, activeLink, setActiveLink }) {
  const pathname = usePathname();
  return (
    <div>
      <Link
        href={link}
        className={`border-r-[2px] active:scale-[90%] border-[black] px-[6px] cursor-pointer transition-all duration-100 hover:-translate-y-[2px]
		${
      link === pathname
        ? "text-[#f3691f] group-hover:border-[#f3691f]"
        : "text-[#fefce1]"
    }`}
      >
        {title}
      </Link>
    </div>
  );
}
