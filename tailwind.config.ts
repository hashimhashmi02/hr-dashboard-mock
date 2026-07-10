import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#f5f4f1",
        surface: "#ffffff",
        raise: "#fbfaf8",
        iris: {
          DEFAULT: "#5b4ce0",
          ink: "#4636c9",
          soft: "#ece9fd",
          line: "#d9d3fb",
        },
        ink: {
          900: "#1c1723",
          700: "#3a3444",
          500: "#6b6577",
          400: "#938d9f",
          200: "#e6e3ea",
          100: "#efedf1",
        },
        sage: { bg: "#e8f0ea", fg: "#3f7357" },
        amber: { bg: "#f7edda", fg: "#976a1a" },
        rose: { bg: "#f6e7ec", fg: "#9c4560" },
        slate: { bg: "#eceef1", fg: "#566072" },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(28,23,35,0.04), 0 1px 3px rgba(28,23,35,0.03)",
        lift: "0 4px 16px -4px rgba(28,23,35,0.10), 0 2px 6px -2px rgba(28,23,35,0.06)",
      },
      letterSpacing: {
        label: "0.12em",
      },
    },
  },
  plugins: [],
};

export default config;
