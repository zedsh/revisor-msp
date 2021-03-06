import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vueHeadful from 'vue-headful'
import isLoader from '@/components/system/isLoader'

Vue.component('vue-headful', vueHeadful)
Vue.config.productionTip = false
Vue.component('isLoader', isLoader)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
