/** @type {import('tailwindcss').Config} */
//eslint-disable-next-line
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Roboto Mono, monospace",
    },
    extend: {
      colors: {
        fontSize: {
          huge: ["8rem ", { lineHeight: "1" }],
        },
        height: {
          screen: "100dvh",
        },
      },
    },
  },
  plugins: [],
};
