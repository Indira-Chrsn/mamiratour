// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: ['@nuxt/eslint'],
  devtools: { enabled: true },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  css: ['~/assets/scss/main.scss'], compatibilityDate: '2024-04-03',
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/config" as *;',
        },
      },
    },
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
})
