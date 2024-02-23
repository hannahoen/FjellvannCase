import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
          "case-yellow": "#FFD600",
          "case-white": "#FFFFFF",
          "case-black": "#000000",
          "case-gray": "#E9E9E9",
      }
    }, 
  },
  plugins: [],
};
export default config;
