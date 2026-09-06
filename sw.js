// sw.js の中身
self.addEventListener('install', (event) => {
  console.log('Service Worker installed');
});

self.addEventListener('fetch', (event) => {
  // データの取得時の処理（今回はそのまま通す基本形）
  event.respondWith(fetch(event.request));
});
