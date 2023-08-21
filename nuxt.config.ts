import { Head } from './.nuxt/components';
import { RuntimeConfig } from 'nuxt/schema';
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
        dir: "assets",
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
