export default defineNuxtConfig({
  compatibilityDate: "2025-02-28",
  devtools: { enabled: false },

  devServer: {
    host: "localhost",
  },

  modules: [
    "nuxt-auth-sanctum",
    "@nuxtjs/tailwindcss" // Use the official Nuxt module for Tailwind CSS
  ],
  sanctum: {
    baseUrl: "http://localhost:80", // Laravel backend API
  },
  css: ["~/assets/css/tailwind.css"], // Include Tailwind CSS file
  postcss: {
    plugins: {
      tailwindcss: {}, // Use the standard Tailwind CSS plugin
      autoprefixer: {},
    },
  },
})
