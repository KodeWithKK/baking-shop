import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

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
        brand: {
          "50": "#fff2f1",
          "100": "#ffe5e4",
          "200": "#fecdce",
          "300": "#fca5a6",
          "400": "#fa7277",
          "500": "#f3404b",
          "600": "#e22b3f",
          "700": "#bd132a",
          "800": "#9e132b",
          "900": "#87142a",
          "950": "#4b0611",
        },
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
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".h-screen": {
          height: "100dvh",
          "@supports not (height: 100dvh)": {
            height: "100vh",
          },
        },
        ".max-h-screen": {
          maxHeight: "100dvh",
          "@supports not (max-height: 100dvh)": {
            maxHeight: "100vh",
          },
        },
        ".min-h-screen": {
          minHeight: "100dvh",
          "@supports not (min-height: 100dvh)": {
            minHeight: "100vh",
          },
        },
        ".w-screen": {
          width: "100dvw",
          "@supports not (width: 100dvw)": {
            width: "100vw",
          },
        },
        ".max-w-screen": {
          maxWidth: "100dvw",
          "@supports not (max-width: 100dvw)": {
            maxWidth: "100vw",
          },
        },
        ".min-w-screen": {
          minWidth: "100dvw",
          "@supports not (min-width: 100dvw)": {
            minWidth: "100vw",
          },
        },
      });
    }),
    require("tailwindcss-animated"),
  ],
};
export default config;
