// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
// import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";
import vercel from "@astrojs/vercel";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [mdx(), sitemap(), icon()],
  site: "https://shermanecho.vercel.app",

  // {
  //   webAnalytics: {
  //     enabled: true, // set to false when using @vercel/analytics@1.4.0
  //   },
  // }
  adapter: vercel(),

  vite: {
    plugins: [tailwindcss()]
  }
});