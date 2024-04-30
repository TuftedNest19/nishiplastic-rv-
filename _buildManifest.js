self.__BUILD_MANIFEST = function(e, s, t, a, c, d, i, o, n, r, b, u, h, p, g, f, k, l, j, I, m, w, x, B, Y, _, G, v, S, y, A, M, T, F, N, C, D, P, L, U, W, E, V, z, R, O, H, J, q, Z, $, K, Q, X, ee, es, et) {
    return {
        __rewrites: {
            afterFiles: [],
            beforeFiles: [{
                has: U,
                source: "/embed/:docId*",
                destination: "/public/:docId*"
            }, {
                has: U,
                source: "/templates/([\\w-]*-|):id(\\w+)",
                destination: "/templates/:id"
            }, {
                has: U,
                source: "/folders/:channelSlug*",
                destination: K
            }, {
                has: U,
                source: "/settings/(members|defaults)",
                destination: Q
            }, {
                has: U,
                source: "/sites/:siteId/pages/:pageId/preview",
                destination: "/sites/:siteId/pages/:pageId"
            }, {
                has: U,
                source: "/docs/:docId/preview",
                destination: "/docs/:docId"
            }, {
                has: [{
                    type: "header",
                    key: "user-agent",
                    value: "(.*)(Googlebot\\/|Googlebot-Mobile|Googlebot-Image|Googlebot-News|Googlebot-Video|AdsBot-Google([^-]|$)|AdsBot-Google-Mobile|Feedfetcher-Google|Mediapartners-Google|Mediapartners \\(Googlebot\\)|APIs-Google|bingbot|Slurp|LinkedInBot|msnbot|Adidxbot|facebookexternalhit|DuckDuckBot|Twitterbot|Facebot|BUbiNG|Applebot|Y!J|Slack-ImgProxy|SkypeUriPreview|Slackbot|Google-Adwords-Instant|WhatsApp|BingPreview\\/|Yahoo Link Preview|AppInsights|Discordbot|DuckDuckGo-Favicons-Bot|AppEngine-Google|Google Web Preview|google-xrawler|Google-Structured-Data-Testing-Tool|Google-PhysicalWeb|Google Favicon|Chrome-Lighthouse|HeadlessChrome|Google-Site-Verification|Google-Certificates-Bridge|Iframely|[wW]get|Python-urllib|python-requests|aiohttp|httpx|libwww-perl|httpunit|nutch|Go-http-client|phpcrawl|jyxobot|FAST-WebCrawler|FAST Enterprise Crawler|BIGLOTRON|Teoma|convera|seekbot|Gigabot|Gigablast|exabot|ia_archiver|GingerCrawler|webmon |HTTrack|grub.org|UsineNouvelleCrawler|antibot|netresearchserver|speedy|fluffy|findlink|msrbot|panscient|yacybot|AISearchBot|ips-agent|tagoobot|MJ12bot|woriobot|yanga|buzzbot|mlbot|YandexBot|YandexImages|YandexAccessibilityBot|YandexMobileBot|YandexMetrika|YandexTurbo|YandexImageResizer|YandexVideo|YandexAdNet|YandexBlogs|YandexCalendar|YandexDirect|YandexFavicons|YaDirectFetcher|YandexForDomain|YandexMarket|YandexMedia|YandexMobileScreenShotBot|YandexNews|YandexOntoDB|YandexPagechecker|YandexPartner|YandexRCA|YandexSearchShop|YandexSitelinks|YandexSpravBot|YandexTracker|YandexVertis|YandexVerticals|YandexWebmaster|YandexScreenshotBot|purebot|Linguee Bot|CyberPatrol|voilabot|Baiduspider|citeseerxbot|spbot|twengabot|postrank|TurnitinBot|scribdbot|page2rss|sitebot|linkdex|ezooms|dotbot|Mail.RU_Bot|discobot|heritrix|findthatfile|europarchive.org|NerdByNature.Bot|sistrix crawler|Ahrefs(Bot|SiteAudit)|fuelbot|CrunchBot|IndeedBot|mappydata|woobot|ZoominfoBot|PrivacyAwareBot|Multiviewbot|SWIMGBot)(.*)"
                }],
                source: "/(docs|example|public)/:slug",
                destination: "/docs-robot/:slug"
            }, {
                has: U,
                source: "/:path*.map",
                destination: X
            }],
            fallback: []
        },
        "/": [e, s, t, a, c, o, p, k, l, j, x, B, Y, _, v, E, d, n, b, h, g, I, S, y, A, N, i, r, m, w, G, M, T, V, u, "static/chunks/pages/index-f9a365c146ca5e7d.js"],
        "/404": [e, s, t, a, c, o, d, n, b, i, r, u, f, "static/chunks/pages/404-dec93c54aa522397.js"],
        "/__challenge": [e, s, t, a, c, o, d, n, b, i, r, u, f, C, "static/chunks/pages/__challenge-c9d60890286ba49f.js"],
        "/_error": [e, s, t, a, c, o, d, n, b, i, r, u, f, "static/chunks/pages/_error-9f748b8a2307a182.js"],
        "/_offline": [e, s, t, a, c, o, d, n, b, i, r, u, f, "static/chunks/pages/_offline-bc8312d4b11e20ed.js"],
        "/admin/prompt-studio/[prompt]": [e, s, t, a, c, o, d, n, b, h, i, r, u, f, F, "static/chunks/pages/admin/prompt-studio/[prompt]-9d7c5a073710494c.js"],
        "/auth/done": [e, s, t, a, c, d, i, "static/chunks/pages/auth/done-7ff48f9356d1858d.js"],
        "/auth/error": [e, s, t, a, c, d, i, "static/chunks/pages/auth/error-1b90091550550488.js"],
        "/checkout/success": [e, s, t, a, c, o, d, n, b, i, r, u, f, "static/chunks/pages/checkout/success-feff43a02fadcf35.js"],
        "/create": [e, s, t, a, c, o, d, n, b, h, g, i, r, w, u, f, F, R, "static/chunks/pages/create-2295c365f3deca49.js"],
        "/create/generate": [e, s, t, a, c, o, p, k, l, j, x, B, Y, _, v, d, n, b, h, g, I, S, y, A, N, i, r, m, w, G, M, T, W, u, "static/chunks/pages/create/generate-8fb24374aedd921d.js"],
        "/create/generate/[id]": [e, s, t, a, c, o, p, k, l, j, x, B, Y, _, v, d, n, b, h, g, I, S, y, A, N, i, r, m, w, G, M, T, W, u, "static/chunks/pages/create/generate/[id]-d14fd22c14086e1b.js"],
        "/create/import": [e, s, t, a, c, o, p, k, l, j, x, B, Y, _, d, n, b, h, g, I, S, y, "static/chunks/9808-df865abb2244375a.js", i, r, m, w, G, u, "static/chunks/pages/create/import-bb8c678d9694f2e6.js"],
        "/create/paste": [e, s, t, a, c, o, p, k, l, j, x, B, Y, _, v, d, n, b, h, g, I, S, y, "static/chunks/8397-2eecea432c00446d.js", i, r, m, w, G, u, "static/chunks/pages/create/paste-27a7355c7b30dbd3.js"],
        "/demo/[docId]": [e, s, t, a, c, o, p, k, l, j, x, B, Y, _, v, E, O, d, n, b, h, g, I, A, N, i, r, m, w, G, M, T, W, V, z, H, R, J, q, "static/chunks/pages/demo/[docId]-10afef8338fb24dd.js"],
        "/docs/presenter/[docId]": [e, s, t, a, c, o, p, k, l, j, x, B, Y, _, v, d, n, b, h, g, I, S, y, A, i, r, m, w, G, M, T, u, "static/chunks/pages/docs/presenter/[docId]-cb4a4fd6ffe85918.js"],
        "/docs/screenshot": [e, s, t, a, c, o, p, k, l, j, x, B, Y, _, v, "static/chunks/fb69e836-55db0cd5cfc1d27d.js", d, n, b, h, g, I, S, y, A, "static/chunks/5743-1b8f6b92b8de16f6.js", i, r, m, w, G, M, T, u, "static/chunks/pages/docs/screenshot-4e7e22c6bcd436b5.js"],
        "/docs/[docId]": [e, s, t, a, c, o, p, k, l, j, x, B, Y, _, v, E, O, d, n, b, h, g, I, A, N, i, r, m, w, G, M, T, W, V, z, H, R, J, q, "static/chunks/pages/docs/[docId]-b43b4338333c2905.js"],
        "/docs-robot/[docId]": [e, s, t, a, c, o, p, k, l, j, x, B, Y, _, d, n, b, h, g, I, S, y, i, r, m, w, G, u, "static/chunks/pages/docs-robot/[docId]-6fed302757644da7.js"],
        "/example/[docId]": [e, s, t, a, c, o, p, k, l, j, x, B, Y, _, v, E, O, d, n, b, h, g, I, A, N, i, r, m, w, G, M, T, W, V, z, H, R, J, q, "static/chunks/pages/example/[docId]-5b8858a7f7744e2e.js"],
        "/forgot": [e, s, t, a, c, o, p, P, d, n, b, g, i, r, u, f, C, D, L, "static/chunks/pages/forgot-279971044ad1c669.js"],
        "/generate": [e, s, t, a, c, o, d, n, b, i, r, u, f, "static/chunks/pages/generate-7916213b857b0e76.js"],
        "/generate/[id]": [e, s, t, a, c, o, p, k, l, j, x, B, Y, _, v, d, n, b, h, g, I, S, y, A, N, i, r, m, w, G, M, T, W, u, "static/chunks/pages/generate/[id]-24ea17749031c8b5.js"],
        "/inspiration": [e, s, t, a, c, o, p, k, l, j, x, B, Y, _, v, d, n, b, h, g, I, S, y, A, Z, i, r, m, w, G, M, T, u, "static/chunks/pages/inspiration-c84b507cf2f5747a.js"],
        "/invitations/docs/[docId]": [e, s, t, a, c, o, p, P, d, n, b, h, g, "static/chunks/2666-ccf18601d1d24681.js", i, r, u, f, F, C, D, L, "static/chunks/pages/invitations/docs/[docId]-e4cac0fa2ea4efba.js"],
        "/invitations/workspaces/[workspaceId]": [e, s, t, a, c, o, p, P, d, n, b, g, i, r, u, f, C, D, L, "static/chunks/pages/invitations/workspaces/[workspaceId]-6d552aba0370c060.js"],
        "/new": [e, s, t, a, c, o, p, k, l, j, x, B, Y, _, v, d, n, b, h, g, I, S, y, A, i, r, m, w, G, M, T, u, "static/chunks/pages/new-164b7bfc78aeb1f1.js"],
        "/public/[docId]": [e, s, t, a, c, o, p, k, l, j, x, B, Y, _, v, E, O, d, n, b, h, g, I, A, N, i, r, m, w, G, M, T, W, V, z, H, R, J, q, "static/chunks/pages/public/[docId]-3a509e6de2c690e3.js"],
        "/published/[docId]": [e, s, t, a, c, o, p, k, l, j, x, B, Y, _, v, d, n, h, g, I, S, y, ee, i, r, m, w, G, z, es, et, "static/chunks/pages/published/[docId]-95456e66cf917337.js"],
        "/published_mobile/[docId]": [e, s, t, a, c, o, p, k, l, j, x, B, Y, _, v, d, n, h, g, I, S, y, ee, i, r, m, w, G, z, es, et, "static/chunks/pages/published_mobile/[docId]-1e9923c5eeda9c48.js"],
        "/reset": [e, s, t, a, c, o, p, P, d, n, b, g, i, r, u, f, C, D, L, "static/chunks/pages/reset-13d5d985d15b5990.js"],
        "/sandbox/[pageName]": [e, s, t, a, c, o, p, k, l, j, x, B, Y, _, v, E, d, n, b, h, g, I, S, y, A, i, r, m, w, G, M, T, V, u, "static/chunks/pages/sandbox/[pageName]-936e60a1b8150e21.js"],
        "/settings": [e, s, t, a, c, o, p, k, l, j, x, B, Y, _, v, d, n, b, h, g, I, S, y, A, N, i, r, m, w, G, M, T, u, "static/chunks/pages/settings-9df3986bbebcbcbb.js"],
        "/setup": [e, s, t, a, c, o, p, P, d, n, b, g, i, r, u, f, C, D, L, "static/chunks/pages/setup-2fd61756c8ab17df.js"],
        "/signin": [e, s, t, a, c, o, p, P, d, n, b, g, i, r, u, f, C, D, L, "static/chunks/pages/signin-5a107d82a0935896.js"],
        "/signup": [e, s, t, a, c, o, p, P, d, n, b, g, i, r, u, f, C, D, L, "static/chunks/pages/signup-3eef63a2e47b8107.js"],
        "/sites/[siteId]": [e, s, t, a, c, o, d, n, b, h, i, r, u, f, F, $, "static/chunks/pages/sites/[siteId]-f652335ee76f9b9c.js"],
        "/sites/[siteId]/domains": [e, s, t, a, c, o, d, n, b, h, i, r, u, f, F, $, "static/chunks/pages/sites/[siteId]/domains-78f2f4a37268219e.js"],
        "/sites/[siteId]/pages/[docId]": [e, s, t, a, c, o, d, n, b, h, i, r, u, f, F, "static/chunks/pages/sites/[siteId]/pages/[docId]-bc078438da7dce4c.js"],
        "/sites/[siteId]/settings": [e, s, t, a, c, o, d, n, b, h, i, r, u, f, F, $, "static/chunks/pages/sites/[siteId]/settings-8044e51c89f40c60.js"],
        "/sites/[siteId]/themes": [e, s, t, a, c, o, d, n, b, h, i, r, u, f, F, $, "static/chunks/pages/sites/[siteId]/themes-ab0f18f661c27f81.js"],
        "/slack": [e, s, t, a, c, o, p, d, n, b, h, i, r, u, f, F, "static/chunks/pages/slack-cdc57657868f417a.js"],
        "/templates": [e, s, t, a, c, o, p, k, l, j, x, B, Y, _, v, d, n, b, h, g, I, S, y, A, Z, i, r, m, w, G, M, T, u, "static/chunks/pages/templates-555e8e4a12532f9e.js"],
        "/templates/categories/[categorySlug]": [e, s, t, a, c, o, p, k, l, j, x, B, Y, _, v, d, n, b, h, g, I, S, y, A, Z, i, r, m, w, G, M, T, u, "static/chunks/pages/templates/categories/[categorySlug]-f0ce5faf972993ec.js"],
        "/templates/[id]": [e, s, t, a, c, o, p, k, l, j, x, B, Y, _, v, d, n, b, h, g, I, S, y, A, Z, i, r, m, w, G, M, T, u, "static/chunks/pages/templates/[id]-01eda74b508fc9bb.js"],
        "/theme-generate": [e, s, t, a, c, o, d, n, b, i, r, u, f, "static/chunks/pages/theme-generate-71eb7d32d59d633b.js"],
        "/tldraw": [e, s, t, a, c, o, p, k, l, j, d, n, b, I, i, r, m, u, f, "static/css/3a638670584f9430.css", "static/chunks/pages/tldraw-a60140ece6f62ab3.js"],
        "/tldraw2": [e, s, t, a, c, o, p, k, l, j, x, B, Y, _, d, n, b, h, g, I, S, y, i, r, m, w, G, u, "static/chunks/pages/tldraw2-b0baa8db5a4a5ac8.js"],
        "/user-deleted": [e, s, t, a, c, o, d, n, b, h, i, r, u, f, F, "static/chunks/pages/user-deleted-d7268c3e13da4dea.js"],
        "/welcome": [e, s, t, a, c, o, d, n, b, h, i, r, u, f, F, D, "static/chunks/pages/welcome-6b5095d1c7ec0a42.js"],
        "/workspaces/[orgId]/join": [e, s, t, a, c, o, p, P, d, n, b, g, i, r, u, f, C, D, L, "static/chunks/pages/workspaces/[orgId]/join-d6b1129e3051dab0.js"],
        sortedPages: [K, X, "/__challenge", "/_app", "/_error", "/_offline", "/admin/prompt-studio/[prompt]", "/auth/done", "/auth/error", "/checkout/success", "/create", "/create/generate", "/create/generate/[id]", "/create/import", "/create/paste", "/demo/[docId]", "/docs/presenter/[docId]", "/docs/screenshot", "/docs/[docId]", "/docs-robot/[docId]", "/example/[docId]", "/forgot", "/generate", "/generate/[id]", "/inspiration", "/invitations/docs/[docId]", "/invitations/workspaces/[workspaceId]", "/new", "/public/[docId]", "/published/[docId]", "/published_mobile/[docId]", "/reset", "/sandbox/[pageName]", Q, "/setup", "/signin", "/signup", "/sites/[siteId]", "/sites/[siteId]/domains", "/sites/[siteId]/pages/[docId]", "/sites/[siteId]/settings", "/sites/[siteId]/themes", "/slack", "/templates", "/templates/categories/[categorySlug]", "/templates/[id]", "/theme-generate", "/tldraw", "/tldraw2", "/user-deleted", "/welcome", "/workspaces/[orgId]/join"]
    }
}("static/chunks/93656207-82d9b69329415f69.js", "static/chunks/ad54e6ef-8b1f4aaad71be52f.js", "static/chunks/2edb282b-a83f7ffd007bccf0.js", "static/chunks/b155a556-e6afb0a740071fe5.js", "static/chunks/d08a6a05-914359ca5fbbe6e8.js", "static/chunks/2087-5d4e56139e87abcf.js", "static/chunks/2252-04270bf6828de953.js", "static/chunks/b4d7d80c-59b7c96ec7c033f7.js", "static/chunks/7664-a146988ea73f6cad.js", "static/chunks/2576-e0590408e256b1d9.js", "static/chunks/4450-d1e94546cc49c3d6.js", "static/css/4c51f34f528c6485.css", "static/chunks/3693-ce839d5fdff0935c.js", "static/chunks/8c469d57-a3558559ddec4f38.js", "static/chunks/931-6710a9c124d0315e.js", "static/chunks/330-af58fc2743ceffa0.js", "static/chunks/5adc83ef-a1e889e29ba2b7a6.js", "static/chunks/b13ba9de-11ef9f2e07c3e310.js", "static/chunks/9b583bcd-f8f16bc96d67efb2.js", "static/chunks/6055-3de9910ec88f557a.js", "static/chunks/6656-cccf6162a99bc239.js", "static/chunks/2681-9ce0108a1496d853.js", "static/chunks/69bd6bf3-bc248ffefb750b46.js", "static/chunks/998ccc15-ad35dfdb33c695e6.js", "static/chunks/91bbf309-9528182dce616b69.js", "static/chunks/a29ae703-46d951b11c376d36.js", "static/chunks/8794-c9057ef6dd7b06af.js", "static/chunks/3d35b88c-add1990a508b9ea1.js", "static/css/a8859db864af7fa7.css", "static/chunks/7795-6b0dd55f9ce8d1f2.js", "static/chunks/205-d7442a3419dad731.js", "static/chunks/9639-d2cd58bb5ded46d1.js", "static/chunks/4475-199a678024f58df0.js", "static/chunks/4661-47eaf72f3dc5021d.js", "static/chunks/1567-e230c28c67b75c85.js", "static/chunks/8220-b16dc243141e1aa5.js", "static/chunks/7324-7dfbf920b85019d6.js", "static/chunks/9814d858-303e4e17c4816b1b.js", "static/chunks/1815-779c04050ca4aefa.js", void 0, "static/chunks/6390-85e46e98b7634674.js", "static/chunks/64bbefcc-074315de003b764c.js", "static/chunks/887-5a88cb75df60f542.js", "static/chunks/1701-65c1fd286bb15f0d.js", "static/chunks/416-cc4b302ecb2d8cca.js", "static/chunks/59b4e022-2163a4b5ff76768d.js", "static/chunks/5641-bec8dd7a3b9da937.js", "static/css/83e155ab19f745ee.css", "static/chunks/7141-2f3772dc79946819.js", "static/chunks/4582-72d6c521dadca068.js", "static/chunks/1242-aebd41db45c3df84.js", "/", "/settings", "/404", "static/chunks/9831-d01f0082d71c16ce.js", "static/chunks/2316-4ad7368d4da0c89e.js", "static/css/df9f4abf30f919ad.css"),
self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();
