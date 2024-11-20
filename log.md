- npm create astro@latest, choose all defaults
- deploy to Vercel, configure vercel.johnnydecimal.com, specify Clerk > Configure > Paths > Application homepage as https://vercel.johnnydecimal.com
- add Vercel adapter as per https://docs.astro.build/en/guides/integrations-guide/vercel/
  - as my site is primarily static content, change astro.config.mjs `output: 'hybrid'`

# Build locally and deploy here to test all's okay

- 45623b9ceedd290f69bfc208b57444bc97870b88
- all good
- add Clerk as per https://clerk.com/docs/quickstarts/astro
- add environment vars to Vercel
  - PUBLIC_CLERK_PUBLISHABLE_KEY
  - CLERK_SECRET_KEY
- modify astro.config.mjs
- add src/middleware.ts; don't protect any routes yet
- add TS declarations
- add src/layouts/SiteLayout.astro
- wrap index.astro in SiteLayout
- run locally; requests to `clerk.johnnydecimal.com` 400 because
  - The Request HTTP Origin header must be equal to or a subdomain of the requesting URL.
- deploy to Vercel; A-OK
- e08dc23a732c66e0a8153a6066520c0d77cba7d3

# Add a basic [id].astro route

- /11.11 and /12.11 render locally
- push to Vercel
