import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        gray: {
          "50": "#F4F3F5",
          "100": "#F0F0F3",
          "200": "#E7E5EC",
          "300": "#DFDCE5",
          "400": "#D7D4DF",
          "500": "#cfccd8",
          "600": "#c4c0cf",
          "700": "#b1adbc",
          "800": "#847f8e",
          "900": "#797584",
          "950": "#5c5866",
          "975": "#211E29",
        },
        orange: {
          "50": "#fff2f1",
          "100": "#ffe2df",
          "200": "#ffcac5",
          "300": "#ffa59d",
          "400": "#ff7265",
          "500": "#ff4534",
          "600": "#ee3625",
          "700": "#c71e0e",
          "800": "#a51c0f",
          "900": "#881e14",
          "950": "#4a0b05",
        },
      },
      keyframes: {
        spin: {
          to: {
            transform: "rotate(1turn)",
          },
        },
      },
      animation: {
        spin: "spin 1s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
