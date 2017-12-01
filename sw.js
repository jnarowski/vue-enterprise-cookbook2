importScripts('/_nuxt/workbox.476439e0.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "vue-enterprise",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.d17ab07a1be1133851f9.js",
    "revision": "a6f735cf687a4d09ce7a59b5003e4572"
  },
  {
    "url": "/_nuxt/common.98caac7130bbd0be21dfab64a77fef39.css",
    "revision": "80045b414c0c713676a6581249b9e22e"
  },
  {
    "url": "/_nuxt/common.9b95a7237fe846d5c899.js",
    "revision": "499f52ad99fe57d4ed3d1cd9d009ca2a"
  },
  {
    "url": "/_nuxt/layouts/default.c5064e9071941dcb9499.js",
    "revision": "fcab5e2cbd574dedfe0dcce171d1481d"
  },
  {
    "url": "/_nuxt/manifest.5decbc7b78fcc78ef7d0.js",
    "revision": "2b9d2025365cba8fba5f761fcfdeb5e0"
  },
  {
    "url": "/_nuxt/pages/index.17636ad80ecc144a1919.js",
    "revision": "875eea7e436747d6f79f3e85f90c1d61"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

