import tailwindcss from "@tailwindcss/vite";
import tailwindcssMangle from "unplugin-tailwindcss-mangle/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  // modules: ["@nuxt/fonts"],
  css: ["./app/assets/css/app.css"],

  vite: {
    plugins: [
      tailwindcss(),
      tailwindcssMangle({
        generator: {
          classPrefix: "es-",
        },
        preserve: {
          classes: [],
        },
        sources: {
          include: [
            "**/*.vue",
            "**/*.ts",
            "**/*.js",
            "**/*.jsx",
            "**/*.tsx",
            "**/*.html",
          ],
        },
      }),
    ],
  },

  app: {
    baseURL: "/",
    head: {
      title: "eaglesoft ghana",
      htmlAttrs: {
        lang: "en-GH",
      },
      link: [
        {
          rel: "icon",
          href: "/favicon.ico",
          sizes: "any",
        },
        {
          rel: "apple-touch-icon",
          href: "/apple-touch-icon.png",
        },
        {
          rel: "manifest",
          href: "/manifest.json",
        },
        {
          rel: 'preload',
          as: 'font',
          href: '/fonts/InstrumentSans-Regular.woff2',
          type: 'font/woff2',
          crossorigin: 'anonymous'
        }
      ],
      meta: [
        {
          name: "theme-color",
          content: "#f4f4f5",
          media: "(prefers-color-scheme: light)",
        },
        {
          name: "theme-color",
          content: "#0f172b",
          media: "(prefers-color-scheme: dark)",
        },
        {
          name: "mobile-web-app-capable",
          content: "yes",
        },
        {
          name: "apple-mobile-web-app-capable",
          content: "yes",
        },
        {
          name: "apple-mobile-web-app-status-bar-style",
          content: "yes",
        },
      ],
    },
  },

  modules: ["@nuxt/image"],
});