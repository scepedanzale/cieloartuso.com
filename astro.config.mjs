// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://www.cieloartuso.com",
  trailingSlash: "never",
  integrations: [
    sitemap({
      // Pagine non indicizzabili (noindex): fuori dalla sitemap
      filter: (page) => !page.startsWith("https://www.cieloartuso.com/ciao"),
    }),
  ],
});