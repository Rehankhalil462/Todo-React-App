//Version:Cache_Name
const appVersion = 'v1.00';

// Files to Cache
const files = [
  '/',
  '/index.html',
  'manifest.json',
  '64x64.png',
  '192x192.png',
  '512x512.png',
  '/static/css/main.ff0285fe.chunk.css',
  // '/static/css/main.d3f1f9f9.chunk.css.map',
  '/static/js/2.af99e0dd.chunk.js',
  '/static/js/main.43ac1699.chunk.js',
  '/static/js/runtime-main.5020f1d9.js',
];
const self = this;

//Install:Cache Files
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(appVersion)
      .then((cache) => {
        return cache.addAll(files);
      })
      .catch((error) => {
        console.error('Error in adding files to Cache', error);
      })
  );
  console.info('Service Worker is Installed');
  self.skipWaiting();
});

//Activate:Manage Old Caches
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [];
  cacheWhitelist.push(appVersion);

  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            console.log('Deleting Old Caches', cache);
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
  return self.clients.claim();
});

//Fetch

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});
