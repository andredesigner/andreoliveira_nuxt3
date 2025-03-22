// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css' 
        },
        {
          rel: 'stylesheet',
          href: 'https://use.typekit.net/qqr8kba.css' 
        }
      ],
      script: [
        {
          hid: 'google-analytics',
          src: 'https://www.googletagmanager.com/gtag/js?id=G-P6HJWKZ279',
          async: true,
        },
        {
          hid: 'google-analytics-config',
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-P6HJWKZ279');
          `,
          type: 'text/javascript',
          charset: 'utf-8',
        }
      ],
      __dangerouslyDisableSanitizersByTagID: {
        'google-analytics-config': ['innerHTML'],
      },
    }
  },
  compatibilityDate: '2024-11-01',

  devtools: { enabled: true },

  css: ['~/assets/scss/main.scss'],

  modules: [['@nuxtjs/google-fonts', {
    families: {
      'EB+Garamond': {
        ital: '400',
      },
      Labrada: {
        wght: '300..400',
        ital: '400',
      },

    }
  }], '@nuxt/image'],

  devServer: {     
    port: 3000, // default: 3000     
    host: '0.0.0.0', // default: localhost   
  }, 
})