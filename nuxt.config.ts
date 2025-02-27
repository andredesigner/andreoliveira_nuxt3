// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [{ rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css' }]
    }
  },
  compatibilityDate: '2024-11-01',

  devtools: { enabled: true },

  css: ['~/assets/scss/main.scss'],

  modules: [
    ['@nuxtjs/google-fonts', {
      families: {
        Labrada: {
          wght: '300..400',
          ital: '400',
        },
        Inter: [300, 400],
      }
    }], 
    '@nuxt/image',
    '@nuxtjs/google-gtag'
  ],

  runtimeConfig: {
    public: {
      googleAnalyticsId: 'G-P6HJWKZ279',
    }
  },

  devServer: {     
    port: 3000, // default: 3000     
    host: '0.0.0.0', // default: localhost   
  }, 
})