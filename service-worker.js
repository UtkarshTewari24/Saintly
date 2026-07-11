const CACHE_VERSION = 'saintly-v20';
const CORE_ASSETS = [
  './',
  './site.css',
  './practice-portal.css',
  './site-sidebar.js',
  './site-footer.js',
  './halo-knowledge.js',
  './amc-10-halo.js',
  './study-path.html',
  './study-path.css',
  './study-path.js',
  './study-path-data.js',
  './lesson.html',
  './lesson.css',
  './lesson.js',
  './question-bank.js',
  './practice-test.js',
  './data/amc-10-problems.json',
  './assets/branding/saintly-full-logo.png',
  './assets/branding/saintly-icon.png',
  './assets/branding/favicon-32.png'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_VERSION).then(cache =>
    Promise.allSettled(CORE_ASSETS.map(asset => cache.add(asset)))
  ));
});

self.addEventListener('activate', event => {
  event.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(key => key !== CACHE_VERSION).map(key => caches.delete(key))))
    .then(() => self.clients.claim()));
});

self.addEventListener('fetch', event => {
  const { request } = event;
  if (request.method !== 'GET') return;
  if (new URL(request.url).origin !== self.location.origin) return;

  if (request.mode === 'navigate') {
    event.respondWith(fetch(request).then(response => {
      if (response.ok) caches.open(CACHE_VERSION).then(cache => cache.put(request, response.clone()));
      return response;
    }).catch(() => caches.match(request).then(cached => cached || caches.match('./'))));
    return;
  }

  event.respondWith(caches.match(request).then(cached => {
    const update = fetch(request).then(response => {
      if (response.ok) caches.open(CACHE_VERSION).then(cache => cache.put(request, response.clone()));
      return response;
    });
    return cached || update;
  }));
});
