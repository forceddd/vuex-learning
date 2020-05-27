import Vue from 'vue'
import App from './App.vue'
import router from './router'
//导入创建的store实例
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  //一定要挂载store实例
  store,
  render: h => h(App)
}).$mount('#app')
