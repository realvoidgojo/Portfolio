import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ["framer-motion"], // Avoid optimizing heavy libraries at dev time
  },
  build: {
    sourcemap: process.env.NODE_ENV !== "production", // Only in dev
    chunkSizeWarningLimit: 1600, // Increase warning limit
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor chunks for better caching
          "react-vendor": ["react", "react-dom", "react-router-dom"],
          "animation-vendor": ["framer-motion"],
        },
      },
    },
    target: "esnext", // Modern browsers only
  },
  server: {
    open: true,
    hmr: {
      overlay: false, // Disable hmr overlay for better performance
    },
  },
});
