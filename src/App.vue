<template> 
  <div>
    <!-- Navigation Buttons -->
    <button @click="currentPage = 'ProductList'">Products</button>
    <button @click="currentPage = 'ShoppingCart'">Cart</button>

    <!-- Main Content -->
    <component :is="currentPage"></component>
  </div>
</template>

<script>
import ProductList from './components/ProductList.vue';
import ShoppingCart from './components/ShoppingCart.vue';

export default {
  components: {
    ProductList,
    ShoppingCart
  },
  data() {
    return {
      currentPage: 'ProductList' // Default page
    };
  }
};
</script>

<style scoped>
/* Align products horizontally */
.product-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
</style>
