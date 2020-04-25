# KeystoneJS + Next.js powered Admin UI Prototype

> ⚠️ **This is a prototype only** ⚠️

Using Next.js' new `getStaticPaths()`/`getStaticProps()` methods to do static
builds of Admin UI pages that can also handle dynamically rendering new data.

## Running it

```
yarn
yarn dev
```

Then visit `http://localhost:3000/admin`

(for production mode; `yarn build && yarn start`)

## Rendering the Admin UI

This KeystoneJS App does _not_ include usage of `@keystonejs/app-admin-ui`.

Instead, it uses `@keystonejs/app-next` to render a Next.js based Admin UI.

The Next.js Admin UI is the last app (aka; route handler) exported from
`index.js`, so acts as a catch-all. It defines a single route `/admin` which has
3 nested routes:

- `/admin` - the "Dashboard" index page
  - ✅ Statically rendered List tiles at build time
  - ✅ Client side data fetching for list meta data
- `/admin/[listKey]` - A list view for a Keystone List
  - ✅ Statically rendered skeleton at build time
  - ✅ Client side data fetching for list items
- `/admin/[listKey]/[id]` - Detail view for a single item of the given Keystone
  List
  - ✅ Statically rendered skeleton at build time
  - ✅ Client side data fetching for item data
