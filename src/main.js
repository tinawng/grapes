// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: https://gridsome.org/docs/client-api
import '~/assets/css/base.postcss'

import ZonaProExtraLight from "~/assets/fonts/ZonaPro-ExtraLight.otf"
import ZonaProBold from "~/assets/fonts/ZonaPro-Bold.otf"

import AOS from 'aos';
import 'aos/dist/aos.css';
if (process.isClient) {
  AOS.init();
}

const VueScrollTo = require('vue-scrollto')

export default function (Vue, { router, head, isClient }) {

  // ⚡️ Preload fonts before browser start parsing CSS to find them
  head.link.push({ rel: "preload", href: ZonaProExtraLight, as: "font", crossorigin: "" })
  head.link.push({ rel: "preload", href: ZonaProBold, as: "font", crossorigin: "" })

  Vue.prototype.$event_bus = new Vue();
  Vue.use(VueScrollTo, { duration: 1414 })

  head.htmlAttrs = { lang: 'en' }
  head.bodyAttrs = { class: 'antialiased' }
}
