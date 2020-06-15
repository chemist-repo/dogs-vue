import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import plugins from './plugins'
import directives from './directives'
import uiComponents from './components/ui'

import './assets/scss/main.scss'

Vue.use(plugins)
Vue.use(directives)
Vue.use(uiComponents)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
