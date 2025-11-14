import type { Config } from "tailwindcss";

const config: Config = {
  // Archivos donde Tailwind buscará las clases
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  // Configuración del modo oscuro (usa la clase "dark" en el HTML)
  darkMode: "class",

  theme: {
    extend: {
      // Fuentes personalizadas
      fontFamily: {
        sans: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },

      // Colores personalizados de Figma
      colors: {
        // Colores del botón de Figma (degradado azul-turquesa)
        primary: {
          50: "#e0f7ff",
          100: "#b3edff",
          200: "#80e3ff",
          300: "#4dd9ff",
          400: "#26d0ff",
          500: "#00c7ff", // Azul turquesa claro (botón)
          600: "#00a3d9",
          700: "#007fb3",
          800: "#005b8c",
          900: "#003766",
        },
        // Azul más oscuro para el degradado
        "primary-dark": {
          500: "#1e90ff", // Azul más intenso
          600: "#1873cc",
        },
      },

      // Tamaños de fuente personalizados (opcional)
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
      },

      // Border radius personalizado (como en Figma)
      borderRadius: {
        lg: "0.625rem", // 10px
        xl: "1rem", // 16px - para botones de Figma
      },
    },
  },

  plugins: [],
};

export default config;
