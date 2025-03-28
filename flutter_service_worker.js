'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

<<<<<<< HEAD
const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "02f37ce3b6cd2e5c228cb0897769693e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "5d8f55de90a83cc48ac1161c09a7bf82",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ffbec7ecba3e148e684d2ff4b925cd78",
".git/logs/refs/heads/main": "98efd04921cffc71ea086556930f8cc6",
".git/logs/refs/remotes/origin/main": "6fa4e84e7d2a15224fc517b63b3b7313",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/0a/feaba5ead90cbe80ad60f259d30c6f99b6ea5e": "59fc483c1cc6b01df634cc6492ab25e5",
".git/objects/1b/e093247d332cad5d83c8803dbf9c5d781f8c0c": "07ce3c8326aa372d7ca3e9484990a018",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/25/145fe2879fbf747b9ee8ec594c98719b76fc9e": "18ccee7ff6c1ffb4aa5336b2f7e35168",
".git/objects/25/2a8dec94187f13653fa1e4e3ec414195b08dea": "112594ad9a61d79592cf58fa9c482cd9",
".git/objects/27/525e6343c23254ae5f6bc967a82fa368adfbf1": "fa59546a8c764fd97270befd1d5059eb",
".git/objects/29/bc8b26b1c86692c3c8d3b46fb1cb68eacce585": "dff2687550a79a37b2cd2ce5ebf31a0c",
".git/objects/31/02755e169d295f9c09734f947c761f908fa063": "7aa7f0f24841c25e2e2a43d0821e4ca1",
".git/objects/31/49805f469c738bb33352911694943054854ff3": "24f899ea6d74640a0179b38d56558458",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/4f/17fb53bbba44b75c544ecaa3882d850e7dc739": "0ff312be98601dad87517c937d3f49fb",
".git/objects/4f/97f1f008108a5dc8f2a1a24a70808fe1e8b0eb": "106d8da56449d2d77590fd6d2ecce5f4",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/5a/13bd5a18e506d22647433b1980295ce67bcebe": "50b077c2b68b737800ac0d99a322b746",
".git/objects/5a/858ca79629f1951165b0bfc3b15a8dc1f5c37f": "d3a1ecc1e0d5103673aa16f24150b5a6",
".git/objects/5b/608023f031abe28426125be9936cca5bf1c493": "27b23254b029b234c72d593c352fa499",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/68/da523f8d8a15f71ba3a271990175363b32e85b": "c615f2330c7075303554328353a629f6",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6c/3c7ed0d4f035d6f0e956bbc2764a958bbf35db": "a5fa170f99c0a6f5f91addb4dd3f9e42",
".git/objects/71/b5bb041d11d1726b2809ef21f45b3810871c6e": "27d174028706cc144cbef4c9f86e44be",
".git/objects/72/4cf9e3bfe1b55f6f9680286e9c2b122a531df2": "b6791167e0ba5346a16d6f814937cf26",
".git/objects/73/abe1dbf9b5db2858c894e72d854c9dbe798750": "0afd770126a210975ffbc3767f144d70",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/e5784b9f323a5a405f716bc8c08963630a9b26": "6c600d6fc3390bc7279d757cb79c5f28",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/9a/e48202110bfe268332fab0dbadd7b1670c71da": "fcbfae9881cf9c3c85ec0a82ace080d7",
".git/objects/9f/b83c302475d83c7d207b263b5589c532365f7b": "0e761541a19d3c641f90a8337ed28bba",
".git/objects/a4/2b753ece92c5115dfdd6825f386acf830eb275": "f4dae2386d4236ff3e585621a923ff68",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/ac/7258ea8bf6cdbded6c657a4fd516f385390ef6": "58b247b9f104eca665f44614b8a1273e",
".git/objects/af/665ce0c0bcfc3d0fb7df463577135901d8e955": "68d274bc32327d134df34b457a29c78c",
".git/objects/b1/8cb7855fca6e4e8cdaadb6dfeef3961d2b1b4d": "e0bd841f67d476964cda339c462caa13",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bc/93ad12fd35a69501d94e19d253bb16ccc2b22c": "a191020c3bbfb7b490ec81d1b5f03d5d",
".git/objects/c0/add5df98421189ab4fbb65c42142e05c5748d4": "ec6322eea8889c012817fb22eebb8873",
".git/objects/ca/e3629bdcde237ba6ef8e66ad995357ead3c6a1": "a409752b856ad9bf31e822f2393a9741",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/db/0df5d04ac1609adf9799502bc5cd2dd262b815": "d6e23717cfaf06fb6225b24d21b157ca",
".git/objects/e2/07e6e32dbfcda912e81a3c786f7ae4a5956b40": "bbcc4c213426e061311ea39c30475800",
".git/objects/e9/1012af4e25520a782acdc819e118e3b14f96ff": "997d8eff907c6fbdfc4e6b840951c679",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f8/ea64cb93ac7d740eab6032f6f6514e8fb116ed": "8c405539108ba5807e33a55840d856b1",
".git/refs/heads/main": "5f77f5ff43bc68e11bf8322ef9ce0063",
".git/refs/remotes/origin/main": "5f77f5ff43bc68e11bf8322ef9ce0063",
"assets/AssetManifest.bin": "79cc74f786fe0fb74465ba41a6b0ca71",
"assets/AssetManifest.bin.json": "19451010c497d5b18a3e8acd31f6cd3f",
"assets/AssetManifest.json": "d26b70c628a2121ee26d40a8a362b93a",
"assets/assets/images/logo.png": "6a6211ce35127af5caccd30a38b11df2",
"assets/assets/images/personme.png": "e9e08ee983102d572b78b7c927792558",
"assets/assets/images/points.png": "cd6da478faa7ce37b87eecd6b3792999",
"assets/FontManifest.json": "3ddd9b2ab1c2ae162d46e3cc7b78ba88",
"assets/fonts/MaterialIcons-Regular.otf": "726751a086707098189e11e1aa16cb3b",
"assets/NOTICES": "09c7fb084839216aee809509cba29493",
=======
const RESOURCES = {"assets/AssetManifest.bin": "4103098eb88337bbd75d07db54f2c560",
"assets/AssetManifest.bin.json": "13c9a18ee805161a35a990654f9be93f",
"assets/AssetManifest.json": "1abdacb09733e95ba2f665f1141ff5e1",
"assets/assets/images/logo.png": "6a6211ce35127af5caccd30a38b11df2",
"assets/assets/images/personme.png": "e9e08ee983102d572b78b7c927792558",
"assets/assets/images/points.png": "cd6da478faa7ce37b87eecd6b3792999",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "726751a086707098189e11e1aa16cb3b",
"assets/NOTICES": "7cc2427f881ebe385f77c5ce9d0b3e8f",
>>>>>>> 8e80a6e (first commit)
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "34094892e61eb2a17d2fed3a8347587f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "30319b651cc5a6f90fc6842103bf2f56",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d76b3664042722bdce1b644469c21a48",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
<<<<<<< HEAD
"flutter_bootstrap.js": "4a5fc423076dab6d82c16f432f861c9e",
=======
"flutter_bootstrap.js": "7a4196fa601eabf764380cfa00d79661",
>>>>>>> 8e80a6e (first commit)
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
<<<<<<< HEAD
"index.html": "5d8f235d3de6394a54dbe61c31c8c935",
"/": "5d8f235d3de6394a54dbe61c31c8c935",
"main.dart.js": "54baffd08bbe8942ac9808b0699ef039",
"manifest.json": "95eaade431955ca9b8f9104405c34d51",
"README.md": "724e5f4068be3528d2b0a55183733562",
=======
"index.html": "7be2db4637d9c1d67df9573dee78b040",
"/": "7be2db4637d9c1d67df9573dee78b040",
"main.dart.js": "54baffd08bbe8942ac9808b0699ef039",
"manifest.json": "95eaade431955ca9b8f9104405c34d51",
>>>>>>> 8e80a6e (first commit)
"version.json": "bfbe69c0fb5b3c7129b1dbb107a0ae06"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
