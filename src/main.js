import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Bus from './lib/bus'
import CountTo from '_c/count-to'

if (process.env.NODE_ENV === 'production') {
  require('./mock')
}

Vue.config.productionTip = false
Vue.prototype.$bus = Bus

new Vue({
  router,
  store,
  render: h => {
    return h('div', [
      h('span', '111'),
      h('span', '222')
    ])
  }
}).$mount('#app')
