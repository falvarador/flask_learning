import atomico from "@atomico/vite";
import { defineConfig } from "vite";

export default defineConfig({
  base: process.env.NODE_ENV === "production" ? "/static/" : "/",
  build: {
    manifest: true,
    target: "esnext",
    outDir: "../src/static/dist",
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
