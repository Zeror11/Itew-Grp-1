<template>
  <div>
    <h2>Products</h2>
    <button @click="fetchProducts">Load Products</button>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.name }} - ₱{{ product.price }}
        <button @click="addToCartAsync(product.id)">Add to Cart</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: mapState(['products']),
  methods: {
    ...mapActions(['fetchProducts', 'addToCartAsync'])
  },
  mounted() {
    this.fetchProducts(); // Auto-fetch products when component mounts
  }
};
</script>
