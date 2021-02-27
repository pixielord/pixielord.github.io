// VERSION: 11
const pb_cache = "pbc_v1"
const assets = [
    "./manifest.json",
    "./index.html",
    "./offline.html",
    "./prayers.html",
    "./way-of-cross.html",
    "./holymass.html",
    "./family-prayers.html",
    "./transliteration.html",
    "./templates/holymass/transliteration/page1.html",
    "./templates/holymass/transliteration/page2.html",
    "./templates/holymass/transliteration/page3.html",
    "./templates/holymass/transliteration/page4.html",
    "./templates/holymass/transliteration/page5.html",
    "./templates/holymass/transliteration/page6.html",
    "./templates/holymass/transliteration/page7.html",
    "./templates/holymass/transliteration/page8.html",
    "./templates/holymass/transliteration/page9.html",
    "./templates/holymass/transliteration/page10.html",
    "./templates/holymass/transliteration/page11.html",
    "./templates/holymass/transliteration/page12.html",
    "./templates/holymass/transliteration/page13.html",
    "./templates/holymass/transliteration/page14.html",
    "./templates/holymass/transliteration/page15.html",
    "./templates/holymass/transliteration/page16.html",
    "./templates/holymass/transliteration/page17.html",
    "./templates/holymass/transliteration/page18.html",
    "./templates/holymass/transliteration/page19.html",
    "./templates/holymass/transliteration/page20.html",
    "./templates/holymass/transliteration/page21.html",
    "./templates/holymass/transliteration/page22.html",
    "./templates/holymass/transliteration/page23.html",
    "./templates/holymass/transliteration/page24.html",
    "./templates/holymass/transliteration/page25.html",
    "./templates/holymass/transliteration/page26.html",
    "./templates/holymass/transliteration/page27.html",
    "./templates/holymass/transliteration/page28.html",
    "./templates/holymass/transliteration/page29.html",
    "./templates/holymass/transliteration/page30.html",
    "./templates/holymass/transliteration/page31.html",
    "./templates/holymass/transliteration/page32.html",
    "./templates/holymass/transliteration/page33.html",
    "./templates/holymass/transliteration/page34.html",
    "./templates/holymass/transliteration/page35.html",
    "./templates/holymass/transliteration/page36.html",
    "./templates/holymass/transliteration/page37.html",
    "./templates/holymass/transliteration/page38.html",
    "./templates/holymass/transliteration/page39.html",
    "./templates/prayers/page1.html",
    "./templates/prayers/page2.html",
    "./templates/prayers/page3.html",
    "./templates/prayers/page4.html",
    "./templates/prayers/page5.html",
    "./templates/prayers/page6.html",
    "./templates/prayers/page7.html",
    "./templates/prayers/page8.html",
    "./templates/prayers/page9.html",
    "./templates/prayers/page10.html",
    "./templates/prayers/page11.html",
    "./templates/prayers/page12.html",
    "./templates/prayers/page13.html",
    "./templates/prayers/page14.html",
    "./templates/prayers/page15.html",
    "./templates/prayers/page16.html",
    "./templates/prayers/page17.html",
    "./templates/prayers/page18.html",
    "./templates/prayers/page19.html",
    "./templates/prayers/page20.html",
    "./templates/prayers/page21.html",
    "./templates/way-of-cross/page1.html",
    "./templates/way-of-cross/page2.html",
    "./templates/way-of-cross/page3.html",
    "./templates/way-of-cross/page4.html",
    "./templates/way-of-cross/page5.html",
    "./templates/way-of-cross/page6.html",
    "./templates/way-of-cross/page7.html",
    "./templates/way-of-cross/page8.html",
    "./templates/way-of-cross/page9.html",
    "./templates/way-of-cross/page10.html",
    "./templates/way-of-cross/page11.html",
    "./templates/way-of-cross/page12.html",
    "./templates/way-of-cross/page13.html",
    "./templates/way-of-cross/page14.html",
    "./templates/way-of-cross/page15.html",
    "./templates/way-of-cross/page16.html",
    "./templates/way-of-cross/page17.html",
    "./templates/way-of-cross/page18.html",
    "./templates/way-of-cross/page19.html",
    "./templates/way-of-cross/page20.html",
    "./templates/way-of-cross/page21.html",
    "./templates/way-of-cross/page22.html",
    "./templates/way-of-cross/page23.html",
    "./templates/way-of-cross/page24.html",
    "./templates/way-of-cross/page25.html",
    "./templates/way-of-cross/page26.html",
    "./templates/way-of-cross/page27.html",
    "./templates/way-of-cross/page28.html",
    "./templates/way-of-cross/page29.html",
    "./templates/way-of-cross/page30.html",
    "./templates/way-of-cross/page31.html",
    "./templates/way-of-cross/page32.html",
    "./templates/way-of-cross/page33.html",
    "./templates/way-of-cross/page34.html",
    "./fonts/Gayathri-Regular.woff2",
    "./fonts/Gayathri-Regular.otf",
    "./fonts/Gayathri-Regular.ttf",
    "./fonts/Roboto-Light.ttf",
    "./fonts/Roboto-Medium.ttf",
    "./fonts/Roboto-MediumItalic.ttf",
    "./fonts/Roboto-Regular.ttf",
    "./css/styles.css",
    "./css/mass.css",
    "./css/prayers.css",
    "./js/app.js",
    "./js/menu.js",
    "./js/pagination.js",
    "./js/client.js",
    "./android-icon-144x144.png",
    "./android-icon-192x192.png",
    "./android-icon-36x36.png",
    "./android-icon-48x48.png",
    "./android-icon-72x72.png",
    "./android-icon-96x96.png",
    "./apple-icon-120x120.png",
    "./apple-icon-144x144.png",
    "./apple-icon-114x114.png",
    "./apple-icon-152x152.png",
    "./apple-icon-180x180.png",
    "./apple-icon-57x57.png",
    "./apple-icon-60x60.png",
    "./apple-icon-72x72.png",
    "./apple-icon-76x76.png",
    "./apple-icon-precomposed.png",
    "./apple-icon.png",
    "./favicon-16x16.png",
    "./favicon-32x32.png",
    "./favicon.ico",
    "./ms-icon-144x144.png",
    "./ms-icon-150x150.png",
    "./ms-icon-310x310.png",
    "./ms-icon-70x70.png",
    "./images/jesus-128.png",
    "./images/jesus-256.png",
    "./images/jesus-64.png",
    "./images/jesus.png",
    "./images/logo.png",
    "./images/menu-cover.jpg",
    "./images/marthoma-cross.jpg",
    "./images/way-of-the-cross.png",
]

self.addEventListener("install", installEvent => {
  const cacheBypassRequests = assets.map(
    (url) => new Request(url, {cache: 'reload'}));

  installEvent.waitUntil(
    caches.open(pb_cache)
    .then((cache) => {
      return cache.addAll(cacheBypassRequests)
      .then(() => {
        return self.skipWaiting();
      })
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    // Try the cache
    caches.match(event.request).then(function(response) {
      if (response) {
        return response;
      }
      return fetch(event.request).then(function(response) {
        if (response.status === 404) {
          return caches.match('/offline.html');
        }
        return response
      });
    }).catch(function() {
      // If both fail, show a generic fallback:
      return caches.match('/offline.html');
    })
  );
});