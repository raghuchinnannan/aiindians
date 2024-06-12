// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content', "@nuxt/ui", "nuxt-gtag"],
  gtag: {
    id: 'G-0RGBZWM2S5'
  },
  app: {
    head: {
      title: 'AI Indians · Celebrating India’s AI Builders',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'A resource to celebrate and stay updated with the latest AI projects & people in India.' },
        { hid: 'og:image', property: 'og:image', content: 'https://aiindians.org/aiindians-meta.png' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      ]
    }
  }
})