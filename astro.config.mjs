import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import node from "@astrojs/node";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://sushiwood.ca",
  output: "static",
  adapter: node({ mode: "standalone" }),
  integrations: [
    react(),
    sitemap({
      filter: (page) =>
        // /fernie canonicalizes to the root; auth-callback is a CMS utility page
        !page.includes("/fernie") && !page.includes("/auth-callback"),
    }),
  ],
  build: {
    // Inline all CSS into the HTML — removes render-blocking stylesheet requests
    inlineStylesheets: "always",
  },
  // Decap CMS (public/admin/config.yml) expects the OAuth endpoints on port 3000
  server: { port: 3000 },
});
