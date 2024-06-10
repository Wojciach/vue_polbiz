// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', "@nuxt/image", '@nuxtjs/sitemap'],
  site: {
    url: 'https://polbiz.net/'
  },
  app: {
    pageTransition: { name: 'fader', mode: 'out-in' },
    head: {
      htmlAttrs: {
        lang: 'pl',
      },
      title: 'PolBiz.net',
      charset: 'utf-8',
    },
  },
  plugins: [
    '~/plugins/gsap.js'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ['~/assets/css/main.css'],
})