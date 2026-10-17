import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#141414",
        black: "#090909",
        ivory: "#F7F5F0",
        warm: "#F0EDE7",
        accent: "#8F7751",
        gold: "#BDA370",
        "accent-light": "#EAD9B9",
        charcoal: "#262B2E",
        mist: "#E8E4DC",
        slate: "#6F6B63",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        body: ["var(--font-manrope)", "Arial", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
        logo: ["var(--font-oswald)", "Arial Narrow", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.25em",
      },
    },
  },
  plugins: [],
};
export default config;
