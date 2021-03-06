/*
 * @Author: huhanchi 
 * @Date: 2022-03-09 22:50:50 
 * @Last Modified by:   huhanchi 
 * @Last Modified time: 2022-03-09 22:50:50 
 */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  // base: "./",
  server: {
    open: true,
    proxy: {
      "/api": {
        target: "http://localhost:8999/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
    },
  },
  build: {
    outDir: "./docs",
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {},
      },
    },
  },
});
