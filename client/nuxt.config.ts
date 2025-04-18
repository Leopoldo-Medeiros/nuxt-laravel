// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  devServer: {
    port: 80,
    host: '0.0.0.0'
  },
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxtjs/tailwindcss',
  ],
  runtimeConfig: {
    public: {
      apiBaseUrl: 'https://api.nuxt-laravel.lndo.site',
    }
  }
})