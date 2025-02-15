// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [mdx(), sitemap(), tailwind(), icon()],
  site: "https://shermanecho.vercel.app",
  adapter: vercel(),
  // {
  //   webAnalytics: {
  //     enabled: true, // set to false when using @vercel/analytics@1.4.0
  //   },
  // }
});
