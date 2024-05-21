const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 13 column grid
        13: "repeat(13, minmax(0, 1fr))",
      },
      keyframes: {
        fadein: {
          "0%": { opacity: 0, transform: "translateY(-10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        fadein: "fadein 0.3s ease-out forwards",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        extends: {
          colors: {
            "yellow-m": "#F29701",
            "green-m": "#00AE4E",
            "x-light-yellow-m": "#FFF4E2",
          },
        },
        dark: {
          colors: {
            background: "#010C20",
            "yellow-m": "#F29701",
            "green-m": "#00AE4E",
            "x-light-green-m": "#E5FFF1",
            "x-light-yellow-m": "#FFF4E2",
          },
        },
        light: {
          colors: {
            background: "#f0f2f5",
          },
        },
        // ... custom themes
      },
    }),
  ],
};
