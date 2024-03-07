import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import ArchiWeb from '@inst-aaa/archiweb-core';

Vue.use(ArchiWeb)

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
