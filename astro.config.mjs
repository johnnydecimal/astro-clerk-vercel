// @ts-check
import { defineConfig } from "astro/config";

import clerk from "@clerk/astro";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: "https://vercel.johnnydecimal.com",
  integrations: [clerk()],
  adapter: vercel({
    // edgeMiddleware: true,
  }),
  output: "hybrid",
});
