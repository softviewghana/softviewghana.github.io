import { defineNuxtConfig } from "nuxt/config";
import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  ssr: true,
  css: ["~/assets/css/app.css"],

  vite: {
    plugins: [
      tailwindcss()
    ],
  },
  components:[{
    path: '~/components',
    pathPrefix: false
  }],
  modules: ["@nuxtjs/sitemap", "@nuxt/image", "@nuxt/fonts"],
  app: {
    baseURL: "/",
    head: {
      title: "Softview Ghana",
      htmlAttrs: {
        lang: "en-GH",
      },
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.ico",
          sizes: "32x32",
        },
        {
          rel: "apple-touch-icon",
          href: "/apple-touch-icon.png",
          sizes: "180x180",
        },
        {
          rel: "manifest",
          href: "/manifest.json",
        },
      ],
      meta: [
        {
          name: "description",
          content:
            "Softview Ghana builds custom software, web applications, mobile apps, cloud solutions, and IT infrastructure for businesses across Ghana and Africa.",
        },
        {
          name: "keywords",
          content:
            "Softview Ghana, Softview Ghana Ltd, Softview Ghana Limited",
        },
        { name: "author", content: "Kingsley Osei Opoku" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "robots",
          content:
            "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
        },
        {
          name: "theme-color",
          content: "#f4f4f5",
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
          content: "#333",
        },
        {
          name: "apple-mobile-web-app-title",
          content: "Softview Ghana",
        },
        {
          name: "application-name",
          content: "Softview Ghana",
        },
      ],
    },
  },
});