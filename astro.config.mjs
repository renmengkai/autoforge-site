import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://autoforge.dev",
  output: "static",
  server: {
    host: true
  }
});
