import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteImagemin from 'vite-plugin-imagemin';
// https://vite.dev/config/
export default defineConfig({
  build: {
    minify: "terser", // Minify using Terser (for JavaScript)
    cssCodeSplit: true, // Split CSS into separate files
  },
  plugins: [react(),viteImagemin({})],
});
