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
    "revision": "d4410d08b79cc80ad3b75290480fa0c1"
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
    "url": "assets/js/10.f0c94b0a.js",
    "revision": "4ccda801d6b2302c2a178cc9b5bf0f8f"
  },
  {
    "url": "assets/js/11.17f81279.js",
    "revision": "39d468ef4b77832c3cebaab2def9e9ae"
  },
  {
    "url": "assets/js/12.926b25a7.js",
    "revision": "b3ac128a3c70a637cf3b03f51b9bfe12"
  },
  {
    "url": "assets/js/13.53341269.js",
    "revision": "870de7a3af32942b98a0133849cffc1a"
  },
  {
    "url": "assets/js/14.b8e3dab9.js",
    "revision": "0efbffff3c8eefbbd858bcfdf4f9d90b"
  },
  {
    "url": "assets/js/15.91e32b65.js",
    "revision": "04274ce29a57e81632c5d49c05eb7966"
  },
  {
    "url": "assets/js/16.193843c3.js",
    "revision": "092692ef49dacf4c855863e0ed3955d7"
  },
  {
    "url": "assets/js/17.186a4439.js",
    "revision": "e221ea0e0be880e3141f971a8c0637aa"
  },
  {
    "url": "assets/js/18.0cc821a8.js",
    "revision": "7ca3da19f4ac6f7db6eb6702e748641b"
  },
  {
    "url": "assets/js/19.0c091f9d.js",
    "revision": "af3e7441d1875176f0b9c160847558e4"
  },
  {
    "url": "assets/js/2.285762ea.js",
    "revision": "93afbd4e91ed17280e84a6930dc81b17"
  },
  {
    "url": "assets/js/20.efa977d7.js",
    "revision": "0a110a5e772eb5e0674fd100959beb6e"
  },
  {
    "url": "assets/js/21.ca8f135c.js",
    "revision": "f558cf5c8ad919c28f43043f320cbc84"
  },
  {
    "url": "assets/js/22.26e9d6f9.js",
    "revision": "58267857d088b668d71e89b9d66f882c"
  },
  {
    "url": "assets/js/23.7fa534e0.js",
    "revision": "84b62ee5fee7e7509dfb1dd7e3baf271"
  },
  {
    "url": "assets/js/24.8eea6d68.js",
    "revision": "4e7f9182af2470931ea13f07476a2b02"
  },
  {
    "url": "assets/js/25.91e205f8.js",
    "revision": "a70ddeb4b643eca54c5dd3f93dcbc824"
  },
  {
    "url": "assets/js/26.4045a506.js",
    "revision": "a57b38cdb3b6870fc0899c937aaf18cc"
  },
  {
    "url": "assets/js/27.97d6a759.js",
    "revision": "71d3850c5108b0f481a7aefb5a0e9266"
  },
  {
    "url": "assets/js/28.2a49a539.js",
    "revision": "f45df669ed744fa2025210febfd0acca"
  },
  {
    "url": "assets/js/29.6d1c169a.js",
    "revision": "8ae652baaedd5bdeb45a347a8e8ba4c0"
  },
  {
    "url": "assets/js/3.6dda9b1b.js",
    "revision": "62743958309dab2c52ea9a790514ef3b"
  },
  {
    "url": "assets/js/30.2635a241.js",
    "revision": "a3dbe83652b6f0dedf2d7bd780659289"
  },
  {
    "url": "assets/js/31.42ee8796.js",
    "revision": "a288885e7ffe7122b1f1a93e8fff155d"
  },
  {
    "url": "assets/js/32.9f5fed70.js",
    "revision": "154c8650fffab66c81887ccfbe2806a9"
  },
  {
    "url": "assets/js/33.0bcb1440.js",
    "revision": "58efd622dceeac3cfcebd2df9d166f54"
  },
  {
    "url": "assets/js/34.8984d09b.js",
    "revision": "9fe2dfd03e2f7907a38303bca2889676"
  },
  {
    "url": "assets/js/35.d7c47531.js",
    "revision": "67d9fab468095cde071b41e161abb784"
  },
  {
    "url": "assets/js/36.58da992f.js",
    "revision": "09bd5b86c0f8cade17a3e94c47706fb5"
  },
  {
    "url": "assets/js/37.3fc33a17.js",
    "revision": "139c5fe6a677d0ebfc09af3b02446824"
  },
  {
    "url": "assets/js/38.925f0d8d.js",
    "revision": "d5414ea7a6bd3f1a8d9ef96984efecf5"
  },
  {
    "url": "assets/js/39.1ecf4860.js",
    "revision": "aa1766039565542b18a16c36f86c5d5f"
  },
  {
    "url": "assets/js/4.db5e6bd3.js",
    "revision": "df32fb483189ab866c6762e24d1f80ec"
  },
  {
    "url": "assets/js/40.ef24019d.js",
    "revision": "75936d6d313be5b8f2254c0edaf02587"
  },
  {
    "url": "assets/js/41.27d8b57e.js",
    "revision": "cba46ea791411d4989a85935dfdfee1e"
  },
  {
    "url": "assets/js/42.575c824d.js",
    "revision": "1dee2b27d9e9713705ffebd6c2cceeb6"
  },
  {
    "url": "assets/js/43.cda1599f.js",
    "revision": "c05c0511cc2fd981f5c38fb355b0c8c5"
  },
  {
    "url": "assets/js/44.2cdb1d02.js",
    "revision": "ca9176fd3180f096b224536fb345c272"
  },
  {
    "url": "assets/js/45.71b4adf6.js",
    "revision": "600c69fc25193bd4b9c590663685fa84"
  },
  {
    "url": "assets/js/46.03c21ca5.js",
    "revision": "12369c75f6bde5126e62298cebc1e21c"
  },
  {
    "url": "assets/js/47.befd098c.js",
    "revision": "99e5457babd70af8e50eccff00a11f3b"
  },
  {
    "url": "assets/js/48.dbea6dea.js",
    "revision": "d7b7b0774027ecaf3a737b37a071787f"
  },
  {
    "url": "assets/js/49.b88ffce2.js",
    "revision": "183dce8e73cf0190336cbcd1116e5606"
  },
  {
    "url": "assets/js/5.80936c48.js",
    "revision": "b7a7804fd5e5693155d7d40045e88888"
  },
  {
    "url": "assets/js/50.4be4258b.js",
    "revision": "a9d2faa886d55b477f65c2dbe09d62dc"
  },
  {
    "url": "assets/js/51.df425c06.js",
    "revision": "e6260b739febb8a5925f0e76fde7e6fe"
  },
  {
    "url": "assets/js/52.436e82ff.js",
    "revision": "b7aec882c46f73ab96ec753b2a8defbe"
  },
  {
    "url": "assets/js/53.50b9cd56.js",
    "revision": "27ef8e57e12426a082208a630537ca12"
  },
  {
    "url": "assets/js/54.aef8c660.js",
    "revision": "38593ac3ab0802bd6354e0e1f7d02764"
  },
  {
    "url": "assets/js/55.1cad669e.js",
    "revision": "066a1f345e5fdc174b1b36e04ea89e28"
  },
  {
    "url": "assets/js/56.e632b4f3.js",
    "revision": "2df615113ecf66bbe6ba09130f401d57"
  },
  {
    "url": "assets/js/57.e9cdd824.js",
    "revision": "8f29a6127bee18d7d7fd75cf99418643"
  },
  {
    "url": "assets/js/58.416ec205.js",
    "revision": "ca665bea2100ee78409e851b4f6c94b7"
  },
  {
    "url": "assets/js/59.f84601e2.js",
    "revision": "feac4d4007833738f75e71550fc9c0d7"
  },
  {
    "url": "assets/js/6.95034857.js",
    "revision": "45ca8f9093307f6f47115c75b63f8f02"
  },
  {
    "url": "assets/js/7.5836a9fd.js",
    "revision": "cbcb92af4780417b08bb491694fa6f0d"
  },
  {
    "url": "assets/js/8.29d27a56.js",
    "revision": "3ca043cec5ce13702969b5de13645efc"
  },
  {
    "url": "assets/js/9.dadb9601.js",
    "revision": "cf1e6840f3628c425be0d43587b6e14f"
  },
  {
    "url": "assets/js/app.251bd808.js",
    "revision": "7bf74f79f9a616314989425b378eab59"
  },
  {
    "url": "basic/alkali.html",
    "revision": "5267250e6144a6c425a0cee8c8e97020"
  },
  {
    "url": "basic/bond.html",
    "revision": "27d987fd3dffb56b77571336f0210715"
  },
  {
    "url": "basic/lattice.html",
    "revision": "dcf98771dcaaf35628114cf76a451306"
  },
  {
    "url": "basic/law.html",
    "revision": "9e74e23fea738106c9c557150195b9ab"
  },
  {
    "url": "basic/neutralization.html",
    "revision": "070981d4f14cf2c9b56b1526a1661fe0"
  },
  {
    "url": "basic/periodicTable.html",
    "revision": "bc563158fec6b07f766b746ac771d340"
  },
  {
    "url": "basic/pHIndicator.html",
    "revision": "811e0cc84f7ffe735242d787bb6ef945"
  },
  {
    "url": "basic/pureSubstanceWithMixture.html",
    "revision": "b9a2bcafb3809d72921f7d4818cb9829"
  },
  {
    "url": "basic/redox.html",
    "revision": "9d23a9fa78f7505498c85e8c9dd3bd61"
  },
  {
    "url": "basic/shape.html",
    "revision": "98e612d7cbe6fa000a30ef153f6da2c3"
  },
  {
    "url": "basic/solution.html",
    "revision": "bc4b009da8410da5d645e98716586507"
  },
  {
    "url": "basic/titration.html",
    "revision": "4fb776f3824f49d33f2c65653d182018"
  },
  {
    "url": "chemistry/Ag.html",
    "revision": "aed0cbef609f0b467c234fa2b6ee1125"
  },
  {
    "url": "chemistry/Al.html",
    "revision": "6fee94f29274d1f071642bea71080ae4"
  },
  {
    "url": "chemistry/aminoAcid.html",
    "revision": "fdfb8238da39d012edc02daff1f52631"
  },
  {
    "url": "chemistry/aromatic.html",
    "revision": "73b7255d76745fa2da913ea2551d7b00"
  },
  {
    "url": "chemistry/aromaticWithN.html",
    "revision": "35d1a3a6e50d66287de6559765a5b018"
  },
  {
    "url": "chemistry/aromaticWithO.html",
    "revision": "2b4beb7331496d9398db3949ad1f0d59"
  },
  {
    "url": "chemistry/balance.html",
    "revision": "2d67d6c1a5261ea89b2de79952eae99e"
  },
  {
    "url": "chemistry/batteryWithElectrolysis.html",
    "revision": "062e28b6ae1fe230c141ba9a3f9e5c14"
  },
  {
    "url": "chemistry/burn.html",
    "revision": "cdbe0d47a2096925f63ade185bb57eae"
  },
  {
    "url": "chemistry/Ca.html",
    "revision": "d9aac115224538f2e97122969c92822a"
  },
  {
    "url": "chemistry/carboxylicAcid.html",
    "revision": "3e1e53f0e405abd40fe90ecd73cb8ce3"
  },
  {
    "url": "chemistry/Cl.html",
    "revision": "f7378c23dbc304cc49831d3efde2938f"
  },
  {
    "url": "chemistry/classification.html",
    "revision": "78c72ff7e36267aed24b957287b38f8c"
  },
  {
    "url": "chemistry/colloid.html",
    "revision": "bb38cc3c9f8835e01b03cc4dce52845c"
  },
  {
    "url": "chemistry/Cu.html",
    "revision": "dd599664f0f8a0f8e05ca315cf8fba24"
  },
  {
    "url": "chemistry/disaccharide.html",
    "revision": "05074b8156b25fbd20c47cf4f60a0547"
  },
  {
    "url": "chemistry/elevationWithDepression.html",
    "revision": "d86775e8f151abb4a4e1d47a7acff1fe"
  },
  {
    "url": "chemistry/enzymeWithNucleicAcid.html",
    "revision": "4956afc4a4820ed14b11df16bfca6043"
  },
  {
    "url": "chemistry/fats.html",
    "revision": "e956b61385cac3f767ad86a2dd31d9e4"
  },
  {
    "url": "chemistry/Fe.html",
    "revision": "0f12cc847f2b671268fd7431271e417c"
  },
  {
    "url": "chemistry/fiber.html",
    "revision": "c7d453af163498eac855feebfbaeac72"
  },
  {
    "url": "chemistry/gas.html",
    "revision": "fe4deaf955d9eb1fc860d0a94d14d155"
  },
  {
    "url": "chemistry/gom.html",
    "revision": "2b4244489408796cbd12bb59ec9983a3"
  },
  {
    "url": "chemistry/heat.html",
    "revision": "b4b51a842f50bbb84888ece916621a66"
  },
  {
    "url": "chemistry/hydrocarbon.html",
    "revision": "835786f9557f4c22a1d57fda4e9b57f4"
  },
  {
    "url": "chemistry/macromolecule.html",
    "revision": "bc2d121d3ff94cb718bf81549f056551"
  },
  {
    "url": "chemistry/metal1.html",
    "revision": "bf428d0f6c3b21e855515ce682ba766b"
  },
  {
    "url": "chemistry/metal2.html",
    "revision": "150e2b837c9b14ee2f638894e9d03e32"
  },
  {
    "url": "chemistry/monosaccharide.html",
    "revision": "ee670fd47cbb9420101d478829692387"
  },
  {
    "url": "chemistry/Na.html",
    "revision": "9748768437b86cb89c0b508535e61997"
  },
  {
    "url": "chemistry/nonmetal1.html",
    "revision": "a8cbb9d56450b394e224f3e81f050dee"
  },
  {
    "url": "chemistry/nonmetal2.html",
    "revision": "e6e8cdfeb9e16914cf1a4f06981dab8a"
  },
  {
    "url": "chemistry/oxide.html",
    "revision": "033b7c20ef9f1a64819aa532bf082bd7"
  },
  {
    "url": "chemistry/P.html",
    "revision": "eaa0d145ecd5ee6c18951d2851e8d6e8"
  },
  {
    "url": "chemistry/plus.html",
    "revision": "2bc2666c40d60e51f285b2588c52c5eb"
  },
  {
    "url": "chemistry/polysaccharide.html",
    "revision": "d0f10d7b5f355dcfd991a7eaef11e9d8"
  },
  {
    "url": "chemistry/protein.html",
    "revision": "bcb94f56f1a956e063ef422ba0159bc3"
  },
  {
    "url": "chemistry/radical.html",
    "revision": "5331923b227f33c8af22051bd4c941a1"
  },
  {
    "url": "chemistry/resin.html",
    "revision": "1b875b8c321e017140586bf8c3847684"
  },
  {
    "url": "chemistry/S.html",
    "revision": "e6c637a79e1466178b9e5fbbb7fca5b1"
  },
  {
    "url": "chemistry/Si.html",
    "revision": "7514d0d0ca8cae7868f460a778faac25"
  },
  {
    "url": "chemistry/SnWithPb.html",
    "revision": "f163e52da82372bc9af2f6e5266e57e7"
  },
  {
    "url": "chemistry/Zn.html",
    "revision": "d5ce4c3947e563c7a0a37ec522fad460"
  },
  {
    "url": "index.html",
    "revision": "9fc7c22a7d1eb835650a973eb1919375"
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
