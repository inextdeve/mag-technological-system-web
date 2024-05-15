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
    },
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
      extends: {
        colors: {
          "yellow-m": "#F29701",
          "green-m": '#00AE4E',
          "x-light-yellow-m": "#FFF4E2"
        }
      },
      dark: {
        colors: {
          background: "#010C20",
          "yellow-m": "#F29701",
          "green-m": '#00AE4E',
          "x-light-green-m": "#E5FFF1",
          "x-light-yellow-m": "#FFF4E2"

        },
      },
      // ... custom themes
    },
  })],
};
