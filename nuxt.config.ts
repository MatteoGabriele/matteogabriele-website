// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/fonts", "@unocss/nuxt", "@nuxt/hints"],
  fonts: {
    families: [
      {
        name: "Roboto",
        weights: ["400", "500", "600"],
        preload: true,
        global: true,
      },
    ],
  },
  css: ["~/assets/main.css"],
});
