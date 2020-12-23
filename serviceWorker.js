const cacheName = "pwa-first-v3"
const filesToCache = [
    '/index.html',
    '/manifest.json',
    '/css/style.css',
    '/images/beach.jpg',
    '/images/shenzhen.jpg'
];
self.addEventListener('install', function (e) {
    console.log('install')
    e.waitUntil(caches.open(cacheName)
        .then(function (cache) {
            return cache.addAll(filesToCache)
        })
    )
})
self.addEventListener('fetch', function (e) {
    e.respondWith(caches.match(e.request)
        .then(function (res) {
            return res || fetch(e.request)
        }))
})
