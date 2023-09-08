import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kaisei: ["Kaisei Tokumin", "serif"],
      },
      colors: {
        "primary-color": "var(--primary-color)",
        "primary-hover-color": "var(--primary-hover-color)",
      },
    },
  },
  plugins: [],
};
export default config;
