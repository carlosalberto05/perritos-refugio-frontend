import { defineConfig } from "vitest/config";
import { fileURLToPath } from "node:url";

export default defineConfig(async () => {
  // Importación dinámica para resolver conflictos de tipado/módulos
  const reactPlugin = (await import("@vitejs/plugin-react")).default;

  return {
    plugins: [reactPlugin()],

    test: {
      environment: "jsdom",
      globals: true,
      setupFiles: ["./vitest.setup.ts"],
      exclude: ["node_modules", "dist", ".next", "out", "playwright", "e2e"],
      coverage: {
        provider: "v8",
        reporter: ["text", "json", "html"],
        include: ["src/**/*.{ts,tsx}"],
      },
      // === SOLUCIÓN CLAVE PARA ERR_REQUIRE_ESM ===
      deps: {
        inline: ["jsdom", "parse5", "html-encoding-sniffer", "whatwg-url"],
      },
    },

    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  };
});
