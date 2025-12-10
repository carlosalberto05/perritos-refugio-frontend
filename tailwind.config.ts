import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      colors: {
        brand: {
          blue: {
            500: "#3b82f6",
            600: "#2563eb",
            900: "#1e3a8a",
          },
          cyan: {
            300: "#67e8f9",
            500: "#06b6d4",
            600: "#0891b2",
            900: "#164e63",
          },
          sky: {
            500: "#0ea5e9",
            900: "#0c4a6e",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
