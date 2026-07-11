import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  output: "static",
  adapter: node({ mode: "standalone" }),
  integrations: [react()],
  // Decap CMS (public/admin/config.yml) expects the OAuth endpoints on port 3000
  server: { port: 3000 },
});
