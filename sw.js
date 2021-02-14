const pb_cache = "pb-site-v1"
const assets = [
    "./index.html",
    "./templates/prayers/index.html",
    "./templates/prayers/page1.html",
    "./templates/holymass/index.html",
    "./templates/holymass/page1.html",
    "https://fonts.googleapis.com/css?family=Roboto:200,300,400,500,700",
    "./fonts/Gayathri-Regular.woff2",
    "./fonts/Gayathri-Regular.otf",
    "./fonts/Gayathri-Regular.ttf",
    "./css/styles.css",
    "./js/app.js",
    "./images/android-chrome-192x192.png",
    "./images/android-chrome-512x512.png",
    "./images/android-maskable-192x192.png",
    "./images/android-maskable-512x512.png",
    "./images/apple-touch-icon.png",
    "./images/favicon-16x16.png",
    "./images/favicon-32x32.png",
    "./images/favicon.ico",
    "./images/jesus-128.png",
    "./images/jesus-256.png",
    "./images/jesus-64.png",
    "./images/jesus.png",
    "./images/logo.png",
    "./images/menu-cover.jpg",
    "./images/mstile-150x150.png",
]

self.addEventListener("install", installEvent => {
    console.log('installing');
  installEvent.waitUntil(
    caches.open(pb_cache).then(cache => {
      cache.addAll(assets)
    })
  )
});

self.addEventListener("fetch", fetchEvent => {
    console.log(fetchEvent.request);
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
});