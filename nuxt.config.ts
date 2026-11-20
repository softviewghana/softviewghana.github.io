import tailwindcss from "@tailwindcss/vite";

const $siteName = "Softview Ghana";
const $siteDescription =
  "Softview Ghana builds custom software, web applications, mobile apps, cloud solutions, and IT infrastructure for businesses across Ghana and Africa.";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/fonts", "@nuxt/image", "@nuxtjs/seo"],
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  ssr: true,
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  css: ["~/assets/css/app.css"],
  app: {
    baseURL: "/",
    head: {
      title: "Softview Ghana — Your Trusted IT Solutions Partner",
      titleTemplate: "%s ",
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
          rel: "icon",
          type: "image/png",
          href: "/icon-192.png",
          sizes: "192x192",
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
          content: $siteDescription,
        },
        {
          name: "keywords",
          content: "Softview Ghana, Softview Ghana Ltd, Softview Ghana Limited",
        },
        {
          name: "author",
          content: "Kingsley Osei Opoku",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          name: "robots",
          content:
            "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
        },
        {
          name: "theme-color",
          content: "#27c978",
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
          content: "#27c978",
        },
        {
          name: "apple-mobile-web-app-title",
          content: "Softview Ghana",
        },
        {
          name: "application-name",
          content: $siteName,
        },
        {
          property: "fb:pages",
          content: "490345395101904",
        },
      ],
    },
  },
  robots: {
    enabled: true,
  },
  site: {
    url: "https://softviewghana.com",
    name: "Softview Ghana",
  },
  image: {
    provider: "ipxStatic",
  },
});
