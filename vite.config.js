import { defineConfig } from "vite";
import testing from "vite-plugin-testing";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), testing()],
});
