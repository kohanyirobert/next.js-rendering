# About

## Steps to run

1. Run `pnpm install` to install dependencies
1. Run `pnpm run time-server` to start a simple time server used by the frontend
1. Run `pnpm run build && pnpm start` to properly test SSG, ISR, SSR and CSR behavior, because in development mode pages are regenerated even if they doesn't need to in certain cases

## Notes

1. Enable bandwidth throttling in the browser's development tools to emphasize certain behavior
1. With bandwith throttled notice that clicking on the button doesn't log anything to the console (while JavaScript is being loaded)
1. React strict mode is disabled in [`next.config.js`](next.config.js) to prevent duplicate log lines
1. In `displayTime` the order things matter: `useSWR` would set `isLoading` to true with a fallback value present, overriding/hiding the fallback value
1. [`ssg-without-data`](pages/ssg-without-data.js)

    - Generated during build
    - Navigating to this page directly loads the static page
    - Navigating via a link loads static props only (`.json` request)

1. [`ssg-with-data`](pages/ssg-with-data.js)

    - Generated during build
    - Navigating to this page directly loads the static page generated during or *the last one generated incrementally* (see `revalidate: 30` in `getStaticProps`)
    - Navigating via a link loads static props `.json` only (behaving according to `revalidate: 30`)
    - Hovering over its link on the index page does a prefetch for a static asset, a prefetch also happens when clicking on the link
    - `useSWR` revalidates and updates the page after the first load and when focus is regained (switching tabs, etc.)

1. [`ssr`](pages/ssr.js)

    - Not generated during build
    - Navigating to this page directly loads a static page generated at the server-side
    - Navigating via a link loads static props generated at the server-side (`.json` request)
    - `useSWR` not used since the data is generated at the server-side always
    - Since the page is not *pre*-generated on a slow (e.g. throttled) connection the page blanks out after navigation but before the server's response
    - Server-side caching is controlled with `Cache-Control`: this is kind of hard to understand, but [here's a description of it](https://web.dev/stale-while-revalidate/), **to me it seemed this doesn't work as intented, as a fresh cache entry is revalidated automatically before `max-age` expires** (but maybe this is how it should work or I don't understand something)

1. [`csr`](pages/csr.js)

    - Not generated during build
    - Navigating to this page directly or via a link loads a "skeleton" page (where dynamic data is empty/contains dummy values)
    - `useSWR` fetches the missing data after JavaScript is loaded (more obvious on a throttled connection) and also revalidates and updates the page after the first load and when focus changes
