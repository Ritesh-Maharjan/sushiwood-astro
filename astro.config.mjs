import { loadEnv } from "vite";
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import node from "@astrojs/node";
import sitemap from "@astrojs/sitemap";

// astro.config.mjs runs outside Vite's pipeline, so .env vars need loadEnv here
// instead of import.meta.env (which is what the rest of the app uses)
const { PUBLIC_SITE_URL } = loadEnv(process.env.NODE_ENV ?? "production", process.cwd(), "");

// https://astro.build/config
export default defineConfig({
  site: PUBLIC_SITE_URL,
  output: "static",
  adapter: node({ mode: "standalone" }),
  integrations: [
    react(),
    sitemap({
      // /fernie canonicalizes to the root
      filter: (page) => !page.includes("/fernie"),
    }),
  ],
  build: {
    // Inline all CSS into the HTML — removes render-blocking stylesheet requests
    inlineStylesheets: "always",
  },
  server: { port: 3000 },
});
