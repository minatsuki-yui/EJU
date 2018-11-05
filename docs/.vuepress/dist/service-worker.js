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
    "revision": "b8eb47ce3091b35995109611944782ca"
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
    "url": "assets/js/26.7f44f6b1.js",
    "revision": "8f4223626d547b2aba717e9a69c26685"
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
    "url": "assets/js/34.8ff889ab.js",
    "revision": "384a5b394670bbaff1fa691a20b45bf5"
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
    "url": "assets/js/44.eef77590.js",
    "revision": "bb604c25014834a95f01b0a2ef5bd97d"
  },
  {
    "url": "assets/js/45.43ee5412.js",
    "revision": "94a2ed7ef14699bfb62584a0f1b9d51b"
  },
  {
    "url": "assets/js/46.f791edc4.js",
    "revision": "5fb2dd5daa1e2f99de678c23e2e42567"
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
    "url": "assets/js/49.f3364b57.js",
    "revision": "ebe128ce42c1905eb96ae3c3ec3c269b"
  },
  {
    "url": "assets/js/5.1a02ca86.js",
    "revision": "608b30cced2aca23af487063b89b0913"
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
    "url": "assets/js/60.3e05f6d4.js",
    "revision": "cdea576beee542010ca331e60fb9183e"
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
    "url": "assets/js/app.4a578558.js",
    "revision": "9d6bbfdedbd90360de26f36f33ae7dfc"
  },
  {
    "url": "basic/alkali.html",
    "revision": "1e442c7ca4ee176c5232db5e3ad15206"
  },
  {
    "url": "basic/bond.html",
    "revision": "5104b46f5d239341010571b32a5539c2"
  },
  {
    "url": "basic/index.html",
    "revision": "1a5fd9474c389d5f2a7e807e42e830da"
  },
  {
    "url": "basic/lattice.html",
    "revision": "9c8c3b7180182909d98f33ad7ea5225c"
  },
  {
    "url": "basic/law.html",
    "revision": "059a2c43e21f7479a7af980cd39c1f33"
  },
  {
    "url": "basic/neutralization.html",
    "revision": "c9febf823fa78093b5bd685b20741f3a"
  },
  {
    "url": "basic/periodicTable.html",
    "revision": "021f91ca767c76fd6b020a64ec05cd00"
  },
  {
    "url": "basic/pHIndicator.html",
    "revision": "79d293b6f956ca62fc904e21305f063c"
  },
  {
    "url": "basic/pureSubstanceWithMixture.html",
    "revision": "6fa87f5eb7c41081bf4eb3ca5d7a221c"
  },
  {
    "url": "basic/redox.html",
    "revision": "71bb467ddb1bbab6f695dcf4119080dc"
  },
  {
    "url": "basic/shape.html",
    "revision": "3c11c06c03082533185a691a33095d80"
  },
  {
    "url": "basic/solution.html",
    "revision": "db5ea44d932521baabeed613fa3800a6"
  },
  {
    "url": "basic/titration.html",
    "revision": "cb408c1e31bee34ce51375bddd57c134"
  },
  {
    "url": "chemistry/Ag.html",
    "revision": "4d5781f18764f02b92ee22d6d12f8d7a"
  },
  {
    "url": "chemistry/Al.html",
    "revision": "a14ce421cbaf3ad77c391fd4af4ba495"
  },
  {
    "url": "chemistry/aminoAcid.html",
    "revision": "19472326d9d617dd4ab767a6cb1b0239"
  },
  {
    "url": "chemistry/aromatic.html",
    "revision": "386a1e03757bb91c6d2352a56e08e3d1"
  },
  {
    "url": "chemistry/aromaticWithN.html",
    "revision": "6c7e401254252148faf109a7006c2dd0"
  },
  {
    "url": "chemistry/aromaticWithO.html",
    "revision": "d854800594bad06a3cc55638d60299ef"
  },
  {
    "url": "chemistry/balance.html",
    "revision": "ed5cd16cf1a8cacb5094beb56b100961"
  },
  {
    "url": "chemistry/batteryWithElectrolysis.html",
    "revision": "7153e9ea980463fd739dfaeb85b0f56b"
  },
  {
    "url": "chemistry/burn.html",
    "revision": "702355b80bec587b29bf5a1f5a67b53e"
  },
  {
    "url": "chemistry/Ca.html",
    "revision": "88d4cd5bc8a0eaa61b8f7598784487b8"
  },
  {
    "url": "chemistry/carboxylicAcid.html",
    "revision": "dbac3190976b3ef02ec5b7430494f3ad"
  },
  {
    "url": "chemistry/Cl.html",
    "revision": "8393a345476cf17ad90e57270136dab0"
  },
  {
    "url": "chemistry/classification.html",
    "revision": "7c62ed676421db1fcbe021c34675e9d7"
  },
  {
    "url": "chemistry/colloid.html",
    "revision": "be12adf59a13b7f10704e9141557f23d"
  },
  {
    "url": "chemistry/Cu.html",
    "revision": "e7c5e9686cf5d6a7829d1bed895dc694"
  },
  {
    "url": "chemistry/disaccharide.html",
    "revision": "7ce457efdea9518e0582110c62ffd2f8"
  },
  {
    "url": "chemistry/elevationWithDepression.html",
    "revision": "dc9973c2c527522f3d15cad16902592d"
  },
  {
    "url": "chemistry/enzymeWithNucleicAcid.html",
    "revision": "2e983ced2cdc1ce4ec2bf13cb8285834"
  },
  {
    "url": "chemistry/fats.html",
    "revision": "4720076df6c0e2d74943e916147eb7bf"
  },
  {
    "url": "chemistry/Fe.html",
    "revision": "2fad307b0f7a6a89cf4abb7daf0d2607"
  },
  {
    "url": "chemistry/fiber.html",
    "revision": "f3abf8ced272bb0a8b97a4c048b3b136"
  },
  {
    "url": "chemistry/gas.html",
    "revision": "98e1f54e02bd39ab3d847a62061df746"
  },
  {
    "url": "chemistry/gom.html",
    "revision": "17e6bb2da981424c7c09a2b81a584862"
  },
  {
    "url": "chemistry/heat.html",
    "revision": "84dde287611f1acf12e9a2f33149f75a"
  },
  {
    "url": "chemistry/hydrocarbon.html",
    "revision": "b5ec0f71543204def396d594f3ea5dea"
  },
  {
    "url": "chemistry/index.html",
    "revision": "2988a4a5ec063ab16ee32e7a4e757cb8"
  },
  {
    "url": "chemistry/macromolecule.html",
    "revision": "854ba2ce1aea4c4ea7727675c4e319e6"
  },
  {
    "url": "chemistry/metal1.html",
    "revision": "eec6e106900ea529544b0d60355bb8cd"
  },
  {
    "url": "chemistry/metal2.html",
    "revision": "04ddcf6644cc55740f8957aa67e0ee52"
  },
  {
    "url": "chemistry/monosaccharide.html",
    "revision": "223e3c571ddc3709342f94c9fa881285"
  },
  {
    "url": "chemistry/Na.html",
    "revision": "8ba5feda9ac1e3dd8cf4fe0da93f387a"
  },
  {
    "url": "chemistry/nonmetal1.html",
    "revision": "ae33e6a1bfc8a4703c18be612adb22ea"
  },
  {
    "url": "chemistry/nonmetal2.html",
    "revision": "87e6467488664045aaab693070841782"
  },
  {
    "url": "chemistry/oxide.html",
    "revision": "05eea65c83fbeb840a32a5b114e5f838"
  },
  {
    "url": "chemistry/P.html",
    "revision": "b57f71a933969269f13a9e57c783b8ad"
  },
  {
    "url": "chemistry/plus.html",
    "revision": "7ea0e00e447d07659347be287ee2c3cf"
  },
  {
    "url": "chemistry/polysaccharide.html",
    "revision": "7c981f36836b0b7795e950de837fc439"
  },
  {
    "url": "chemistry/protein.html",
    "revision": "04a7eca0fa34ee3e3d0533ed48e322b6"
  },
  {
    "url": "chemistry/radical.html",
    "revision": "8e9bdabc9783076a42fda63a8bb2db83"
  },
  {
    "url": "chemistry/resin.html",
    "revision": "9a81a89d55591188664d8aa528f9d3b8"
  },
  {
    "url": "chemistry/S.html",
    "revision": "66558374b60b2df0805e3a451366d58b"
  },
  {
    "url": "chemistry/Si.html",
    "revision": "683ae31fe24ffd9ae41132ecc516565e"
  },
  {
    "url": "chemistry/SnWithPb.html",
    "revision": "705462a000f601e6055f6f888e6890f7"
  },
  {
    "url": "chemistry/Zn.html",
    "revision": "98dd4f22e48287326abd39049b2323fa"
  },
  {
    "url": "index.html",
    "revision": "ba728c1c3a5978f59bbf04caf8ec25d4"
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
