<template>
  <div class="container mt-4">
    <h2 class="text-center mb-4">Products</h2>
    <div class="row">
      <div v-for="product in products" :key="product.id" class="col-md-4 mb-4">
        <div class="card shadow-sm">
          <div class="card-body text-center">
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text text-primary fw-bold">₱{{ product.price }}</p>
            <button class="btn btn-success w-100" @click="addToCart(product.id)">
              <i class="bi bi-cart-plus"></i> Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  computed: mapState(['products']),
  methods: {
    ...mapMutations(['addToCart'])
  }
};
</script>

<style scoped>
</style>
