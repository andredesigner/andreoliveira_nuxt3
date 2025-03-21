// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [{ rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css' }],
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
      meta: [
        { name: 'description', content: 'Olá, meu nome é André Oliveira. Minha paixão está no encontro entre design, tecnologia e marca.' },
        { name: 'keywords', content: 'Designer UX/UI, Web Designer, Identidade Visual, Design de Produtos Digitais, Designer em São Paulo, Criação de Websites, Front-end, UX Designer, UI Designer, Programação para Designers, André Oliveira Designer' },

        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'André Oliveira | UX/UI & Brand Designer' },
        { property: 'og:description', content: 'Minha paixão está no encontro entre design, tecnologia e marca.' },
        { property: 'og:image', content: 'https://andreoliveira.des.br/images/og.png' },
        { property: 'og:url', content: 'https://andreoliveira.des.br' },

        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'André Oliveira | UX/UI & Brand Designer' },
        { name: 'twitter:description', content: 'Minha paixão está no encontro entre design, tecnologia e marca.' },
        { name: 'twitter:image', content: 'https://andreoliveira.des.br/images/og.png' }
      ]
    }
  },

  compatibilityDate: '2024-11-01',

  devtools: { enabled: true },

  css: ['~/assets/scss/main.scss'],

  modules: [['@nuxtjs/google-fonts', {
    families: {
      Labrada: {
        wght: '300..400',
        ital: '400',
      },
      Inter: [300, 400],
    }
  }], '@nuxt/image'],

  devServer: {     
    port: 3000, // default: 3000     
    host: '0.0.0.0', // default: localhost   
  }, 
});
