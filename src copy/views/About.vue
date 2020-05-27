<template>
  <div class="about">
    <h1>This is an about page</h1>
    <!-- <h2>{{username}}</h2>
    <h3>{{count}}</h3>-->
    <h2>{{myName}}</h2>
    <h3>{{myCount}}</h3>
    <h3>{{evenOrOdd}}</h3>
    <button @click="increment">+++</button>
    <button @click="incrementAsync">+++异步</button>
    <button @click="decrement">---</button>
  </div>
</template>

<script>
//导出vuex辅助函数
import { mapActions, mapGetters, mapState, mapMutations } from "vuex";
//如果需要传入参数 修改state 就不能使用mapActions mapMutations了 这种方式无法传入参数
export default {
  computed: {
    /* count() {
        return this.$store.state.count;
      },
      username(){
        return this.$store.state.username;
      } */
    //使用辅助函数 ...扩展运算符
    //方法一
    // ...mapState(["count", "username"])
    //方法二 变量名不相同时
    ...mapState({
      myCount: "count",
      myName: "username"
    }),
    /*  evenOrOdd() {
      return this.$store.getters.evenOrOdd;
    } */
    ...mapGetters(["evenOrOdd"])
  },
  methods: {
    /* increment() {
      //dispatch actions中声明的方法
      // this.$store.dispatch("incrementAction");
      //没有牵涉到异步操作 可以不通过actions 直接commit
      this.$store.commit("incrementMutation");
    },
    decrement() {
      // this.$store.dispatch("decrementAction");
      //没有牵涉到异步操作 可以不通过actions 直接commit
      this.$store.commit("decrementMutation");
    }, 
    这两个方法是直接commit的 可以通过辅助函数简化写为
    */
    ...mapMutations({
      increment: "incrementMutation",
      decrement: "decrementMutation"
    }),
    //dispatch actions的操作可以简写成
    // ...mapActions(["incrementAsync"])
    incrementAsync() {
      //异步操作一定要通过actions提交mutations
      //在组件内部提交数据 (载荷形式分发) dispatch('action',param)
      this.$store.dispatch("incrementAsync", {
        amount: 10
      });
      //第二种方式 actions中接收参数方式不变
      /* this.$store.dispatch({
        type:'incrementAsync',
        amount:10
      }) */
    }
  }
};
</script>