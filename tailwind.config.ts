import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: "#0B0909",
        burgundy: {
          DEFAULT: "#2A0E16",
          deep: "#1A080D",
          light: "#3D1420",
          card: "rgba(42, 14, 22, 0.4)",
        },
        rosegold: {
          DEFAULT: "#B76E79",
          muted: "rgba(183, 110, 121, 0.35)",
        },
        champagne: {
          DEFAULT: "#E8C7A8",
          subtle: "#F2DEC9",
          muted: "rgba(232, 199, 168, 0.15)",
        },
        ivory: {
          DEFAULT: "#F5EFE7",
          muted: "#D8CEBE",
        },
        taupe: "#9C8D88",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Cinzel", "serif"],
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
