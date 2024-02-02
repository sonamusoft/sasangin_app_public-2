'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "c4f935a63294fd779b623f0d5078b93f",
"index.html": "01dbe910a986c400b532a773b6b9dc74",
"/": "01dbe910a986c400b532a773b6b9dc74",
"CNAME": "85de7e3a00a0bf2605075feecb58eb7f",
"main.dart.js": "2ffb1ad3e5c31fefd6c275e17e195ed3",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "1bcfd262e4d5baee2a82430696fefb37",
"icons/Icon-192.png": "4aca1338fa1de5d7ef1cb86064fc727a",
"icons/Icon-maskable-192.png": "4aca1338fa1de5d7ef1cb86064fc727a",
"icons/Icon-maskable-512.png": "ad470b67524add170c8a455b211c0aeb",
"icons/Icon-512.png": "ad470b67524add170c8a455b211c0aeb",
"manifest.json": "d6f3c2c310fc082c48cf64b9265e8293",
"thumbnail.png": "3f9afceb63b321c7f97da9cf8c3ed6bb",
"robots.txt": "f77c87f977e0fcce05a6df46c885a129",
"naver629c47b3ec809ec2b529c1d1646835ac.html": "5fb2dcb124b79a828b984cfba2a2e567",
".git/config": "65a212c6b80cb9dadb8a69a0a3ba9c63",
".git/objects/61/083838c65d610f77e557fcdd85e5c789dc75c8": "7f9b20ce31d6daaf2ed5b9d7fc112c19",
".git/objects/0c/1915a3e645bda3ec16869602e30be22ce1f264": "28944d63f8cc3d7a78848cbea1585b5d",
".git/objects/3b/a2b87a804a05d8e46ad7f3facc3ca582dc1366": "5ff87d9ed916d6ac7d980322deaed08f",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/3b/eb7890b45ca2875195243c4d7b8090b4f2549e": "7ad1148a6be26d6dc597bf1d110c6ccb",
".git/objects/6a/5a661cf26f08c41d246a34c6189e9fd613a079": "d41082d29ec94ea369b89c6909ebbed1",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/69/9e43127171ce9e8d847dd2a93e402c54e17903": "a7ae902866f5d2c1cee8f2ba2685d995",
".git/objects/69/7612b856b42c7df2f6b11a751697ce3fb59ba5": "eb2c167bd5d2090211aac5d103a33a2d",
".git/objects/69/2f20751030c4928576112dd36703233631b9c4": "b62dad7ea8839abdf748010697b0324e",
".git/objects/0b/60f2f02e193ac47134afacf53f2612e2516ae3": "89457c85b2c03f63f5aceb020179bdfd",
".git/objects/60/733bf203406fd349e128e133109f4c8c93f2c0": "8b31672de5b6632e041cf2491b3c5ce7",
".git/objects/5a/21095b5cec6ba0e8393a2f84428c81da0402bc": "c1720f2e9f3a3a2678982c93fcc5741b",
".git/objects/33/cf9e362cf604f1d05b80bfd67d6d5e563b4c4a": "7eba8541c400f6206fbaa3219fa44585",
".git/objects/9c/18822406260b93aba93d207ac58e318b1e5927": "ae836f61a04c1e0e5a68f11d57dee12e",
".git/objects/02/afbc8632b6c1111b0cd7f2c241c4f91d191dd9": "00745b09e1c5fff1320a0cc919696a00",
".git/objects/d9/8b2ab795119e7fd8b2e85dfd59dfa3721c5951": "e2c3b78598701bc83988486c88d1cb4d",
".git/objects/d9/89019b4974d8578063bb438746cec6515486ec": "cab7513fe9d6261575a8a9fc9ed24cd5",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/be/388bf5f96ec449e87861f68e2597376dd551e5": "1702647769310164ffcf72b36093414e",
".git/objects/df/098e21ce4c65ff91ad62e1cd11f7b2eaab41a0": "3e6c6cc75a6731c99bc78a48e5cc314a",
".git/objects/b4/4cba77c845415f8996015c88e46b807020e493": "0426e52c93415759fe3097a4a6043408",
".git/objects/d6/ff26ea56af225bf5019779451f9110f748433e": "cf7985aaddf4ca6ecdd35d1078369310",
".git/objects/d6/5c01727eaa60d5607c65332a703934feb92505": "6ab584ec48f2527047d0b180e6bece0b",
".git/objects/bc/0cff99d64b7e8de94c36e1ef43af8c5d1a8b75": "774651e535fcb1cb7cd473c868ec792c",
".git/objects/ae/84637e10f8608cfbde0dbe1a3cdcd2e1ddaed4": "c01e6ddeb9c97744ed3b798fde3a0009",
".git/objects/e5/8eab04e89b1e124dfd9df662c85a65e38d3c67": "7564f801fcee9f4d3b36a7e6eb4318fa",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/c7/0b100a3e931a84b061489fea2779cfe28d73d3": "d5a961ea0cfdacc644ec611b7760e28e",
".git/objects/c7/2c78bf2e85caac675a922fd23a5d58b5c99023": "476f9cc375be3bd24348f74d74aeada5",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fc/2861e40c9b9a04119b39ed0f81c28ac37e97ff": "5a214e26b8d3e31d141faab08f44d5c0",
".git/objects/f2/96e769b440599593a56d21e3795df7831fd042": "bff1b30061bb6ce5eaf7f35a5376963f",
".git/objects/f5/2e53a23667543068f261447276f94754ca62df": "816e2e2a2a19d9e25270395753c75c34",
".git/objects/fe/52ffefa3b9d58901eef967702fcd89613f8411": "4945d00fc0584b9bfeb8d1ec39b6fece",
".git/objects/ed/7385827749defad9b98e841139699725c917a1": "29df804ca8ce88c423b2267621c2939c",
".git/objects/c1/5b6051c4002c18c04d7cd730589615f49424a3": "e8fa6ba80687d6b30aca29e9961061cc",
".git/objects/c6/42c4407383040e2118b9f130c5b37015cb90a8": "0a650bda2019ff9d87abba2cdfd41bc7",
".git/objects/7c/5c2fae3f7bfcd4f85f45b6abae33d9f20bdf27": "0bee522d957bf8a4c6b897dd684603df",
".git/objects/42/a0bcd8bb490270983afbd7314279b20be288cc": "e5f2e67624382f45b21d8bf8361135ee",
".git/objects/74/a14540813f6a10c2734d7249e54bf98d6d574b": "b27b97e3d9dbcea752d69994fda45058",
".git/objects/28/b6d54519047d6b9e7fb5160ab2d411ee349636": "ea303b253263e48400f488973a5fa3c8",
".git/objects/10/1ba737af7dd1c4a497f3d8b90fd6dae1deb5eb": "a054176ee40f7ae23fb528074ade6dfb",
".git/objects/26/46da5a909885d5a7709f57566542ba48e0dd1e": "bf3b348c350d91f659bd711e0df022fa",
".git/objects/26/ec48be0874c602d55bf2b9805ce4ee12f65189": "e9ca1e2b0a9ab3310bca91ab68ecaa3c",
".git/objects/4d/afdfe71d4d3e5596374d9673ca7a9e346c1042": "2a6a7f7f78ead9c9c8d387a23c68f645",
".git/objects/75/282f9dde95cf40696767f966f1cb5eb41cecef": "810d0910cc45648b5100fae7ecd88368",
".git/objects/75/95bbabf0fd1782cef270cab292e5cc67a38e3a": "bd15dd58b054faadf52aaa8ed9202fda",
".git/objects/72/ada6baac9193047a04d1ef7fc6c08c19a0aad4": "515cf0496f523efb00e1cdbca48aebe4",
".git/objects/72/80bdddbc17dfe709057953d0753e5ffd0f0f2e": "ba56b40d645a0f16807ab3de83ab0ea1",
".git/objects/44/d746f731abd48b36c4261f0efab841cbd1405f": "488294823338b63cad37eae3f2bd9925",
".git/objects/2a/36be4505eb65ca95fa779af46d928400794c6b": "ad8d63fcfe38cb1f48529a5faf57c581",
".git/objects/2f/9a5c9356c30fa0dc442a2c0ff763e9fe998ca5": "6d78a55a787440b5e5f42065923a8b16",
".git/objects/43/c838eea8a269a8482e35cf36a56133d7199348": "ee74857ccdfde58063a99dfc3176aae5",
".git/objects/07/afb4448a6576dd2ad2fc9fa0484ea4bfe96c85": "0d1e1dc230764de3c18d0101550bbd51",
".git/objects/6e/e2b15f82f19228958296aff7373fe1ab1f0321": "e7207990c3ece1e7da6f9a106b595193",
".git/objects/9a/80539bab01142c09b12d9ac9befcc32e6a495e": "85bd4b66b2e452c70fb202e677c1c4fd",
".git/objects/9a/1c90bf526a7b867276620c207ac434b38dec6a": "8bb35d940832f08cbece4c799cceff98",
".git/objects/5c/a017893b2927c9a549a678278c883a97ef2a0d": "ae6097befff3fad1d76396cd065264d6",
".git/objects/5c/015838c6000cdefefe20c34390b8a2ac39282e": "1e41a85a3063cd13338d951eafe51ca6",
".git/objects/09/234fd27ff90c0408dcf165009ab5de8ca8a5ee": "74e41c30745030e25494c9ca219bf237",
".git/objects/09/fdfde30d8103580ef2e89168cd4eaaec0ee52a": "2c6512d119881f373ca6177eabf63aae",
".git/objects/5d/dbbc038030e7784842ee11cc04ce92a8086cab": "db5c333f94179fac8695f12daa5adb97",
".git/objects/62/69a24c35f5b2501311e6c5e07d7f8a188795f0": "474caaca870976cca9e9ed34f378c24c",
".git/objects/53/7b4eac765cbab1266443138da3972c9a4af1ec": "63fe3e543fa601482fb71df65a8e1ba9",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/30/eaf779643c785652a8f1f1da82f36c7fc9ead8": "23df7f19507888578dfac359c66390cc",
".git/objects/5e/bb4246bc0f74eade5cbe963d87c7c4097ddfe0": "efc5d0b1bf2f58a1ebe05d206af46934",
".git/objects/5e/e02bd7d979fc37fcc7977f0811958a38da5abc": "bcd16c6f8da0a431f0191714c0e54640",
".git/objects/6d/9d0a260cf485c4bc6f0048deb094801c8068dd": "0419e6b3209d2247cda7ba97cb4f7b13",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/55/c1764f30e2ac9faaef1542264679e6d55cfdd6": "0cacb32513566bcc6c245c434a706607",
".git/objects/bf/7a1822b8a48fcd7eaf17a041688d1129254970": "7103cc6a5a9bf3e02545c816912ff392",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/ba/86c5eb654a153d6b89f4e79fcc04fd460231f7": "4bd062c75319de20a39a861dd9dd0867",
".git/objects/b8/424f3641f0ec4089ec9747d02fbaf94ea5fc33": "7d1d40447eace86999e8c13db09e0d8d",
".git/objects/a9/e0b6b8203f4a98f35c49d72372aa912338f82e": "067d38da72caa85a918af64f6dc281d1",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/aa/0a7bd653ec20b94f49b64f9b71f9ac286398e6": "9de4a2178aac294ebbfb7a5013dac4d5",
".git/objects/b7/eb646fa63bbac29c1abff3f91a6af4f59a1b87": "24790ad965b8cf84c4acd2214e7ea6af",
".git/objects/db/b38ed8bd014d6fa2b4e2b6a1e2f8adbae2274b": "5753ac358546a7c7c7846ddbce10bedb",
".git/objects/db/7295d12c86ef3c9aac679e9f3dac3f08c60556": "c009e1a8ab2dd1bf4feb2698bc08b8c9",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/e6/fa777fbf3ebf808b82fa85593da5be0202b3f0": "78f04721b2a6190edf141b64e7b02c78",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/f0/94a96f68414d45d69b036ef9d1baeafeabd73e": "c441b0a9a5326dd0a7dba394d818d24d",
".git/objects/f0/768ce6d49506240ceb101ef52b24e669a0f6ad": "d38890115cc3098b90adeecb31659fdc",
".git/objects/f0/238495c458778fb86f4d2961431f44789435e0": "f90ca783a5f3aebfca27b437ddf0a35d",
".git/objects/e8/8345f292a1cbd961e19e907a14c445620ed605": "4bcf1b609f2fdc2f6bf28f7d072cf881",
".git/objects/e8/04c742d5271e0923243598d37e58bf8ff4e0bd": "d565aadc9b3cf640f112863a7d22f4b5",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/48/5026b8f5c9fdb877033a9c1840105051b76623": "f6ac4c3261b4b257ef988e6131b1b9da",
".git/objects/70/6b89226856a184964d4ef26acca4690f34feb3": "b47861a6de6336cfde49244ec049778b",
".git/objects/84/fadfcc910ea825cb5b62f3a8ef3d12dacb077e": "ccf3b5ecd00c05b6de3596fbcd118462",
".git/objects/4a/c93b4b39efb4e741709718b778bd06ee7c771e": "ea2d9ebba023e79e0416da3e27f1a126",
".git/objects/4f/c50cf7ec02d6583bebec73fe9cbb7a72101280": "409d198b6fcfe6d4d6a404879b19353d",
".git/objects/85/c4c06d39d9862f500b52affe6f1206be4c108b": "cc83746ea6a81d6242561fe6cb4fd534",
".git/objects/1d/d2e99dbaa06f1593020b331d23ac21be2fa772": "dd0e7f139cba8e33ae47f93b3aa89f20",
".git/objects/71/c8c7191e6a3c9ebbaf8cf99d5924403b562b99": "0b5bd1dacd81423cabfee18ce5ea2606",
".git/objects/1c/726254592a71e9c6b32039d0c88d038aa96623": "30bcdb40fd979b5d14b02d5e531d3d0d",
".git/objects/82/28ddd429e33233014e5244a95cb962e29dc892": "6e4d11945ece7d17bc620b9a0b8c154b",
".git/objects/82/45896d8498cec7690d6107a29ab98966477a47": "fdc2ec9ea02445748a3a7a49be37a4cb",
".git/objects/40/1d00f7c6bac20befafd9ff85d099821cc444d8": "b487116db84a3069e9270f27f7880681",
".git/objects/40/0e29deb869bf8a2bd40bd458f54f0b784f226e": "3cc02e7de298c89186ac2b49a30a57f9",
".git/objects/13/f9d9f67c1719de4953bafd273c780e19bdc14c": "b8329ac3ce2333455c4961558834b9f3",
".git/objects/7f/db3a712744af27b78ee085e59ae0fd67994825": "dc173742bb100bbafeb831ecf2413ba6",
".git/objects/7f/790e306b2f21098b167d07754c7db9512100aa": "5077dd00eac1bae92efb5cee069e7ac3",
".git/objects/7f/9161684af85d9ea5018d50e3b059e30ccb7d4f": "d3303aceb2cf7c030844ceb351556282",
".git/objects/7a/d6a5ab724ccfac453c16594d58ce6d14b0d9b3": "df83a4fae75e068f4f24f694910dd718",
".git/objects/14/267e90323cf5175815cfbc34eb6affc59412cb": "d722282ef8223e2c70c39dfc516182e7",
".git/objects/8e/8fe9d6a2c7c354f6d079c22b6425ad14fd6e6e": "3de363593bee2d60731d0d2b12c355a0",
".git/objects/8e/2d09b6ba618e083fd3083466fbeccd047f4674": "81b0d825fcb96d80ff29c2a0dff1a1d4",
".git/objects/22/3db7fe7b28407fbf80ee89080b4e5162abd5a7": "b7b5527688b6310ca56dd4422bbed963",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "bd6f9a8516e3ee1676bc93b987994e26",
".git/logs/refs/heads/main": "bd6f9a8516e3ee1676bc93b987994e26",
".git/logs/refs/remotes/origin/main": "ac8c932956dbb60ca06db76398777aa8",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "dedfd1adfdddcc50f1bba100677a90d9",
".git/refs/remotes/origin/main": "dedfd1adfdddcc50f1bba100677a90d9",
".git/index": "ba624b3d1ebcd3603133767070c3ed0c",
".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
"assets/AssetManifest.json": "bdd1b3145ab8c46624edbb311ec8052c",
"assets/NOTICES": "762a25ce04e5a5bd24cf1d6229864b27",
"assets/FontManifest.json": "27c4163931f06f397e2b671c1e014a47",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/packages/math_keyboard/fonts/CustomKeyIcons.ttf": "b0bace3f25c2bd05862680e5ad4c6b54",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "c18a9fcfb9b17a8408ce3c323a839589",
"assets/fonts/MaterialIcons-Regular.otf": "0898e51f8570069a61942213f573c129",
"assets/assets/images/menu_icon_white.png": "40067d22523afa39d4ced46b00a51928",
"assets/assets/images/menu_icon.png": "fdefab80cd34052f6840abfbb28e9029",
"assets/assets/images/login_facebook.png": "6d15f9da50936a8fc6229c9d5e1b6c5b",
"assets/assets/images/login_apple.png": "6da7489a133144459e0b7c2929411ddf",
"assets/assets/images/home_icon.png": "96ecc91b4650ec35507f73a519d8b963",
"assets/assets/images/background.png": "d94a544cd6bba4aaa13e65b5206d8223",
"assets/assets/images/login_kakao.png": "8dee282fdf439591cdfe7fdee358cc82",
"assets/assets/images/logo.png": "61486cd4af3d898ea6ed120b66611bb2",
"assets/assets/images/thumbnail.png": "fe5fb355065217bac70f78600f876caf",
"assets/assets/images/web_background.jpeg": "065505026fb01bb8dfee977654d99145",
"assets/assets/images/web_logo.jpg": "37dfc82fa463c1ad98a9362e33f666c4",
"assets/assets/images/google_play.png": "5ced005a4f24936837005ce07bd70a3a",
"assets/assets/images/login_google.png": "63a560a6b54faf729d78e27d6fad6eeb",
"assets/assets/images/app_store.png": "c788c5e995f57a8073174aad06e28760",
"assets/assets/images/login_naver.png": "70fc3520d7f751055a6578f496b2f77e",
"assets/assets/images/title_text.png": "5a69f79e6af35f917dc7a39f9e8ce455",
"assets/assets/files/privacy.json": "05c20e1f9f8cac8d22decb3caaee5a85",
"assets/assets/fonts/NotoSansKR-Bold.otf": "e2406ff1791c401bc93e73d9e44e6d2b",
"assets/assets/fonts/NotoSerifKR-Medium.otf": "ffe4ccd3727fe7f868897a6e001472c9",
"assets/assets/fonts/NotoSansKR-Medium.otf": "32666ae307200b0bcab5553590672bb1",
"assets/assets/fonts/NotoSansKR-Regular.otf": "210989664066c01d8ffdbdf56bb773cd",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "1165572f59d51e963a5bf9bdda61e39b",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "19d8b35640d13140fe4e6f3b8d450f04",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
