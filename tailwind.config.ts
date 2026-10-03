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
        alabaster: "#FAF8F5", // Radiant warm white base
        ivory: {
          DEFAULT: "#FFFFFF",
          warm: "#FAF8F5",
          subtle: "#F4EFEA",
          border: "#E8E0D5",
        },
        charcoal: {
          DEFAULT: "#1C1817", // Primary high-contrast text
          deep: "#0F0B0C",
          muted: "#5C5250", // Secondary metadata
          light: "#827673",
        },
        burgundy: {
          DEFAULT: "#3E1522", // Royal heritage wine
          deep: "#250912",
          light: "#5A2033",
          subtle: "#F7EDF0",
          card: "rgba(62, 21, 34, 0.04)",
        },
        gold: {
          DEFAULT: "#B88E3E", // Rich royal antique wedding gold
          warm: "#C59B4B",
          light: "#E2C889",
          deep: "#8F6B25",
          subtle: "rgba(184, 142, 62, 0.16)",
          border: "#D8BC7E",
        },
        rosegold: {
          DEFAULT: "#9E5460", // Restrained luxury metallic
          muted: "#D8B4BA",
          subtle: "rgba(158, 84, 96, 0.12)",
        },
        champagne: {
          DEFAULT: "#8C6843", // Warm champagne bronze
          dark: "#6E4F2E",
          light: "#EADBC8",
          subtle: "#F9F4EE",
          border: "#D6C4AE",
        },
        taupe: {
          DEFAULT: "#7A6E6A",
          muted: "#A89D99",
          light: "#E5DFDB",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Cormorant Garamond", "serif"],
        display: ["var(--font-display)", "Cinzel", "serif"],
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "sans-serif"],
        script: ["var(--font-script)", "Pinyon Script", "cursive"],
      },
    },
  },
  plugins: [],
};
export default config;
