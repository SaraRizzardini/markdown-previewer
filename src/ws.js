self.addEventListener('install', event => {
  console.log('Service Worker installed');
});

// Service Worker activation
self.addEventListener('activate', event => {
  console.log('Service Worker activated');
});

// Service Worker fetch event
self.addEventListener('fetch', event => {
  console.log('Fetching:', event.request.url);
});
