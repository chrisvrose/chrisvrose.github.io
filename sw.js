if(!self.define){let e,s={};const n=(n,a)=>(n=new URL(n+".js",a).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,t)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let c={};const r=e=>n(e,i),o={module:{uri:i},exports:c,require:r};s[i]=Promise.all(a.map((e=>o[e]||r(e)))).then((e=>(t(...e),c)))}}define(["./workbox-afe353a3"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/CNAME",revision:"9df80a8a4381628fca0590285108bc43"},{url:"/_next/static/8GAJV4SzhSgbdcWsVa4-P/_buildManifest.js",revision:"8GAJV4SzhSgbdcWsVa4-P"},{url:"/_next/static/8GAJV4SzhSgbdcWsVa4-P/_ssgManifest.js",revision:"8GAJV4SzhSgbdcWsVa4-P"},{url:"/_next/static/chunks/785-bc91059688cf2b80.js",revision:"8GAJV4SzhSgbdcWsVa4-P"},{url:"/_next/static/chunks/a9a7754c-789f489080e6d7c7.js",revision:"8GAJV4SzhSgbdcWsVa4-P"},{url:"/_next/static/chunks/cb1608f2-8ed1864ef1456ecc.js",revision:"8GAJV4SzhSgbdcWsVa4-P"},{url:"/_next/static/chunks/framework-5f4595e5518b5600.js",revision:"8GAJV4SzhSgbdcWsVa4-P"},{url:"/_next/static/chunks/main-8f6a1f56c3d3556f.js",revision:"8GAJV4SzhSgbdcWsVa4-P"},{url:"/_next/static/chunks/pages/404-d525644342d7b2c2.js",revision:"8GAJV4SzhSgbdcWsVa4-P"},{url:"/_next/static/chunks/pages/_app-362499d0af00cb9f.js",revision:"8GAJV4SzhSgbdcWsVa4-P"},{url:"/_next/static/chunks/pages/_error-a4ba2246ff8fb532.js",revision:"8GAJV4SzhSgbdcWsVa4-P"},{url:"/_next/static/chunks/pages/index-a600a9fc3e4fd811.js",revision:"8GAJV4SzhSgbdcWsVa4-P"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"8GAJV4SzhSgbdcWsVa4-P"},{url:"/_next/static/chunks/webpack-9b312e20a4e32339.js",revision:"8GAJV4SzhSgbdcWsVa4-P"},{url:"/_next/static/css/8295066d3906bdee.css",revision:"8GAJV4SzhSgbdcWsVa4-P"},{url:"/_next/static/css/97234fab01e3f8ee.css",revision:"8GAJV4SzhSgbdcWsVa4-P"},{url:"/_next/static/css/bf6cb4f602746424.css",revision:"8GAJV4SzhSgbdcWsVa4-P"},{url:"/icon/16.png",revision:"b41b1c9849ed4290c3d447f7145abbdd"},{url:"/icon/192.png",revision:"12e236316e543e4a04f03e9cb7c19d80"},{url:"/icon/512.png",revision:"a9fe20dd4625e38ff09a169ce5459abf"},{url:"/icon/64.png",revision:"3b5757709f61e8cf21a2503bcae49dfc"},{url:"/manifest.json",revision:"e4b55fd42467b90981e269372f289ad6"},{url:"/robots.txt",revision:"fa1ded1ed7c11438a9b0385b1e112850"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
