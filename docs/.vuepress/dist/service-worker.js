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
    "revision": "4ef76bdfd25eeabff5995880fd955334"
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
    "url": "assets/js/37.d015df25.js",
    "revision": "90908056ba98138a6eb8b0e57630ff84"
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
    "url": "assets/js/61.b0797085.js",
    "revision": "8876c0a7a2223246684d9dfe022ed357"
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
    "url": "assets/js/app.8e52f4a9.js",
    "revision": "6e7038ab97f215413583f6c33833f6a5"
  },
  {
    "url": "basic/alkali.html",
    "revision": "c68b409ee8898840aa9ce377b8d029ea"
  },
  {
    "url": "basic/bond.html",
    "revision": "24b7f31b4deed9a644bf23975259a70f"
  },
  {
    "url": "basic/index.html",
    "revision": "aa18f2f245f6b4ac709f91ab7a628128"
  },
  {
    "url": "basic/lattice.html",
    "revision": "dc37a529f85b0176908ad90acecaeec9"
  },
  {
    "url": "basic/law.html",
    "revision": "d2d5afd0a7163be34bce025fd2610962"
  },
  {
    "url": "basic/neutralization.html",
    "revision": "a4fe6418712761cff3781fcc5a80cfdc"
  },
  {
    "url": "basic/periodicTable.html",
    "revision": "b0197b1696781487abd91ecd24f2708a"
  },
  {
    "url": "basic/pHIndicator.html",
    "revision": "8db2561645a55f1dc23dd135f4a69096"
  },
  {
    "url": "basic/pureSubstanceWithMixture.html",
    "revision": "8dc19e468912f72be25c76539b270dc8"
  },
  {
    "url": "basic/redox.html",
    "revision": "16b705dc41c753627fe6b648433f0dc6"
  },
  {
    "url": "basic/shape.html",
    "revision": "6db96b86012439dec3fb22b08944aa3a"
  },
  {
    "url": "basic/solution.html",
    "revision": "7454789575739f69730589d9fd58f874"
  },
  {
    "url": "basic/titration.html",
    "revision": "f7380752ebfdf6347e723cecaf6aa10e"
  },
  {
    "url": "chemistry/Ag.html",
    "revision": "964ad3e5b5f4084d805abffcdaa151f1"
  },
  {
    "url": "chemistry/Al.html",
    "revision": "bf6887b1aafe11e95556b9615af89f98"
  },
  {
    "url": "chemistry/aminoAcid.html",
    "revision": "49daaeeca80139864a2892fbc5482605"
  },
  {
    "url": "chemistry/aromatic.html",
    "revision": "d8d6368b0f8c1d460746bd7f3d5fed32"
  },
  {
    "url": "chemistry/aromaticWithN.html",
    "revision": "3e637853c84ce05de09b4e85040a222a"
  },
  {
    "url": "chemistry/aromaticWithO.html",
    "revision": "6f058a6baae2bb6b8552fce5e55bd0d3"
  },
  {
    "url": "chemistry/balance.html",
    "revision": "fa390b1f8e7d0bd8b794bb3f497d3871"
  },
  {
    "url": "chemistry/batteryWithElectrolysis.html",
    "revision": "5ea9db93a22d640ce23d3fd993ebb22f"
  },
  {
    "url": "chemistry/burn.html",
    "revision": "d0020e6a6b4a143c484070b470d6140d"
  },
  {
    "url": "chemistry/Ca.html",
    "revision": "433984e79fad53b2fcc3912ab44e9334"
  },
  {
    "url": "chemistry/carboxylicAcid.html",
    "revision": "2924bf1de5e62b72aea1be2a091af5c0"
  },
  {
    "url": "chemistry/Cl.html",
    "revision": "be8b6bfb93afe4ff3f604591688c3438"
  },
  {
    "url": "chemistry/classification.html",
    "revision": "87c891b82994ec3a693f6259f055d1d6"
  },
  {
    "url": "chemistry/colloid.html",
    "revision": "3ac453b3f9a0df7adb0fcd2ad6603f07"
  },
  {
    "url": "chemistry/Cu.html",
    "revision": "01e68cb4d8c15f2072a73f24d25be6b2"
  },
  {
    "url": "chemistry/disaccharide.html",
    "revision": "52aeba9026d0678bd57d796761e1df03"
  },
  {
    "url": "chemistry/elevationWithDepression.html",
    "revision": "e3ec7fb201c77f71329e00801074a045"
  },
  {
    "url": "chemistry/enzymeWithNucleicAcid.html",
    "revision": "9c91686aac99169a409e6d691544442d"
  },
  {
    "url": "chemistry/fats.html",
    "revision": "a77b130ea07a57b5280a063dfa1a7254"
  },
  {
    "url": "chemistry/Fe.html",
    "revision": "43ff90223f2ab2d89ac313eafc008ce8"
  },
  {
    "url": "chemistry/fiber.html",
    "revision": "0f0d07b32176a0311a1e8b02faeef952"
  },
  {
    "url": "chemistry/gas.html",
    "revision": "4dc2035ded514eceb57b6b6bdfed0373"
  },
  {
    "url": "chemistry/gom.html",
    "revision": "88be509df74816302fb36fa1f22bca48"
  },
  {
    "url": "chemistry/heat.html",
    "revision": "3e4087a18345cb652d9b3e33fc772fa2"
  },
  {
    "url": "chemistry/hydrocarbon.html",
    "revision": "c28be134225280312ece2f4db681e724"
  },
  {
    "url": "chemistry/index.html",
    "revision": "94f29abd8e45f41c43daeb33cfec7b74"
  },
  {
    "url": "chemistry/macromolecule.html",
    "revision": "61f0977d6cb9a1070ce3c49a822f0e86"
  },
  {
    "url": "chemistry/metal1.html",
    "revision": "9c9085644749011f89971fd9d3086245"
  },
  {
    "url": "chemistry/metal2.html",
    "revision": "c8e36ece7467fed781e1b37bbf5fbccb"
  },
  {
    "url": "chemistry/monosaccharide.html",
    "revision": "19147fe38cabc8d1d577fa89081fec26"
  },
  {
    "url": "chemistry/Na.html",
    "revision": "8e47a43091712410b6e837687a21cd10"
  },
  {
    "url": "chemistry/nonmetal1.html",
    "revision": "8c7005c24f99938525326eaad530b2f3"
  },
  {
    "url": "chemistry/nonmetal2.html",
    "revision": "d64d77c2c71cdc0186a06cfb0a708825"
  },
  {
    "url": "chemistry/oxide.html",
    "revision": "59d1a7bc7a6913e2cd9918191909d3df"
  },
  {
    "url": "chemistry/P.html",
    "revision": "7312506ec1b7683f3ce286380246bf11"
  },
  {
    "url": "chemistry/plus.html",
    "revision": "5cdd071701435c50b9826372a3aad302"
  },
  {
    "url": "chemistry/polysaccharide.html",
    "revision": "c1d4dfe304fac6b08262cbbc7f6694d0"
  },
  {
    "url": "chemistry/protein.html",
    "revision": "84a3af073041332e8951e0d5aa4036ca"
  },
  {
    "url": "chemistry/radical.html",
    "revision": "5083b86e687c17e3bd6ad83e5f352711"
  },
  {
    "url": "chemistry/resin.html",
    "revision": "463cf02bfee030c9dca27d895a2eba16"
  },
  {
    "url": "chemistry/S.html",
    "revision": "06b7573f75cef36131de5bef0b51a4f2"
  },
  {
    "url": "chemistry/Si.html",
    "revision": "bb530fc4e6b183332965821ce79e4c85"
  },
  {
    "url": "chemistry/SnWithPb.html",
    "revision": "3dc10c830e86f1c49407a7605c7c6de1"
  },
  {
    "url": "chemistry/Zn.html",
    "revision": "a986e8a3395c6dc91646033b8ce73271"
  },
  {
    "url": "index.html",
    "revision": "4d55db60cc359e793b791bfbadf1517b"
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
