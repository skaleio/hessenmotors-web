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
    emptyOutDir: true, // Limpia el directorio antes de cada build
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: undefined,
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
