import Vue from 'vue'
import App from './App.vue'
import router from './router' //导入路由
import './plugins/element.js' //导入element
import './assets/css/global.css' //导入全局样式
import axios from 'axios' //axios

//配置axios
axios.defaults.baseURL="http://localhost:8080/"
axios.interceptors.request.use(config => {
  console.log(config)
  config.headers.Authorization = window.sessionStorage.getItem("token");
  return config;
})
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
