if(!self.define){let e,i={};const c=(c,a)=>(c=new URL(c+".js",a).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(a,o)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let n={};const r=e=>c(e,s),d={module:{uri:s},exports:n,require:r};i[s]=Promise.all(a.map((e=>d[e]||r(e)))).then((e=>(o(...e),n)))}}define(["./workbox-9eb4366e"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"_astro/hoisted.TVuFzmrM.js",revision:"96225c61f905d1bb9856edc8489231b2"},{url:"_astro/index.BXBeSuXa.js",revision:"8c4cad6fc1dcf2e232ade56b5ab3c727"},{url:"_astro/page.CY7HCSJH.js",revision:"1f7915279454c543310d33a0b9066cd5"},{url:"css/add-to-calendar.css",revision:"699ef635ad9fa01686e78cccc52cda15"},{url:"favicon.svg",revision:"da2e684e354b39570e672eb89cb6c09f"},{url:"fonts/atomic.woff2",revision:"58271437740875d6cca779d91098c4a4"},{url:"googlee0d1fc8a4713db25.html",revision:"35ad108a3ba15d0f490a49b50efc3660"},{url:"img/drawn-x-logo.webp",revision:"0146f40f9c69be2d635f214c7ca3c664"},{url:"img/effects/background-old.webp",revision:"15e579c8a55b0e6e764ff3c93bc31b15"},{url:"img/effects/background.webp",revision:"73691c6fd1268da87e5ce786daf8b678"},{url:"img/event/combates.webp",revision:"e5460f5553c2013cb8bfac5c0638c803"},{url:"img/event/entradas.webp",revision:"a5772847f818117d264dddab883d0f2d"},{url:"img/event/evento.webp",revision:"b39df95f237a9068ab94ed1535c1e854"},{url:"img/event/pronosticos.webp",revision:"dbab812eccadba565bb6d7c37fb0c889"},{url:"img/flags/ar.webp",revision:"05c755e2794a1d9e767bf81a47c1751a"},{url:"img/flags/cl.webp",revision:"a4fce071230fb8a95ebf914734777305"},{url:"img/flags/co.webp",revision:"13566a79f412af93a86ca4db6d6b5ddd"},{url:"img/flags/do.webp",revision:"1820ec9e6afb1e44495f6c1ea28c44c0"},{url:"img/flags/es.webp",revision:"59ed602e652d1c40dffda35ad88f0d45"},{url:"img/flags/maskflag.webp",revision:"4c65a19fb9101ff72b83d87af0855a40"},{url:"img/flags/mx.webp",revision:"83cb09ca295d7e5103857a7e2c1b29ab"},{url:"img/fondo.png",revision:"e42e4655a6d5c18d8ea5c63018be0e1e"},{url:"img/icons/apple-touch-icon.png",revision:"931a7276119c6c39cc00c575be225111"},{url:"img/icons/favicon-114x114.png",revision:"dac97706f75a83e58c8c1632a2f06fb2"},{url:"img/icons/favicon-120x120.png",revision:"c0f45949bc22136e58f26eaae1b4cd7a"},{url:"img/icons/favicon-128x128.png",revision:"cd50239d0bd157c6ceda312943222a5d"},{url:"img/icons/favicon-144x144.png",revision:"4e8efec5ae8e1e24f11e36775ad8e73a"},{url:"img/icons/favicon-150x150.png",revision:"869bbdfc9c95e14af11de7ab3ac35e5f"},{url:"img/icons/favicon-152x152.png",revision:"fa6519c879bbe3c45dc327008b742f63"},{url:"img/icons/favicon-16x16.png",revision:"9261482d023fe9aa25543ea96f0a2fd0"},{url:"img/icons/favicon-180x180.png",revision:"892acb36b6463dd5d8d72ab118c3ad93"},{url:"img/icons/favicon-192x192.png",revision:"254c8ba74538d76c16b6735819c6a156"},{url:"img/icons/favicon-310x310.png",revision:"d0d46038d62279d135a32596ca38578e"},{url:"img/icons/favicon-32x32.png",revision:"fa756b27cab8355b368b581d438002bd"},{url:"img/icons/favicon-384x384.png",revision:"f6f5730561d661b709b2a2d35a028b81"},{url:"img/icons/favicon-512x512.png",revision:"3b3643ff15c40d61f1af4a8d4fff775b"},{url:"img/icons/favicon-57x57.png",revision:"5785c662a883729189d97c7d2c14c7fd"},{url:"img/icons/favicon-60x60.png",revision:"cfbfe376a593983ee4ddf9e5461424ed"},{url:"img/icons/favicon-70x70.png",revision:"71688539e899ff523dc39464691cb833"},{url:"img/icons/favicon-72x72.png",revision:"0fcc99aa85a6dfe47e16e7f21afc423d"},{url:"img/icons/favicon-76x76.png",revision:"e009307ce7ea0ef6984fd552edc335ff"},{url:"img/icons/favicon-96x96.png",revision:"bcdd163d9499a10cdcead7c358c486a6"},{url:"img/icons/favicon.png",revision:"45be76961d793c1d6640e6f8bd06ca8f"},{url:"img/logo.png",revision:"45be76961d793c1d6640e6f8bd06ca8f"},{url:"img/lvda.webp",revision:"b434178007fe6280adb9355e3df225f8"},{url:"img/og.jpg",revision:"3f2578722a9ae50529b3a0678560c0a2"},{url:"img/pelicula-principal.jpeg",revision:"d470dd3cf1d5da1d37fce0893e145f9f"},{url:"img/pronostico-background.webp",revision:"7c6342358242fbbf071b15ad34d2e811"},{url:"img/screenshots/desktop_1.jpg",revision:"4163f53d40856a7f514f470696fe7bee"},{url:"img/screenshots/desktop_2.jpg",revision:"74930dde988e8f03ab9a3a2ec720a847"},{url:"img/screenshots/mobile_1.jpg",revision:"0be320e60c253929137411f451419a42"},{url:"img/screenshots/mobile_2.jpg",revision:"5ea605cf4e5dfef86d688fa5a22b1d00"},{url:"img/siguiente-pelicula.jpeg",revision:"f8bfb6ae8e85a8c1b0d4c00dbcd889c0"},{url:"img/social/instagram.png",revision:"f578dfa5dbd045cbdb61dc2ce6515bb1"},{url:"img/social/tiktok.png",revision:"116492d1c59036715954f29bf110da45"},{url:"img/social/twitch.png",revision:"b5e43c105b4d7cfb7f6a1049f88a2eb2"},{url:"img/social/twitter.png",revision:"e1aa072cb512dc9130d16cee0e50b247"},{url:"img/social/youtube.png",revision:"bc0d4001bbdb873c92d44d8526de14fc"},{url:"img/sponsors/alsa.svg",revision:"dd908364bd55c49d6039e43e7c79d4c9"},{url:"img/sponsors/cerave.svg",revision:"6dd59899b62c03b3143f443cbc850d5f"},{url:"img/sponsors/el-pozo.svg",revision:"058ff45ffd540181695154a7260c9480"},{url:"img/sponsors/grefusa.svg",revision:"7d7a0149847d879965ffb3a3f7cbbdf5"},{url:"img/sponsors/infojobs.svg",revision:"1a0ede56f8c33c3b39bffa6236ab9aba"},{url:"img/sponsors/maxibon.svg",revision:"927473d95a532ed3782bb1f8a60c32e8"},{url:"img/sponsors/prime.svg",revision:"62472dd618cd1e8ad16733319b2e23b8"},{url:"img/sponsors/revolut.svg",revision:"981f7d8c0b4465ac8c95d4daeade5bf5"},{url:"img/sponsors/spotify.svg",revision:"bf482f0b43de5eadab77c51e25dbd69b"},{url:"img/sponsors/vicio.svg",revision:"c8a6c696bd1903ea98f52b1efc8072c5"},{url:"img/ui/left-arrow.svg",revision:"17eadc81e62b106978be81042b8a0787"},{url:"img/ui/right-arrow.svg",revision:"962b381ba3e9432812f9655c304af917"},{url:"img/video-presentation-cover.webp",revision:"4da9c50aa37023142c40b946b6c9c869"},{url:"js/add-to-calendar.js",revision:"780fcc95c2710df302dada1c93f4ea5b"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"img/icons/favicon.png",revision:"45be76961d793c1d6640e6f8bd06ca8f"},{url:"manifest.webmanifest",revision:"152e754b90a622b9e0497e5f72abe3c4"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(/\.(?:png|jpg|jpeg|svg|gif|webp|avif)$/,new e.CacheFirst({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:100,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\.(?:woff|woff2|ttf|eot|ico)$/,new e.CacheFirst({cacheName:"fonts",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:2592e3})]}),"GET")}));
