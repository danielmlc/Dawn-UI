/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "22b516a7863b758aad3b19d5caf52309"
  },
  {
    "url": "assets/css/0.styles.af3b98b8.css",
    "revision": "6d6d452075ebf9580c4fb7fec40608a8"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.25949d34.js",
    "revision": "b777651428c06ed5c5d48732cf2aab65"
  },
  {
    "url": "assets/js/3.d602c61c.js",
    "revision": "2f61c13ccae7c9a4174986f6fd62db82"
  },
  {
    "url": "assets/js/4.567c33d9.js",
    "revision": "c28a02fe9e515fb5f8cc6bdb40a5f295"
  },
  {
    "url": "assets/js/5.17dfaa48.js",
    "revision": "b01c6cc93f314c7c420a3b2330a6aaa6"
  },
  {
    "url": "assets/js/6.5a407fab.js",
    "revision": "1ed469b5a5d2a2b96a034d3b8ef53599"
  },
  {
    "url": "assets/js/7.ad03fd63.js",
    "revision": "ef2fc3eb4924cf5234b55a6b58be07ba"
  },
  {
    "url": "assets/js/8.56edf50f.js",
    "revision": "842f5105077c64694e15004d44e81609"
  },
  {
    "url": "assets/js/app.8262d3fb.js",
    "revision": "fed11c6d1d0f3346e3ea78dba92ee448"
  },
  {
    "url": "document/components.html",
    "revision": "081474669420acb92c033ee563778114"
  },
  {
    "url": "document/siteTemplate.html",
    "revision": "61bda2d8f2e3d663b0c275b621819b28"
  },
  {
    "url": "document/update.html",
    "revision": "9b39106dafded4a87a467179e33347bf"
  },
  {
    "url": "document/wuliao.html",
    "revision": "51e3a2cd9394e43dd2cd78b7c9667198"
  },
  {
    "url": "img/icons/Icon-120.png",
    "revision": "d9af784629637c1c2e829268e4de0b33"
  },
  {
    "url": "img/icons/Icon-152.png",
    "revision": "0e0ad78fa76b08a5cc86225e7ac00cdc"
  },
  {
    "url": "img/icons/Icon-16.png",
    "revision": "93b79a403d5ee034dda25a9142995a3f"
  },
  {
    "url": "img/icons/Icon-180.png",
    "revision": "6f0be66d424dbab3ee6b2f4456fbc3bb"
  },
  {
    "url": "img/icons/Icon-192.png",
    "revision": "81d7a254033bca2eb5679d1dee7d95da"
  },
  {
    "url": "img/icons/Icon-32.png",
    "revision": "3a9bef5cef661719efe1192e52373b85"
  },
  {
    "url": "img/icons/Icon-512.png",
    "revision": "c1b43cfb8d6cd2c2d9bb269c547566c7"
  },
  {
    "url": "img/icons/Icon-60.png",
    "revision": "87d3950becc76f86a88b81b64223b244"
  },
  {
    "url": "img/icons/Icon-76.png",
    "revision": "cab8dac9f5cd3cb6846d6980b40839ec"
  },
  {
    "url": "img/logo.png",
    "revision": "d9af784629637c1c2e829268e4de0b33"
  },
  {
    "url": "index.html",
    "revision": "363951bdb6308a4f2d75c223d94310e9"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
