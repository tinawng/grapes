// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: https://gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import '~/assets/css/base.postcss'

import AOS from 'aos';
import 'aos/dist/aos.css';
if (process.isClient) {
  AOS.init();
}

const VueScrollTo = require('vue-scrollto')

export default function (Vue, { router, head, isClient }) {

  Vue.prototype.$event_bus = new Vue();
  Vue.use(VueScrollTo, { duration: 1414 })

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  head.htmlAttrs = { lang: 'en' }
  head.bodyAttrs = { class: 'antialiased font-body font-serif' }
}
