import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";
import path from "node:path";

// Convierte la URL del archivo actual a una ruta de sistema de archivos
const dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  // Plugins: Necesario para que Vitest entienda y compile JSX/TSX de React
  plugins: [react()],

  test: {
    // Entorno: 'jsdom' es crucial para simular el DOM de navegador,
    // necesario para probar componentes React.
    environment: "jsdom",

    // Configuración: Archivo de setup para jest-dom y otras inicializaciones
    globals: true,
    setupFiles: ["./vitest.setup.ts"],

    // Ignora: Rutas que Vitest debe omitir (archivos de compilación y caché de Next.js)
    exclude: ["node_modules", "dist", ".next", "out", "playwright", "e2e"],

    // Cobertura: Usando v8 como el estándar moderno y rápido
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
      // Esto asegura que solo se cuente la cobertura de tu código fuente
      include: ["src/**/*.{ts,tsx}"],
    },
  },

  resolve: {
    // Aliases: ¡CRUCIAL! Esto hace que las importaciones como
    // `import Componente from '@/components/Componente'` funcionen en Vitest,
    // ya que coinciden con la configuración por defecto de Next.js/tsconfig.
    alias: {
      "@": path.resolve(dirname, "./src"),
    },
  },
});
