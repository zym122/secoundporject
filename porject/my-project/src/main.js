import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import store from './stores'
import router from './routers'
Vue.prototype.$axios = axios
Vue.config.productionTip = false

import 'amfe-flexible';
// import img1 from './js/goodscar'

new Vue({
  // vue-router this.$router
  router,
  // vuex this.$store
  store,
  render: h => h(App),
}).$mount('#app')