/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fefce1",
      },
      animation: {
        slide: "slide 4s forwards",
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      backgroundImage: (theme) => ({
        aboutImg_lg: "url('/medias/about-lg.webp')",
        aboutImg_sm: "url('/medias/about-sm.jpg')",
        aboutImg_light: "url('/medias/about-light.webp')",
      }),
    },
  },
  variants: {
    extend: {
      opacity: ["group-hover"],
    },
  },
  plugins: [],
};
