import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCopy } from '@fortawesome/free-solid-svg-icons'
import { faChrome, faSafari, faOpera, faFirefox } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCopy, faChrome, faSafari, faOpera, faFirefox )

Vue.component('font-awesome-icon', FontAwesomeIcon)

import {InlineSvgPlugin} from 'vue-inline-svg';
Vue.use(InlineSvgPlugin);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  mounted: () => document.dispatchEvent(new Event("x-app-rendered")),
}).$mount('#app')
