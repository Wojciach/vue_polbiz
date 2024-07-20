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
      script: [
        {
          src: `https://www.googletagmanager.com/gtag/js?id=G-26TFT0YBV3`,
          async: true,
        },
        {
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-26TFT0YBV3');
          `,
          type: 'text/javascript',
        },
      ],
      title: 'polbiz.net',
      charset: 'utf-8',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Tworzenie stron internetowych na zlecenie' },
        { name: 'keywords', content: 'Budowa stron internetowych, prowadzenie socjal mediów, sklep intenetowy' },
        { name: 'author', content: 'polbiz' },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:title', content: 'Tworzenie stron internetowych na zlecenie' },
        { property: 'og:description', content: 'Budowa stron internetowych, prowadzenie socjal mediów, sklep intenetowy' },
        { property: 'og:image', content: '/img/info_logo_cut.png' },
        { property: 'og:url', content: 'https://polbiz.net/' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Budowa stron internetowych, prowadzenie socjal mediów, sklep intenetowy' },
        { name: 'twitter:description', content: 'Budowa stron internetowych, prowadzenie socjal mediów, sklep intenetowy' },
        { name: 'twitter:image', content: '/img/info_logo_cut.png' },
        { name: 'geo.placename', content: 'Lubin, Poland' },
        { name: 'geo.region', content: 'PL-DS' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Strony internetowe' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/img/info_logo_cut.png' },
      ]
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