module.exports = {
  plugins: [
    "prettier-plugin-style-order",
    "prettier-plugin-organize-imports",
    "prettier-plugin-jsdoc", // MUST come second last.
    "prettier-plugin-tailwindcss", // MUST come last.
  ],
  tailwindFunctions: ["apply", "tw"],
  // Add rules below...
  printWidth: 80,
  semi: true,
  singleQuote: true,
  trailingComma: "all",
};
