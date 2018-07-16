import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import { store } from './store/store.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store: store,
  router,
  template: '<App/>',
  components: { App }
})
