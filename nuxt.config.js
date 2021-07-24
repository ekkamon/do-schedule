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
      { hid: 'description', name: 'description', content: 'เว็บไซต์ตารางเรียนเเละเข้าห้องเรียน Meet โดยไม่ต้องค้นหา ช่วยให้เข้าเรียนสะดวกขึ้นเเละรวดเร็วขึ้น'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/assets/css/bootstrap.min.css' },
      { rel: 'stylesheet', href: '/assets/font-awesome/css/all.min.css' }
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
