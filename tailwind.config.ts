import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#f7f7f8",
        surface: "#ffffff",
        raise: "#fafafb",
        brand: {
          50: "#eef2ff",
          100: "#e0e7ff",
          200: "#c7d2fe",
          400: "#818cf8",
          500: "#6366f1",
          600: "#4f46e5",
          700: "#4338ca",
          900: "#312e81",
        },
        ink: {
          900: "#0f1114",
          800: "#1f2126",
          700: "#3a3d43",
          500: "#6b6f76",
          400: "#9aa0a8",
          300: "#c3c7cd",
          200: "#e5e5e8",
          100: "#eeeef1",
          50: "#f5f5f7",
        },
        // Muted status tones — Ashby-style
        emerald: { bg: "#e7f4ec", fg: "#0f7a44", dot: "#10b981" },
        amber:   { bg: "#fdf3d6", fg: "#8a5a10", dot: "#f59e0b" },
        rose:    { bg: "#fde4e7", fg: "#a3213b", dot: "#f43f5e" },
        sky:     { bg: "#e4f0fb", fg: "#1e5fa0", dot: "#3b82f6" },
        violet:  { bg: "#ece9fe", fg: "#4f46e5", dot: "#8b5cf6" },
        slate:   { bg: "#eff0f2", fg: "#4b5563", dot: "#94a3b8" },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        // Enterprise SaaS scale — smaller than the last iteration
        "2xs": ["10.5px", { lineHeight: "14px", letterSpacing: "0.02em" }],
        xs:   ["11.5px", { lineHeight: "16px" }],
        sm:   ["13px",   { lineHeight: "18px" }],
        base: ["14px",   { lineHeight: "20px" }],
        lg:   ["16px",   { lineHeight: "22px" }],
        xl:   ["18px",   { lineHeight: "24px" }],
        "2xl":["22px",   { lineHeight: "28px", letterSpacing: "-0.01em" }],
        "3xl":["28px",   { lineHeight: "34px", letterSpacing: "-0.015em" }],
      },
      boxShadow: {
        card: "0 1px 2px rgba(15,17,20,0.04)",
        lift: "0 4px 12px -2px rgba(15,17,20,0.08), 0 2px 4px -1px rgba(15,17,20,0.04)",
        focus: "0 0 0 3px rgba(79,70,229,0.18)",
      },
      borderRadius: {
        sm: "4px",
        md: "6px",
        lg: "8px",
      },
    },
  },
  plugins: [],
};

export default config;
