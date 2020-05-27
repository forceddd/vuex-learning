<template>
  <div class="home">
    <products></products>
    <hr />
    <cart></cart>
  </div>
</template>

<script>
// @ is an alias to /src
import Products from "../components/Products";

export default {
  name: "Home",
  components: {
    Products
  }
};
</script>
