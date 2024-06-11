// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content', "@nuxt/ui", "@nuxt/fonts"],
  app: {
    head: {
      title: 'AI Indians · Celebrating India’s AI Builders',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'A resource to celebrate and stay updated with the latest AI projects & people in India.' },
        { hid: 'og:image', property: 'og:image', content: '/aiindians-meta.png' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      ]
    }
  }
})