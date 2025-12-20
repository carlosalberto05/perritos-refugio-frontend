import { defineConfig } from "vitest/config";
import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
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
    /*
    deps: {
      inline: ["jsdom", "parse5", "html-encoding-sniffer", "whatwg-url"],
    },
    */
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
