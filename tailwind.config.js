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
      gray: "#F3F3F3",
      "gray-500": "#606060",
    },
    extend: {
      fontSize: {
        clamp: "clamp(3.125rem, 23.3vw - 7.1rem, 7.5rem)",
      },
      typography: {
        DEFAULT: {
          css: {
            "max-width": "none",
          },
        },
      },
    },
    screens: {
      "new-sm": { raw: "(orientation: portrait) and (max-width: 640px)" },
      "bigger-sm": { raw: "(orientation: landscape) and (min-width: 640px)" },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
