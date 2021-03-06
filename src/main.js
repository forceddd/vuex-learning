import Vue from 'vue'
import App from './App.vue'
import router from './router'
//导入创建的store实例
import store from './store'
import axios from 'axios'
Vue.config.productionTip = false
Vue.prototype.$axios = axios;
//注册全局组件
import Cart from "./components/Cart";
Vue.component(Cart.name, Cart)
//全局注册过滤器
Vue.filter('currency', (price) => {
  return '$' + price
})
new Vue({
  router,
  //一定要挂载store实例
  store,
  render: h => h(App)
}).$mount('#app')
