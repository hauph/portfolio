importScripts("/precache-manifest.1645fbb5ad661dfca21d8c6773114fed.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

importScripts('swenv.js');

const DYNAMIC_CACHE = "dynamic_cache";
const STATIC_CACHE = "static_cache";

self.addEventListener("install", (e) => {
  console.log("[ServiceWorker] Installing ...", e);
  e.waitUntil(
    // Precaching static files
    caches.open(STATIC_CACHE).then((cache) => {
      console.log("[Service Worker] Precaching App Shell");
      cache.addAll([
        "/",
        "/index.html",
        "https://fonts.googleapis.com/icon?family=Material+Icons",
        "https://cdn.jsdelivr.net/npm/bulma@0.9.0/css/bulma.min.css",
        "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
        "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js",
        `${process.env.VUE_APP_API_URL}/users/${process.env.VUE_APP_USER}`
      ]);
    })
  );
  return self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  console.log("[ServiceWorker] Activating ...", e);
  return self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    // Network falling back to the cache
    fetch(event.request)
      .then((res) => {
        // Dynamic caching
        return caches
          .open(DYNAMIC_CACHE)
          .then((cache) => {
            cache.put(event.request.url, res.clone());
            return res;
          })
          .catch((err) => {
            console.error("dynamic_cache caching", err);
          });
      })
      .catch(() => {
        return caches.match(event.request);
      })
  );
});

