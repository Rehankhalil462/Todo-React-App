//Version:Cache_Name
const appVersion = 'v1.00';

// Files to Cache
const files = [
  '/',
  'index.html',
  'manifest.json',
  '/static/js/bundle.js',
  '/static/js/main.chunk.js',
  '/static/js/vendors~main.chunk.js',
  '64x64.png',
  '192x192.png',
  '512x512.png',
  '/favicon.ico',
  '/static/css/main.ff0285fe.chunk.css',
  '/static/js/2.666b4dcc.chunk.js',
  '/static/js/main.416df751.chunk.js',
  '/static/js/runtime-main.094884d4.js',
];
const self = this;

//Install:Cache Files
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(appVersion)
      .then((cache) => {
        cache.addAll(files);
      })
      .catch((error) => {
        console.error('Error in adding files to Cache', error);
      })
  );
  console.info('Service Worker is Installed');
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
});

//Fetch

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches
      .match(event.request)
      .then(function (response) {
        return response || fetch(event.request);
      })
      .catch((error) => console.log('this is error', error))
  );
});
