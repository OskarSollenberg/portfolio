export default function HamburgerMenu({ isActive, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`w-16 h-16 min-w-16 min-h-16 cursor-pointer flex items-center justify-content-center rounded-full bg-[#f3691f]`}
    >
      <div
        className={`w-full flex flex-col justify-center items-center ${
          isActive ? "-space-y-[1.5px] " : "space-y-2"
        }`}
      >
        <div
          className={`h-0.5 w-[2rem] bg-[#FEFCE1] mx-auto relative transition-transform duration-300 ${
            isActive ? "rotate-45 " : ""
          }`}
        ></div>
        <div
          className={`h-0.5 w-[2rem] bg-[#FEFCE1] mx-auto relative transition-transform duration-300 ${
            isActive ? "-rotate-45" : ""
          }`}
        ></div>
      </div>
    </div>
  );
}
