// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/fonts', '@unocss/nuxt', '@nuxt/eslint'],
  fonts: {
    families: [
      {
        name: 'Fraunces',
        weights: ['400', '500', '600'],
        preload: true,
        global: true,
      },
      {
        name: 'Sora',
        weights: ['400', '500', '600'],
        preload: true,
        global: true,
      },
    ],
  },

  css: ['~/assets/main.css'],

  routeRules: {
    '/': {
      prerender: true,
    },
  },
})
