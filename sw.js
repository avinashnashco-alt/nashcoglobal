const CACHE_NAME = 'nashco-global-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/about.html',
  '/chemical.html',
  '/automotive.html',
  '/manufacturing.html',
  '/trading.html',
  '/contact.html',
  '/styles.css',
  '/script.js',
  '/offline.html',
  '/images/logo-nashco.jpg',
  '/images/logo-zahy.jpg',
  '/images/icon-192.png',
  '/images/icon-512.png',
  // Add your full image list here for offline
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request).catch(() => caches.match('/offline.html')))
  );
});

self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => Promise.all(
      cacheNames.map(cacheName => {
        if (!cacheWhitelist.includes(cacheName)) return caches.delete(cacheName);
      })
    ))
  );
});