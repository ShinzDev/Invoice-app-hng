import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // Enables toggling dark mode manually or via system
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-spartan)", "sans-serif"],
      },
      colors: {
        // Purples
        primary: {
          DEFAULT: "#7C5DFA",
          hover: "#9277FF",
        },
        // Dark theme backgrounds and surfaces
        dark: {
          DEFAULT: "#141625", // Main background
          surface: "#1E2139", // Card/Form backgrounds
          hover: "#252945",   // Hover states on dark surface
        },
        // Light theme backgrounds and text elements
        light: {
          DEFAULT: "#F8F8FB",
          surface: "#FFFFFF",
        },
        // Grays/Blues for text and borders
        slate: {
          300: "#DFE3FA",
          400: "#888EB0",
          500: "#7E88C3",
        },
        // Pure blacks/whites
        black: "#0C0E16",
        // Destructive actions
        destructive: {
          DEFAULT: "#EC5757",
          hover: "#FF9797",
        },
      },
      fontSize: {
        // Mapped exactly to your Typography spec to ensure components stay neat
        'heading-l': ['36px', { lineHeight: '33px', letterSpacing: '-1px', fontWeight: '700' }],
        'heading-m': ['24px', { lineHeight: '22px', letterSpacing: '-0.75px', fontWeight: '700' }],
        'heading-s': ['15px', { lineHeight: '24px', letterSpacing: '-0.25px', fontWeight: '700' }],
        'heading-s-alt': ['15px', { lineHeight: '15px', letterSpacing: '-0.25px', fontWeight: '700' }],
        'body': ['13px', { lineHeight: '18px', letterSpacing: '-0.1px', fontWeight: '500' }],
        'body-alt': ['13px', { lineHeight: '15px', letterSpacing: '-0.25px', fontWeight: '500' }],
      },
    },
  },
  plugins: [],
};

export default config;