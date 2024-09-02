import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#2F2343",
        blueBg:"#D5E4FF",
        primary: {
          pink: "#E3ABB6",
          blue: "#769CE4",
          oldRed: "#6F2D39",
        },
      },
      zIndex: {
        100: "100",
      },
    },
  },
  plugins: [nextui()],
};
