import { fileURLToPath } from "node:url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const source = fileURLToPath(new URL("./src", import.meta.url));

export default defineConfig({
  root: source,
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: { "@": source },
  },
  server: {
    proxy: { "/api": "http://localhost:3000" },
  },
  build: {
    outDir: "../dist-vite",
    emptyOutDir: true,
  },
});
