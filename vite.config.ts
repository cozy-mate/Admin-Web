import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
// import withReactRouter from "vite-plugin-next-react-router";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    // withReactRouter({
    //   pageDir: "src/pages",
    //   extensions: ["js", "jsx", "ts", "tsx"],
    //   layout: "_layout",
    // }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@app": path.resolve(__dirname, "src/app"),
      "@features": path.resolve(__dirname, "src/features"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@shared": path.resolve(__dirname, "src/shared"),
    },
  },
});
