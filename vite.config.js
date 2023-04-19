import atomico from "@atomico/vite";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    manifest: true,
    target: "esnext",
    outDir: "./src/static/dist",
    rollupOptions: {
      input: "/src/components/index.js",
    },
  },
  plugins: [
    ...atomico({
      cssLiterals: {
        minify: true,
        postcss: true,
      },
    }),
  ],
});
