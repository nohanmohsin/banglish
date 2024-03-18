/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      red: "#FF6F6F",
      white: "#ffffff",
      green: "#80E897",
      black: "#000000",
      gray: "#606060",
    },
    extend: {
      fontSize: {
        clamp: "clamp(3.125rem, 23.3vw - 7.1rem, 7.5rem)",
      },
    },
    screens: {
      "new-sm": { raw: "(orientation: portrait) and (max-width: 640px)" },
    },
  },
  plugins: [],
};
