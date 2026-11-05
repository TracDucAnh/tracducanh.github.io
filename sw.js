/* =========================================================
   Service worker for the photography page.

   - Photos (photography/**): cache-first. Once a visitor has seen
     a photo it is served from their disk on every later visit.
   - Page files (photography.html, its css/js, avatar): network-first,
     falling back to the cache, so a new deploy shows up right away.
   - Everything else on the site is left untouched.

   Replaced a photo but kept its file name? Bump PHOTO_CACHE below
   so visitors download the new version.
   ========================================================= */

var PHOTO_CACHE = "ph-photos-v1";
var PAGE_CACHE = "ph-page-v1";
var KEEP = [PHOTO_CACHE, PAGE_CACHE];

var PAGE_FILES = /\/(photography\.html|css\/photography\.css|js\/photography\.js|images\/about\.jpg)$/;
var PHOTO_FILES = /\/photography\/.+\.(jpe?g|png|webp)$/i;

self.addEventListener("install", function(){
	self.skipWaiting();
});

self.addEventListener("activate", function(event){
	event.waitUntil(
		caches.keys().then(function(names){
			return Promise.all(names.filter(function(n){
				return n.indexOf("ph-") === 0 && KEEP.indexOf(n) < 0;
			}).map(function(n){ return caches.delete(n); }));
		}).then(function(){ return self.clients.claim(); })
	);
});

function cacheFirst(request){
	return caches.open(PHOTO_CACHE).then(function(cache){
		return cache.match(request).then(function(hit){
			if (hit) return hit;
			return fetch(request).then(function(res){
				if (res.ok && res.type === "basic") cache.put(request, res.clone());
				return res;
			});
		});
	});
}

function networkFirst(request){
	return caches.open(PAGE_CACHE).then(function(cache){
		return fetch(request).then(function(res){
			if (res.ok && res.type === "basic") cache.put(request, res.clone());
			return res;
		}).catch(function(){
			return cache.match(request, {ignoreSearch: true}).then(function(hit){
				return hit || Response.error();
			});
		});
	});
}

self.addEventListener("fetch", function(event){
	var req = event.request;
	if (req.method !== "GET") return;
	var url = new URL(req.url);
	if (url.origin !== self.location.origin) return;

	if (PHOTO_FILES.test(url.pathname)) event.respondWith(cacheFirst(req));
	else if (PAGE_FILES.test(url.pathname)) event.respondWith(networkFirst(req));
});
