import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import './assets/scss/main.scss'

import ApiPlugin from './plugins/api'
import LoadPlugin from './plugins/load'

Vue.use(ApiPlugin)
Vue.use(LoadPlugin)

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
