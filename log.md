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
- b73fcf642ac5f8d9f2380512e22ccf39c726c878
- can sign in, can view both pages, can sign out

# Protect a route with middleware

- https://clerk.com/docs/references/astro/clerk-middleware#protect-routes-based-on-user-authentication-status
- copy/paste that file over middleware.ts
- don't change anything yet -- so this doesn't match any of _our_ routes, but let's be sure it deploys and doesn't do anything funky
- 5b7b43ba3d8344956b146a84f2b454670cc68832
- no change as expected. let's protect our route with:
  - const isProtectedRoute = createRouteMatcher(["/11(.*)"]);
- 45ef398c0c56a8836c1d40f19835c5713f285dc4
- i'm not logged in
- /12.11 renders as expected
- /11.11 redirects to login as expected
- login works ... and now the redirect tries to send me to `localhost:4321`?! that must be configured somewhere...
- add `site: "https://vercel.johnnydecimal.com"` to astro.config
- cfa122f9a07943bbe7a003ac09fc45c6c1d8bd8e

# And we are in Redirect City

- visit https://vercel.johnnydecimal.com/11.11
- doesn't work :-(
- if i log out, the middleware detects that just fine and redirects me to login
- login succeeds
- and now i'm in the infinite loop
- https://share.cleanshot.com/Lt615z88

# And this is why!

- https://discord.com/channels/856971667393609759/1308668362905223239/1308945694614229013
- unsupported with prerendered pages
- so let's rip out that middleware -- leave the file there as we might protect a SSR route in the future?
- replace our env vars with the dev versions, and start using the dev instance
- in the dev instance, configure the host to be http://localhost:8888
- nice. let's commit
- 6cd25011fe2248ef93974da423a76ec6bf07074e
- now let's do some reading on what the boys sent you
