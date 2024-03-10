// "use client";
// import React, { useEffect, useState } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// export default function DynamicHeader({ index }) {
//   const [textColor, setTextColor] = useState("#2f3537");
//   const [pin, setPin] = useState(false);

//   const navLinks = ["ABOUT", "WORK", "CONTACT"];

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     setTimeout(() => {
//       setPin(true);
//       setTextColor("white");
//     }, 3000);

//     navLinks.forEach((link, index) => {
//       gsap.fromTo(
//         `.link-${index}`,
//         {
//           y: 0,
//           y: 0,
//         },
//         {
//           x: "-300vw",
//           ease: "none",
//           scrollTrigger: {
//             trigger: `.link-${index}`,
//             start: "top top",
//             end: "2000 top",
//             scrub: 1.2,
//             pin: pin,
//           },
//         }
//       );
//     });
//   }, [pin]);

//   return (
//     <div className={`flex absolute top-[1rem] right-0 z-[${index}]`}>
//       {navLinks.map((link, index) => (
//         <div
//           key={index}
//           style={{ color: textColor }}
//           className={`link-${index} flex top-[1rem] justify-center items-center hover:text-[white]`}
//         >
//           <a
//             className="transition-all hover:text-[#f16621] duration-200 mx-[1rem] sm:mx-[2rem] md:mx-[5rem] cursor-pointer hover:underline text-lg sm:text-xl md:text-2xl font-semibold"
//             href="#"
//           >
//             {link}
//           </a>
//         </div>
//       ))}
//     </div>
//   );
// }
