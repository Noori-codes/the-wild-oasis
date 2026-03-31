// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

export default defineConfig({
  plugins: [react(), eslint],
  resolve: {
    // alias: {
    //   // allow imports like "src/foo" from anywhere in project
    //   src: require("path").resolve(__dirname, "src"),
    // },
  },
});
