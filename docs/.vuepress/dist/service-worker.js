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
    "revision": "75833794d6f0a396ad0c7ee2da77278f"
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
    "url": "assets/js/13.fd53e119.js",
    "revision": "0bcac139d36bfb850b594a7901443241"
  },
  {
    "url": "assets/js/14.1701ea16.js",
    "revision": "5d06b87d648364d2c6c8bc26fa867e13"
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
    "url": "assets/js/22.a4b49dfc.js",
    "revision": "5de8558af70f5772f6a54af6f03bee34"
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
    "url": "assets/js/37.129cca00.js",
    "revision": "90cce79abf16ab35f2b0788d7eca841d"
  },
  {
    "url": "assets/js/38.81040eab.js",
    "revision": "0d9f0f48c26d61c0a579ac166e46f2b2"
  },
  {
    "url": "assets/js/39.cc3abc90.js",
    "revision": "65dbcf051a3bf27074ed8566cf4dc58a"
  },
  {
    "url": "assets/js/4.db5e6bd3.js",
    "revision": "df32fb483189ab866c6762e24d1f80ec"
  },
  {
    "url": "assets/js/40.9fe29a5a.js",
    "revision": "0d24d94389c8b69b653046c10a50cdc6"
  },
  {
    "url": "assets/js/41.90cf1c28.js",
    "revision": "fddb715bdba971449047408909c751a0"
  },
  {
    "url": "assets/js/42.b2c4186c.js",
    "revision": "12ac325e67f4074db19d026c61df5700"
  },
  {
    "url": "assets/js/43.72ce18bf.js",
    "revision": "d31d1ec970e26ef4a56f2f96575de6cb"
  },
  {
    "url": "assets/js/44.b4332178.js",
    "revision": "2d4edea97fd0444aff7963258944695c"
  },
  {
    "url": "assets/js/45.42240794.js",
    "revision": "f2f8064c91b2ce9b0b322eaa3b59bd52"
  },
  {
    "url": "assets/js/46.8353df53.js",
    "revision": "e858de5e5314c9b9b4cb45f296eea469"
  },
  {
    "url": "assets/js/47.52a4f252.js",
    "revision": "7c2732c30c4d3828e2aa4d9f4a83aace"
  },
  {
    "url": "assets/js/48.41b457e4.js",
    "revision": "c1099ec3efae6246de6979ec591fd5ee"
  },
  {
    "url": "assets/js/49.96cc9c77.js",
    "revision": "97137a9eb5e6521a1b6cd86713b71064"
  },
  {
    "url": "assets/js/5.ade4ecf6.js",
    "revision": "0e5e24b8158bde4e8191b1b6fe7e334f"
  },
  {
    "url": "assets/js/50.86f34c13.js",
    "revision": "7623603e91fc1adcda5d6c13dd33add2"
  },
  {
    "url": "assets/js/51.52bcff60.js",
    "revision": "e81852be6c0e871443300c1ead866919"
  },
  {
    "url": "assets/js/52.5d45701b.js",
    "revision": "b79f3dd8f479e4c25ee79c22b17cbc00"
  },
  {
    "url": "assets/js/53.0d48e58f.js",
    "revision": "5add35a3ec19d611170607e065eb233f"
  },
  {
    "url": "assets/js/54.d371be51.js",
    "revision": "9ac0b2c2a617a65cad2b8100df9548ac"
  },
  {
    "url": "assets/js/55.da01086e.js",
    "revision": "4b66fc0cb0709745958fded9bf18985f"
  },
  {
    "url": "assets/js/56.0e495d8a.js",
    "revision": "974afa3dac339d10b4110bbeb05dc93c"
  },
  {
    "url": "assets/js/57.f7eda35d.js",
    "revision": "00c5071b7df167a2e2e32d4126b99f2f"
  },
  {
    "url": "assets/js/58.882652e7.js",
    "revision": "2937bcfa5ad6e636ea7236cdf82e4837"
  },
  {
    "url": "assets/js/59.7ca55e5d.js",
    "revision": "b76df5e94608686b07362fc21ec8769f"
  },
  {
    "url": "assets/js/6.52625070.js",
    "revision": "a2f9e1457a50011fb27b74eddd553808"
  },
  {
    "url": "assets/js/60.b2eae191.js",
    "revision": "9c5dc9ab13b623c4c3b893ad002f6a60"
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
    "url": "assets/js/app.740380c9.js",
    "revision": "00a45fc9dd14b0c237492e7f6a97295e"
  },
  {
    "url": "basic/alkali.html",
    "revision": "4a73343c6e5b242621b83222c9511a2b"
  },
  {
    "url": "basic/bond.html",
    "revision": "2d1f8ecb393b45b17fa0a6f2fc08896f"
  },
  {
    "url": "basic/index.html",
    "revision": "65b39cfb186a9f9d98f1fddcbce47bba"
  },
  {
    "url": "basic/lattice.html",
    "revision": "2daf202e7ba805a3ae1bc09d8e77431d"
  },
  {
    "url": "basic/law.html",
    "revision": "b81bab59edc934e8b1d4a96e6ae3aa78"
  },
  {
    "url": "basic/neutralization.html",
    "revision": "a9c7079325107cc597e343fe37a9d3d6"
  },
  {
    "url": "basic/periodicTable.html",
    "revision": "c3b206b11fa9ce186ad77e1643294960"
  },
  {
    "url": "basic/pHIndicator.html",
    "revision": "37318be02ba7f7c02f8ff5ef5d114511"
  },
  {
    "url": "basic/pureSubstanceWithMixture.html",
    "revision": "4f73bfd30db6d6b74ff5788aba2b8677"
  },
  {
    "url": "basic/redox.html",
    "revision": "3078eb080bbd460cc6c0d1341174ed2a"
  },
  {
    "url": "basic/shape.html",
    "revision": "0c040d9e1bf8898c92db23e68c6bf250"
  },
  {
    "url": "basic/solution.html",
    "revision": "473a276c0106136bba3c54ef39a14560"
  },
  {
    "url": "basic/titration.html",
    "revision": "e6820ff8a880b44f55990d63c76171ec"
  },
  {
    "url": "chemistry/Ag.html",
    "revision": "971f8d35fe2ba90852f46675a3b16e77"
  },
  {
    "url": "chemistry/Al.html",
    "revision": "68dfa7b47708a9eb5788154f12f24a7e"
  },
  {
    "url": "chemistry/aminoAcid.html",
    "revision": "95980b822666dadf7b48c1183730e6b4"
  },
  {
    "url": "chemistry/aromatic.html",
    "revision": "bc4a0db6756f4a3854ee29810f127dac"
  },
  {
    "url": "chemistry/aromaticWithN.html",
    "revision": "5b3e09d35398d2a50898331b74cae00f"
  },
  {
    "url": "chemistry/aromaticWithO.html",
    "revision": "aac18216e812c3a7e77ff7f8432d62c2"
  },
  {
    "url": "chemistry/balance.html",
    "revision": "c4fc3db7c3f91a26a54a0cd32a4adee4"
  },
  {
    "url": "chemistry/batteryWithElectrolysis.html",
    "revision": "315d8c80eed85a97616f5f5188d8b3a0"
  },
  {
    "url": "chemistry/Ca.html",
    "revision": "ee926bb20caa80f59c66b560981aa78d"
  },
  {
    "url": "chemistry/carboxylicAcid.html",
    "revision": "3bb166f098f0e16ee90a9ac07f4ea550"
  },
  {
    "url": "chemistry/Cl.html",
    "revision": "7b7809222b493ac4fc11b730cf073dc6"
  },
  {
    "url": "chemistry/classification.html",
    "revision": "54231208fb602d7cef6fd23e26c44b1d"
  },
  {
    "url": "chemistry/colloid.html",
    "revision": "151bfb0b6c835e1d60195a6befe5acc0"
  },
  {
    "url": "chemistry/Cu.html",
    "revision": "0e2496d45d602e61c050e0915a0081dd"
  },
  {
    "url": "chemistry/disaccharide.html",
    "revision": "394bbf864efc6879d0ac418114302f76"
  },
  {
    "url": "chemistry/elevationWithDepression.html",
    "revision": "c558b3b4642b785584f66c0a508315b0"
  },
  {
    "url": "chemistry/enzymeWithNucleicAcid.html",
    "revision": "c483f344f990d117c26da240ad4515b6"
  },
  {
    "url": "chemistry/fats.html",
    "revision": "728f4db461713b9a48f49f2d923e5894"
  },
  {
    "url": "chemistry/Fe.html",
    "revision": "1a97f6361b078760a491d2bf4fc07c35"
  },
  {
    "url": "chemistry/fiber.html",
    "revision": "079f4bff3092e0960d5e74156c6a31a1"
  },
  {
    "url": "chemistry/gas.html",
    "revision": "6a2cf0773633c6c8963cd7d0145954ca"
  },
  {
    "url": "chemistry/gom.html",
    "revision": "4ef6c14d2659506ad76e9f3a88ed7ee8"
  },
  {
    "url": "chemistry/heat.html",
    "revision": "0dcab92657c44e09135d2832edd13d9f"
  },
  {
    "url": "chemistry/hydrocarbon.html",
    "revision": "3110d255ede1847f16793abc275f8052"
  },
  {
    "url": "chemistry/index.html",
    "revision": "9567efa93bcc16b0529b8484b9dae232"
  },
  {
    "url": "chemistry/macromolecule.html",
    "revision": "f44d5468ae15404f0ad4995235b2440f"
  },
  {
    "url": "chemistry/metal1.html",
    "revision": "e7bf5a515b71afe9b259ece7286107fb"
  },
  {
    "url": "chemistry/metal2.html",
    "revision": "80d602170cbc09c624056a5a21b8d237"
  },
  {
    "url": "chemistry/monosaccharide.html",
    "revision": "be73058d13731443c2844b6805356ccb"
  },
  {
    "url": "chemistry/Na.html",
    "revision": "1a8554fcd77de46b9316c513341a207f"
  },
  {
    "url": "chemistry/nonmetal1.html",
    "revision": "8bfaaa782ebe2aa0e97201f4fa4b281b"
  },
  {
    "url": "chemistry/nonmetal2.html",
    "revision": "5725f09b193d96c6bf36bf9d1a0a538d"
  },
  {
    "url": "chemistry/oxide.html",
    "revision": "b110ce028fe93201e786055d43599d22"
  },
  {
    "url": "chemistry/P.html",
    "revision": "ada4b80c98472361e3055bfd41e1763a"
  },
  {
    "url": "chemistry/plus.html",
    "revision": "d21ed0a27d72bfbb8497ef111c8fe175"
  },
  {
    "url": "chemistry/polysaccharide.html",
    "revision": "ddcf6055da76c955d87d1a4b93197e7e"
  },
  {
    "url": "chemistry/protein.html",
    "revision": "fbd606522ab1cbb2cf2c23e97ac8e1c7"
  },
  {
    "url": "chemistry/radical.html",
    "revision": "8bb8741df2843e2b7cee44fbf1ad80a2"
  },
  {
    "url": "chemistry/resin.html",
    "revision": "11a07d09adf0ab267f8eaf46138eb2c4"
  },
  {
    "url": "chemistry/S.html",
    "revision": "19eaccaa2afc4d0652706768bb3fdee4"
  },
  {
    "url": "chemistry/Si.html",
    "revision": "b7c2eaed3596cb6843d6407b4ebdf02f"
  },
  {
    "url": "chemistry/SnWithPb.html",
    "revision": "804ebf1f2f4cb1ca2b5d7886f5778e0b"
  },
  {
    "url": "chemistry/Zn.html",
    "revision": "b3d715a4ab04fdf0fc564d4bd265e6be"
  },
  {
    "url": "index.html",
    "revision": "1f169c9f96b410717b8167928e1510c7"
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
