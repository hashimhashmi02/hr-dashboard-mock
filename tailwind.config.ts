import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f2fbe9",
          100: "#e2f6cd",
          400: "#8fd41e",
          500: "#76bd0d",
          600: "#5a9409",
          700: "#456f0d",
        },
        ink: {
          50: "#f7f8f6",
          100: "#eef0ec",
          200: "#dde1d8",
          400: "#8a9285",
          600: "#4c5347",
          800: "#252a22",
          900: "#171a15",
        },
      },
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
