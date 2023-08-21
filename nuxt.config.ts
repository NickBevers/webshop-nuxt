import { Head } from './.nuxt/components';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    pages: true,
    modules: ["nuxt-icon", '@nuxt/image', '@element-plus/nuxt'],
    css: [
        "normalize.css/normalize.css",
        "~/assets/css/global.css",
    ],
    image: {
        dir: "assets",
        // format: ["webp", "avif", "png", "jpg"],
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
