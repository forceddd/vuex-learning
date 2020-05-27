//1.导入Vue和Vuex模块
import Vue from 'vue'
import Vuex from 'vuex'
//2.使用Vuex插件
Vue.use(Vuex)
//3.创建暴露的store实例
export default new Vuex.Store({
  state: {
    //当前的状态
    count: 0,
    username: 'forceddd'
  },
  mutations: {
    //声明同步的方法
    incrementMutation(state) {//传入state属性
      //修改state
      state.count++;
    },
    //没有牵涉到异步操作 也可以不通过actions
    decrementMutation(state) {
      state.count--
    },
    incrementAsync(state, amount) {
      state.count += amount;
    }
  },
  actions: {
    //声明异步的方法
    /*  incrementAction({ commit }) {//从上下文中解构出commit
       //commit mutations中声明的方法
       commit('incrementMutation')
     },
     decrementAction({ commit }) {
       commit('decrementMutation')
     } */
    incrementAsync({ commit }, { amount }) {//因为传入的是对象 可以解构出amount
      setTimeout(() => {
        commit('incrementAsync', amount)//见参数提交到mutations
      }, 500)
    }
  },
  getters: {
    evenOrOdd(state) {
      return state.count % 2 === 0 ? '偶数' : '奇数'
    }
  },
  modules: {
  }
})
