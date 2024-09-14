const CACHE_NAME = 'fixpay-cache-v1';
const urlsToCache = [
    '/',
    '/styles.css',
    '/script.js',
    '/index.html',
    '/Fixpay.png',
    '/Fixpay.png',
    '/Fixpay.png'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                return response || fetch(event.request);
            })
    );
});
