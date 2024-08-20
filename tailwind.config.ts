import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
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
          "50": "#f4f3f6",
          "100": "#f1eff4",
          "200": "#e8e5ed",
          "300": "#dfdce7",
          "400": "#d8d3e2",
          "500": "#d0cbdb",
          "600": "#c6bfd3",
          "700": "#b3aac5",
          "800": "#867d97",
          "900": "#7b738b",
          "950": "#5d566a",
          "975": "#221d2c",
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
    },
  },
  plugins: [],
};
export default config;
