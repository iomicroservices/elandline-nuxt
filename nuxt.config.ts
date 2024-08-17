// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=device-width,initial-scale=1',
      title: 'eLandline for virtual business numbers in the UK',
      titleTemplate: '%s | eLandline',
      meta: [
        { name: 'description', content: 'Virtual telephone numbers for small business in the UK' },
        { name: 'keywords', content: 'telephone numbers, landline numbers, virtual numbers, uk business numbers, local numbers, national numbers' },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
  },

  sitemap: {
    strictNuxtContentPaths: true,
  },
  site: {
    url: 'https://www.elandline.co.uk',
    identity: {
      type: 'Organization',
    },
    twitter: '@elandlineuk',
  },

  typescript: {
    strict: true,
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
      ],
    },
  },

  colorMode: {
    classSuffix: '',
    preference: 'dark',
    fallback: 'light',
  },

  modules: [
    'nuxt-icon',
    '@nuxt/image',
    '@vueuse/nuxt',
    'nuxt-og-image',
    '@nuxt/content',
    '@nuxtjs/robots',
    '@nuxtjs/fontaine',
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
    '@nuxthq/studio',
    '@nuxtjs/sitemap',
    '@dargmuesli/nuxt-cookie-control',
  ],

  content: {
    highlight: {
      theme: 'dracula',
    },
  },
})
