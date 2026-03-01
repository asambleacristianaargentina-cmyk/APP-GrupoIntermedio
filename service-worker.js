const CACHE_NAME="grupo-v3";

const STATIC_ASSETS=[
"index.html",
"home.html",
"juegos.html",
"css/styles.css",
"css/home.css",
"css/juegos.css"
];

self.addEventListener("install",event=>{
self.skipWaiting();
event.waitUntil(
caches.open(CACHE_NAME).then(cache=>cache.addAll(STATIC_ASSETS))
);
});

self.addEventListener("activate",event=>{
event.waitUntil(
caches.keys().then(keys=>
Promise.all(
keys.filter(key=>key!==CACHE_NAME)
.map(key=>caches.delete(key))
)
)
);
self.clients.claim();
});

self.addEventListener("fetch",event=>{
event.respondWith(
caches.match(event.request).then(response=>{
return response||fetch(event.request);
})
);
});
