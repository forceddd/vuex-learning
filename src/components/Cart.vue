<template>
  <div>
    <h2>我的购物车</h2>
    <ul>
      <li v-for="item in cartList" :key="item.id">
        <h3>{{item.title}}--{{item.price}}--{{item.count}}---{{item.price*item.count}}</h3>
      </li>
    </ul>
    <h3>总价：{{totalPrice|currency}}</h3>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "Cart",
  computed: {
    ...mapState("cart", ["cartList"]),
    ...mapGetters("cart", ["totalPrice"])
  },
  created() {
    // this.$store.commit("cart/addC");
  }
};
</script>

<style lang="scss" scoped>
</style>