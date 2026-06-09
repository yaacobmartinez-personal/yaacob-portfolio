import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans:    ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      colors: {
        // Uses RGB channel variables so opacity modifiers (bg-bg/85, text-ink/80) work
        bg: {
          DEFAULT: "rgb(var(--color-bg-rgb) / <alpha-value>)",
          2:       "rgb(var(--color-bg-2-rgb) / <alpha-value>)",
          3:       "rgb(var(--color-bg-3-rgb) / <alpha-value>)",
        },
        border: {
          DEFAULT: "rgb(var(--color-border-rgb) / <alpha-value>)",
          light:   "rgb(var(--color-border-light-rgb) / <alpha-value>)",
        },
        ink: {
          DEFAULT: "rgb(var(--color-ink-rgb) / <alpha-value>)",
          2:       "rgb(var(--color-ink-2-rgb) / <alpha-value>)",
          3:       "rgb(var(--color-ink-3-rgb) / <alpha-value>)",
          4:       "rgb(var(--color-ink-4-rgb) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "rgb(var(--color-accent-rgb) / <alpha-value>)",
          dark:    "rgb(var(--color-accent-dark-rgb) / <alpha-value>)",
        },
        available: "rgb(var(--color-available-rgb) / <alpha-value>)",
      },
      fontSize: {
        hero:    ["clamp(2.75rem,6.5vw,6rem)",   { lineHeight: "1.05", letterSpacing: "-0.025em" }],
        display: ["clamp(1.75rem,3.5vw,3rem)",   { lineHeight: "1.1",  letterSpacing: "-0.02em"  }],
        xl2:     ["clamp(1.1rem,2vw,1.5rem)",    { lineHeight: "1.35"  }],
      },
      maxWidth: { "8xl": "1320px" },
      borderRadius: { "2xl": "1rem", "3xl": "1.25rem", "4xl": "1.75rem" },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        ".text-balance": { "text-wrap": "balance" },
      });
    }),
  ],
};
export default config;
