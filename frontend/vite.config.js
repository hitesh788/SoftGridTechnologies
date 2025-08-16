import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    historyApiFallback: true,
  },
  base: '/', // Add this to set asset paths for root-level hosting
});