//Version:Cache_Name
const appVersion = 'v1.00';

// Files to Cache
const files = [
  '/',
  'manifest.json',
  'index.html',
  '64x64.png',
  '192x192.png',
  'main.d3f1f9f9.chunk.css',
  'main.adc079f0.chunk.js',
  '2.6b3af406.chunk.js',
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

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then(() => {
      return fetch(event.request).catch(() => caches.match('offline.html'));
    })
  );
});
