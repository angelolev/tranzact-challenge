import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  test: {
    setupFiles: "./tests/setup.js",
    environment: "jsdom",
    coverage: {
      reporter: ["text", "json", "html"],
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
