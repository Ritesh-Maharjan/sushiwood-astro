import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import node from "@astrojs/node";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://sushiwood.ca",
  output: "static",
  adapter: node({ mode: "standalone" }),
  integrations: [react(), sitemap()],
  // Decap CMS (public/admin/config.yml) expects the OAuth endpoints on port 3000
  server: { port: 3000 },
});
