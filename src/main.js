import Vue from 'vue'
import 'normalize.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
import store from './store'
import Extend from './libs/extend'

if (process.env.VUE_APP_SERVER === 'mock') require('../mock')

Vue.config.productionTip = false

Vue.use(ElementUI, { size: 'small', zIndex: 3000 })

Vue.use(Extend)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
