<template>
  <div>
    <h2>我的商铺</h2>
    <ul>
      <li v-for="product in products" :key="product.id">
        <h3>{{product.title}}---{{product.price|currency}}----{{product.inventory}}</h3>
        <button @click="addCart(product)" :disabled="!product.inventory">添加到购物车</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState("products", ["products"])
  },
  created() {
    this.$store.dispatch("products/getProducts");
  },
  methods: {
    addCart(product) {
      this.$store.dispatch("cart/addCart", { product });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>