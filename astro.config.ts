import { defineConfig } from "astro/config";

export default defineConfig({
  site: "mohd-faisal-khan.github.io",
  server: {
    allowedHosts: true
  },
  devToolbar: {
    enabled: false
  }
});
