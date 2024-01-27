import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      playfair: ['Playfair Display', 'serif'],
      playfairItalic: ['Playfair Display, serif']
    }
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
