import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'

Vue.config.devtools = true
Vue.config.productionTip = false

Vue.use(Vuelidate)

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
