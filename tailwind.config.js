/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "transparent-black": "rgba(0, 0, 0, 0.8)",
    },
  },
  variants: {
    extend: {
      opacity: ["group-hover"],
    },
  },
  plugins: [],
};
