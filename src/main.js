import Vue from 'vue'
import App from './App.vue'
import router from './router' //导入路由
import './plugins/element.js' //导入element
import './assets/css/global.css' //导入全局样式
import axios from 'axios' //axios

//配置axios
Vue.prototype.$http = axios
Vue.config.productionTip = false
axios.defaults.baseURL="http://localhost:8080/"

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
