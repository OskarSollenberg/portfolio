import Link from "next/link";

export default function index({ link, title, activeLink, setActiveLink }) {
  return (
    <div>
      <Link
        href={link}
        onClick={() => setActiveLink(link)}
        className={`border-r-[2px] active:scale-[90%] border-[black] px-[6px] cursor-pointer transition-all duration-100 hover:-translate-y-[2px]
		${
      activeLink === link
        ? "text-[#f3691f] group-hover:border-[#f3691f]"
        : "text-[#fefce1]"
    }`}
      >
        {title}
      </Link>
    </div>
  );
}
