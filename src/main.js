import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'
import './registerServiceWorker'

export const firebaseApp = firebase.initializeApp(JSON.parse(process.env.VUE_APP_FIREBASE_CONFIG))

Vue.use({
  install: Vue => {
    Vue.prototype.$firebase = firebaseApp
  }
})

import VueCookies from 'vue-cookies'
Vue.use(VueCookies)

import VueResource from 'vue-resource'
Vue.use(VueResource)

Vue.config.productionTip = false

export const ThisVue = new Vue({
  el: '#app',
  router,
  store,
  render: function (h) { return h(App) }
})//.$mount('#app')
