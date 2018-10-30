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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "a3c0afee7828f3f0bc49bbf98b51163a"
  },
  {
    "url": "assets/css/0.styles.cc2a2ebf.css",
    "revision": "6d079eb24adec22d599ddb69f525f6dd"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.600753a1.js",
    "revision": "65fc2073957b4a0dde865db688a6da94"
  },
  {
    "url": "assets/js/11.0be9133d.js",
    "revision": "fce8e9e33e2c1acbb0984aa8d58d071a"
  },
  {
    "url": "assets/js/12.8c1bc464.js",
    "revision": "20cbfe243a5a145a6b85b8fe7318801f"
  },
  {
    "url": "assets/js/13.40261a74.js",
    "revision": "5cd140070de5bbe391a37f8f72236a53"
  },
  {
    "url": "assets/js/14.c99a7328.js",
    "revision": "6dcbdcc0301fb092082e9baa7c0b3a3f"
  },
  {
    "url": "assets/js/15.e43f09fc.js",
    "revision": "18f94d8ccbacf4114cbcd280ec2b84a6"
  },
  {
    "url": "assets/js/16.628d0590.js",
    "revision": "7820081d377d36d400154bfe395b36d8"
  },
  {
    "url": "assets/js/17.c2fe12d0.js",
    "revision": "7155937c9c18a41948079a4c8a7a278b"
  },
  {
    "url": "assets/js/18.609d3216.js",
    "revision": "b0e86b4647618e6ec9291e71e0d09376"
  },
  {
    "url": "assets/js/19.0e7007db.js",
    "revision": "68f1ddd6bba62fb24e4c8b024559f16a"
  },
  {
    "url": "assets/js/2.285762ea.js",
    "revision": "93afbd4e91ed17280e84a6930dc81b17"
  },
  {
    "url": "assets/js/20.4d0319bd.js",
    "revision": "75253050b83a7137c0e6eb1ee495b9a1"
  },
  {
    "url": "assets/js/21.b270cc32.js",
    "revision": "02167a33959304922e1c175a5fed452e"
  },
  {
    "url": "assets/js/22.c53e57eb.js",
    "revision": "515883ec6fbe3aae737b492ffedc94bd"
  },
  {
    "url": "assets/js/23.9174c3db.js",
    "revision": "b04db2faf6d660f299b38363d23c3c81"
  },
  {
    "url": "assets/js/24.2dec52f6.js",
    "revision": "d12d1d516651ea52f0e341781b293a57"
  },
  {
    "url": "assets/js/25.60b75f5d.js",
    "revision": "bd942a007bbd85f6a5cc5673f706a2e5"
  },
  {
    "url": "assets/js/26.ee144c67.js",
    "revision": "61d0d5cd3e46059c9231e359bc85e328"
  },
  {
    "url": "assets/js/27.06895737.js",
    "revision": "7baf865919f051bb8ffcedeaa0ddf590"
  },
  {
    "url": "assets/js/28.c8700b32.js",
    "revision": "4e514751476985bfdfacd3c4078913e4"
  },
  {
    "url": "assets/js/29.7bb245fd.js",
    "revision": "3391a0fad4af9207ad3733a1477ccfe1"
  },
  {
    "url": "assets/js/3.6dda9b1b.js",
    "revision": "62743958309dab2c52ea9a790514ef3b"
  },
  {
    "url": "assets/js/30.8da16b29.js",
    "revision": "c305e4f509a59802129e903964d9e293"
  },
  {
    "url": "assets/js/31.0d6e8f41.js",
    "revision": "098e582fabe02770fb70e597ea9f0a6b"
  },
  {
    "url": "assets/js/32.9e49aa67.js",
    "revision": "d928c390e42c4772394b3c08606b1b98"
  },
  {
    "url": "assets/js/33.50e62ce4.js",
    "revision": "c4cf3553270489362a6e2bff019eb987"
  },
  {
    "url": "assets/js/34.eab0a07a.js",
    "revision": "21260896a353739e978e54004e8f390c"
  },
  {
    "url": "assets/js/35.27637876.js",
    "revision": "5cb3e0ce85b8242dc60040521308c89e"
  },
  {
    "url": "assets/js/36.83b51ebd.js",
    "revision": "c545a6a17db0e0b0f05e2427dc706d42"
  },
  {
    "url": "assets/js/37.90100cd8.js",
    "revision": "ba961fcb44ff2c68192b25db79ab3e20"
  },
  {
    "url": "assets/js/38.818430b7.js",
    "revision": "f51cb0edd1cc9ce764a2c27b3d397a97"
  },
  {
    "url": "assets/js/39.8cb66dba.js",
    "revision": "ba90549029587cdd0905432291d89292"
  },
  {
    "url": "assets/js/4.db5e6bd3.js",
    "revision": "df32fb483189ab866c6762e24d1f80ec"
  },
  {
    "url": "assets/js/40.783157ce.js",
    "revision": "ed6ba5ecf7704a7bd1135693d2e5cc53"
  },
  {
    "url": "assets/js/41.8faf9617.js",
    "revision": "310aca9819c26029e459c7e3490db902"
  },
  {
    "url": "assets/js/42.a05f9423.js",
    "revision": "4b81d0200dc092ad95adadd41b3317ec"
  },
  {
    "url": "assets/js/43.aaf8d4b2.js",
    "revision": "5fd582d0824f57d85c83a921e17458ea"
  },
  {
    "url": "assets/js/44.90b0cf1e.js",
    "revision": "bd6448f443ac303bc848ebfe9fd8c3df"
  },
  {
    "url": "assets/js/45.43ee5412.js",
    "revision": "94a2ed7ef14699bfb62584a0f1b9d51b"
  },
  {
    "url": "assets/js/46.5fcaaf1e.js",
    "revision": "f6753f90037d56cf8b630ed1ac385143"
  },
  {
    "url": "assets/js/47.59451502.js",
    "revision": "157b3fd7a94ee620b8b4b3ddee6d7add"
  },
  {
    "url": "assets/js/48.6017fcdf.js",
    "revision": "855078891c830e412f1931ce44520d13"
  },
  {
    "url": "assets/js/49.d006aae8.js",
    "revision": "ce7dd67317adfeabc298a6475b77f54c"
  },
  {
    "url": "assets/js/5.ade4ecf6.js",
    "revision": "0e5e24b8158bde4e8191b1b6fe7e334f"
  },
  {
    "url": "assets/js/50.aaec7dcd.js",
    "revision": "3b157a05033b798a38257f31b7112856"
  },
  {
    "url": "assets/js/51.f62fbade.js",
    "revision": "49cd9d27e16e342de39608b372b5735e"
  },
  {
    "url": "assets/js/52.46b20674.js",
    "revision": "0c1e7d5f5e236a9678a493f52ac4aeec"
  },
  {
    "url": "assets/js/53.05962b42.js",
    "revision": "c0757707059a2cf51a56107c8b323881"
  },
  {
    "url": "assets/js/54.4921b98f.js",
    "revision": "5b9e41103892e3c25ec28dde047d3fa0"
  },
  {
    "url": "assets/js/55.80e9eaec.js",
    "revision": "b15f663a5ff5ae4061928f18257ed619"
  },
  {
    "url": "assets/js/56.8a289bcb.js",
    "revision": "a7dd71f1fbb65e40725f728685ce6931"
  },
  {
    "url": "assets/js/57.0df509ac.js",
    "revision": "64dd7f905c14379f2a826261d6bb8360"
  },
  {
    "url": "assets/js/58.dae4f3ab.js",
    "revision": "0fefe517a5fcce0e1026c48aed367449"
  },
  {
    "url": "assets/js/59.46f80f42.js",
    "revision": "08dfb828320d4ebb7896529c74ca35a5"
  },
  {
    "url": "assets/js/6.52625070.js",
    "revision": "a2f9e1457a50011fb27b74eddd553808"
  },
  {
    "url": "assets/js/60.64540585.js",
    "revision": "6838822d8eda096e867ca35e1c31e898"
  },
  {
    "url": "assets/js/61.ffa08ff4.js",
    "revision": "a929b71c7f56ba85786a1a8559db6cd7"
  },
  {
    "url": "assets/js/7.191dfcc9.js",
    "revision": "371ddf387d294c45946900fd45dbd0ce"
  },
  {
    "url": "assets/js/8.11cce632.js",
    "revision": "24d533cbcf6b596e23492d354fb81966"
  },
  {
    "url": "assets/js/9.4ccb8999.js",
    "revision": "fc325b3dbffb2ed5801c4dff6e3a10b2"
  },
  {
    "url": "assets/js/app.49c7db9d.js",
    "revision": "8cfcd634766c689aced5f3afeed61888"
  },
  {
    "url": "basic/alkali.html",
    "revision": "55d68d3cfd6def35c91f3d6bbfa74a30"
  },
  {
    "url": "basic/bond.html",
    "revision": "973f0b1826934fbc305605b4f67905fa"
  },
  {
    "url": "basic/index.html",
    "revision": "acdff8cd60327371a1de82ad8d3170a7"
  },
  {
    "url": "basic/lattice.html",
    "revision": "d57e068b22d198dc02e7cd1dacd20844"
  },
  {
    "url": "basic/law.html",
    "revision": "dff8fed808cac1110d9debe77c31311a"
  },
  {
    "url": "basic/neutralization.html",
    "revision": "3538ead51d2d06e40407da2705b0bd45"
  },
  {
    "url": "basic/periodicTable.html",
    "revision": "2e45880332d8a4a78999441f73f4f8e0"
  },
  {
    "url": "basic/pHIndicator.html",
    "revision": "a85fd9e77be661d009044f22f81e78f3"
  },
  {
    "url": "basic/pureSubstanceWithMixture.html",
    "revision": "f05eda74a50d3bbc81e830765cf2b746"
  },
  {
    "url": "basic/redox.html",
    "revision": "ea53144145a006b33da6773d91f9553d"
  },
  {
    "url": "basic/shape.html",
    "revision": "a437e468bee0203fa457fb0c8e4204be"
  },
  {
    "url": "basic/solution.html",
    "revision": "241e9a9ed9abb29f663571c4a5f5bdfb"
  },
  {
    "url": "basic/titration.html",
    "revision": "42ef9a1d98d9e58eeb02bdfbf0868b6c"
  },
  {
    "url": "chemistry/Ag.html",
    "revision": "3b2aea0aab2d856b6da89da0b2ee5781"
  },
  {
    "url": "chemistry/Al.html",
    "revision": "7fa98f95288825a479486eccc70ec8da"
  },
  {
    "url": "chemistry/aminoAcid.html",
    "revision": "4812c094d5d4c47504c084addcfd1fb2"
  },
  {
    "url": "chemistry/aromatic.html",
    "revision": "65247f5e94a2820a825c0c88329d3169"
  },
  {
    "url": "chemistry/aromaticWithN.html",
    "revision": "19c7f78a861d1b307640e1d1cee66da0"
  },
  {
    "url": "chemistry/aromaticWithO.html",
    "revision": "4593e1d38ada90d02b157984ee36b6b6"
  },
  {
    "url": "chemistry/balance.html",
    "revision": "a4c2a1d8627103387e1af421da9c354e"
  },
  {
    "url": "chemistry/batteryWithElectrolysis.html",
    "revision": "a4f731d97fae1eab2695c2b24a61d3a3"
  },
  {
    "url": "chemistry/burn.html",
    "revision": "0853da74cfb385350b8a4d04c3d273f8"
  },
  {
    "url": "chemistry/Ca.html",
    "revision": "0e2941e85f0b8b413ac7ea5cbd643885"
  },
  {
    "url": "chemistry/carboxylicAcid.html",
    "revision": "8d92825f5d3bf03f0f2d7752731b9e1c"
  },
  {
    "url": "chemistry/Cl.html",
    "revision": "da7e3df24198531b21141741e9e48c66"
  },
  {
    "url": "chemistry/classification.html",
    "revision": "fd01fcab53e1ad18bc0d496bc95fa68f"
  },
  {
    "url": "chemistry/colloid.html",
    "revision": "ed99b3c788e4943f86b48a48823baa3f"
  },
  {
    "url": "chemistry/Cu.html",
    "revision": "e4fcd66b7d420632a570734f798f66f6"
  },
  {
    "url": "chemistry/disaccharide.html",
    "revision": "bbb2cb8d762a42b4b128aef0bcbed6c7"
  },
  {
    "url": "chemistry/elevationWithDepression.html",
    "revision": "152183931ca4ec610145c63976ece69c"
  },
  {
    "url": "chemistry/enzymeWithNucleicAcid.html",
    "revision": "6cbb88fe9f5cc08302dfd03a12f0e0a6"
  },
  {
    "url": "chemistry/fats.html",
    "revision": "9eedb98854149ded2bea996ca23c9674"
  },
  {
    "url": "chemistry/Fe.html",
    "revision": "7b9403455e46654aedc79f0e227c16eb"
  },
  {
    "url": "chemistry/fiber.html",
    "revision": "c3b8776c149d77ce66a21a63ad5eb918"
  },
  {
    "url": "chemistry/gas.html",
    "revision": "43338254a57c3ff76f0db9dbbeb02372"
  },
  {
    "url": "chemistry/gom.html",
    "revision": "7868605248f10b22e01224c903657c2e"
  },
  {
    "url": "chemistry/heat.html",
    "revision": "0a929ec4e0d95095f51dea4568f42ad6"
  },
  {
    "url": "chemistry/hydrocarbon.html",
    "revision": "6372ffb563c8d413dcbb4e9442971e92"
  },
  {
    "url": "chemistry/index.html",
    "revision": "20312576df460dee71967442309dde93"
  },
  {
    "url": "chemistry/macromolecule.html",
    "revision": "14029944f4e3528e822069a4cb3c829a"
  },
  {
    "url": "chemistry/metal1.html",
    "revision": "8d411595f44895c80f8cd254dfc3de59"
  },
  {
    "url": "chemistry/metal2.html",
    "revision": "ab77b6edaa5a55567a891c386358deee"
  },
  {
    "url": "chemistry/monosaccharide.html",
    "revision": "e0055d76bbd2be99a18b50003581dc1d"
  },
  {
    "url": "chemistry/Na.html",
    "revision": "d7b3d36902a1aef8998b97dbda5ffc8d"
  },
  {
    "url": "chemistry/nonmetal1.html",
    "revision": "133e5c88127e218c4af5facea2c570ac"
  },
  {
    "url": "chemistry/nonmetal2.html",
    "revision": "3cef4a94d7f0fb04b021ebb7fbba7603"
  },
  {
    "url": "chemistry/oxide.html",
    "revision": "c99df91186181e41d0ec6e42c21ad03c"
  },
  {
    "url": "chemistry/P.html",
    "revision": "d0c64eaed64faa19fff025dbbe775319"
  },
  {
    "url": "chemistry/plus.html",
    "revision": "8d7ba5f7af27ee6fa1f64d2e928feb72"
  },
  {
    "url": "chemistry/polysaccharide.html",
    "revision": "4fba653bfde9ad138bf188b670f3f4b2"
  },
  {
    "url": "chemistry/protein.html",
    "revision": "ff5eb6e6cef69cb605346bb7f6a74532"
  },
  {
    "url": "chemistry/radical.html",
    "revision": "bb3776e1027bfc272dba115f9273c568"
  },
  {
    "url": "chemistry/resin.html",
    "revision": "e2abaca45f7f7bfe9f99d89d1cf43848"
  },
  {
    "url": "chemistry/S.html",
    "revision": "d9aad1f90ce427c1633cffecc4c0a697"
  },
  {
    "url": "chemistry/Si.html",
    "revision": "357aeb573faf18a5977d626296cf552b"
  },
  {
    "url": "chemistry/SnWithPb.html",
    "revision": "3c0e5779cd5cbc99a9d27b589bde0975"
  },
  {
    "url": "chemistry/Zn.html",
    "revision": "238100925909a744dfbf1c64ee87def0"
  },
  {
    "url": "index.html",
    "revision": "3bd6011345c42bdfa5cc452732ef5eb6"
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
