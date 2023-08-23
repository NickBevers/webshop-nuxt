// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    ssr: true,
    pages: true,
    modules: ["nuxt-icon", '@nuxt/image-edge', '@element-plus/nuxt'],
    css: [
        "normalize.css/normalize.css",
        "~/assets/css/global.css",
    ],
    nitro: { 
        preset: 'vercel',
        scanDirs: ['assets', 'static'],
    },
    image: {
        format: ["webp", "avif", "png", "jpg", "jpeg", "svg"],
        dir: "public",
        screens: {
            sm: 640,
            md: 768,
            lg: 1024,
            xl: 1366,
        },
        ipx: {
            dir: "public",
        },
    },
    app: {
        head: {
            title: "Stikr - Creatief bureau, Bedrukkingen, belettering, webdesign",
            meta: [
                { charset: "utf-8" },
                { name: "viewport", content: "width=device-width, initial-scale=1" },
            ],
            link: [{ rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }],
        },
    },
});
