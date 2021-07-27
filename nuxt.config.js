export default {
  target: 'static',
  server: {
    host: '0.0.0.0'
  },
  head: {
    title: 'DoSchedule - เว็บไซต์ดูตารางเรียนเเละเข้า Meet อัตโนมัติ',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'DoSchedule เว็บไซต์ตารางเรียนออนไลน์เข้าเรียน Meet ได้ทันที ไม่ว่าจะโรงเรียนไหนเรายินดีลงตารางเรียนให้ได้ทุกโรงเรียน !'},
      { hid: 'og:title', name: 'og:title', content: 'DoSchedule - เว็บไซต์ดูตารางเรียนเเละเข้า Meet อัตโนมัติ' },
      { hid: 'og:type', name: 'og:type', content: 'website' },
      { hid: 'og:url', name: 'og:url', content: 'https://www.doschedule.co/' },
      { hid: 'og:image', name: 'og:image', content: '/assets/img/website-banner.png' },
      { hid: 'og:description', name: 'og:description', content: 'DoSchedule - เว็บไซต์ดูตารางเรียนเเละเข้า Meet อัตโนมัติ' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/assets/css/bootstrap.min.css' },
      { rel: 'stylesheet', href: '/assets/font-awesome/css/all.min.css' },
    ],
    script: [
      { src: '/assets/js/bootstrap.min.js' },
      { src: '/assets/font-awesome/js/all.min.js' },
      { src: 'https://www.googletagmanager.com/gtag/js?id=G-6CGVP6NE9Q', defer: true },
      { src: '/assets/js/analytics.js' }
    ]
  },

  css: [
    '@/assets/style.css'
  ],

  plugins: [
  ],
  components: true,

  buildModules: [
  ],

  modules: [
    '@nuxtjs/axios',
    'nuxt-sweetalert2'
  ],
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
