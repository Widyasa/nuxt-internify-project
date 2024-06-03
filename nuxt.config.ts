// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app:{
    head:{
      script:[{
        src:"https://kit.fontawesome.com/f1a55980af.js",
        crossorigin:"anonymous",
      }]
    }
  },
  css: ['~/assets/css/main.css', 'primevue/resources/themes/aura-light-green/theme.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    'nuxt-primevue'
  ],
  primevue: {
    /* Options */
    components : {
      include: '*'
    }

  }
})
