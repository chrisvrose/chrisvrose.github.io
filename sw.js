if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return t[e]||(s=new Promise((async s=>{if("document"in self){const t=document.createElement("script");t.src=e,document.head.appendChild(t),t.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!t[e])throw new Error(`Module ${e} didn’t register its module`);return t[e]}))},s=(s,t)=>{Promise.all(s.map(e)).then((e=>t(1===e.length?e[0]:e)))},t={require:Promise.resolve(s)};self.define=(s,n,a)=>{t[s]||(t[s]=Promise.resolve().then((()=>{let t={};const i={uri:location.origin+s.slice(1)};return Promise.all(n.map((s=>{switch(s){case"exports":return t;case"module":return i;default:return e(s)}}))).then((e=>{const s=a(...e);return t.default||(t.default=s),t}))})))}}define("./sw.js",["./workbox-4a677df8"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/CNAME",revision:"9df80a8a4381628fca0590285108bc43"},{url:"/_next/static/HX86subKSuFzC6CoC76Rt/_buildManifest.js",revision:"HX86subKSuFzC6CoC76Rt"},{url:"/_next/static/HX86subKSuFzC6CoC76Rt/_ssgManifest.js",revision:"HX86subKSuFzC6CoC76Rt"},{url:"/_next/static/chunks/996-271115693d4984d89148.js",revision:"HX86subKSuFzC6CoC76Rt"},{url:"/_next/static/chunks/a9a7754c-434d879a1a3803f7cb69.js",revision:"HX86subKSuFzC6CoC76Rt"},{url:"/_next/static/chunks/cb1608f2-e55c8b0f165461ae29aa.js",revision:"HX86subKSuFzC6CoC76Rt"},{url:"/_next/static/chunks/framework-2191d16384373197bc0a.js",revision:"HX86subKSuFzC6CoC76Rt"},{url:"/_next/static/chunks/main-a24fd78f98c3ac5c2849.js",revision:"HX86subKSuFzC6CoC76Rt"},{url:"/_next/static/chunks/pages/404-b11ed223611e6d934f1c.js",revision:"HX86subKSuFzC6CoC76Rt"},{url:"/_next/static/chunks/pages/_app-c8f80baf53bed484bfe5.js",revision:"HX86subKSuFzC6CoC76Rt"},{url:"/_next/static/chunks/pages/_error-737a04e9a0da63c9d162.js",revision:"HX86subKSuFzC6CoC76Rt"},{url:"/_next/static/chunks/pages/index-e6ba5bebe1fe37d4b2ba.js",revision:"HX86subKSuFzC6CoC76Rt"},{url:"/_next/static/chunks/polyfills-a40ef1678bae11e696dba45124eadd70.js",revision:"HX86subKSuFzC6CoC76Rt"},{url:"/_next/static/chunks/webpack-af28476a2e7790fd48db.js",revision:"HX86subKSuFzC6CoC76Rt"},{url:"/_next/static/css/4cbc7b8a6e1c358f90dc.css",revision:"HX86subKSuFzC6CoC76Rt"},{url:"/_next/static/css/ad8148433c5585b5f363.css",revision:"HX86subKSuFzC6CoC76Rt"},{url:"/_next/static/css/c1e237c81a28e2f1682c.css",revision:"HX86subKSuFzC6CoC76Rt"},{url:"/icon/16.png",revision:"b41b1c9849ed4290c3d447f7145abbdd"},{url:"/icon/192.png",revision:"12e236316e543e4a04f03e9cb7c19d80"},{url:"/icon/512.png",revision:"a9fe20dd4625e38ff09a169ce5459abf"},{url:"/icon/64.png",revision:"3b5757709f61e8cf21a2503bcae49dfc"},{url:"/manifest.json",revision:"e4b55fd42467b90981e269372f289ad6"},{url:"/robots.txt",revision:"fa1ded1ed7c11438a9b0385b1e112850"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:t,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
