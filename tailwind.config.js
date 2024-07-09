/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Roboto Mono", "monospace"],
      hand: ["Gochi Hand", "Roboto Mono", "monospace"],
    },
    extend: {
      height: {
        screen: "100dvh",
      },
      dropShadow: {
        custom: "2px 8px 9px #898989",
      },
    },
  },
  plugins: [],
};
