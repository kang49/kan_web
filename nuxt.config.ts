// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  experimental: {
    payloadExtraction: false,
  },
  ssr: true,
  css: ['~/assets/styles.css'],
  components: {
    dirs: ["~/components"],
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image', '@nuxt/content'],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no',
      link: [
        { rel: 'stylesheet', href: 'https://pro.fontawesome.com/releases/v5.15.4/css/all.css', },
        { rel: 'icon', type: 'image/png', href: '/favicon.ico' }
      ],
      title: 'Kankawee Aramrak',
      script: [],
      meta: [
        { name: 'google-adsense-account', content: 'ca-pub-3005040693139479' },
      ]
    },
  },
})
