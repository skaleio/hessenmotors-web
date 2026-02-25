import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    proxy: {
      "/api/n8n": {
        target: "https://n8n-n8n.obmrlq.easypanel.host",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/n8n/, ""),
        secure: true,
      },
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    sourcemap: true, // PageSpeed: source maps para JS propio de gran tamaño
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("react-dom") || id.includes("react/")) return "react";
            if (id.includes("framer-motion")) return "framer-motion";
            if (id.includes("react-router")) return "router";
            if (id.includes("@radix-ui")) return "radix";
            if (id.includes("lucide-react")) return "lucide";
            if (id.includes("recharts")) return "recharts";
            return "vendor";
          }
        },
      },
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
