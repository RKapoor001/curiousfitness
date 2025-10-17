const cacheName = 'curiousfitness-cache-v1';
const assetsToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/intro.html',
  '/bmi.html',
  '/idealBody.html',
  '/protein.html',
  '/water.html',
  '/bfp.html',
  '/whtr.html',
  '/bmr.html',
  '/more.html',
  '/curiousfitness_logo.jpeg',
  '/curiousfitness_main.jpeg'
];

// Install service worker and cache files
self.addEventListener('install', event => {
  console.log('Service Worker: Installing...');
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      console.log('Service Worker: Caching files...');
      return cache.addAll(assetsToCache);
    })
  );
});

// Activate service worker
self.addEventListener('activate', event => {
  console.log('Service Worker: Activated');
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== cacheName)
            .map(key => caches.delete(key))
      );
    })
  );
});

// Fetch cached files
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
