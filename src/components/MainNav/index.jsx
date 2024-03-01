export default function MainNav() {
  const links = ["About", "Work", "Education"];

  return (
    <>
      <div className="group bg-transparent-black hover:bg-[black] p-2 fixed bottom-4 hover:bottom-8 hover:p-6 min-w-[3rem] min-h-[3rem] delay-100 rounded-md flex justify-center items-center transition-all duration-500 ease-in-out">
        <div className="absolute text-[1rem] text-[white] group-hover:hidden">
          M
        </div>
        <div className="gap-10 h-full flex max-w-[1rem] opacity-0 group-hover:opacity-100 invisible group-hover:visible group-hover:max-w-[20rem] transition-all duration-500 ease-in-out transition-visibility ">
          {links.map((link) => (
            <a
              key={link}
              style={{
                transition:
                  "opacity 0.3s ease-in-out 0.3s, transform 0.15s ease-in-out, color 0.15s ease-in-out",
              }}
              className={`text-[white] text-md hover:text-[#E43B13] opacity-0 group-hover:opacity-100 invisible group-hover:visible cursor-pointer hover:scale-110`}
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
