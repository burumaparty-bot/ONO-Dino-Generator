const CACHE="ono-dino-generator-v8-0-0";
const ASSETS=[
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icon.svg",
  "./README.md",
  "./CHANGELOG.md",
  "./cards/D001.jpg",
  "./cards/D002.jpg",
  "./cards/D003.jpg",
  "./cards/D004.jpg",
  "./cards/D005.jpg",
  "./cards/D006.jpg",
  "./cards/D007.jpg",
  "./cards/D008.jpg",
  "./cards/D009.jpg",
  "./cards/D010.jpg"
];
self.addEventListener("install",e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)))});
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener("fetch",e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
