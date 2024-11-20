- npm create astro@latest, choose all defaults
- deploy to Vercel, configure vercel.johnnydecimal.com, specify Clerk > Configure > Paths > Application homepage as https://vercel.johnnydecimal.com
- add Vercel adapter as per https://docs.astro.build/en/guides/integrations-guide/vercel/
  - as my site is primarily static content, change astro.config.mjs `output: 'hybrid'`

# Build locally and deploy here to test all's okay

- add Clerk as per https://clerk.com/docs/quickstarts/astro
- add environment vars to Vercel
  - PUBLIC_CLERK_PUBLISHABLE_KEY
  - CLERK_SECRET_KEY
