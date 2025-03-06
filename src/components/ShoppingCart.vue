<template>
  <div class="container mt-4">
    <h2 class="text-center mb-4">Shopping Cart</h2>

    <div v-if="cartItems.length > 0">
      <ul class="list-group">
        <li v-for="item in cartItems" :key="item.id" class="list-group-item d-flex justify-content-between align-items-center">
          <div>
            <strong>{{ item.name }}</strong> ({{ item.quantity }})  
            <span class="text-primary">- ₱{{ item.price * item.quantity }}</span>
          </div>
          <button class="btn btn-danger btn-sm" @click="removeFromCart(item.id)">
            <i class="bi bi-trash"></i> Remove
          </button>
        </li>
      </ul>

      <div class="mt-3 text-center">
        <p class="fw-bold">Total Items: <span class="text-success">{{ totalItems }}</span></p>
        <p class="fw-bold">Total Price: <span class="text-danger">₱{{ totalPrice }}</span></p>
      </div>
    </div>

    <div v-else class="alert alert-warning text-center">
      Your cart is empty.
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  computed: {
    ...mapGetters(['cartItems', 'totalItems', 'totalPrice'])
  },
  methods: {
    ...mapMutations(['removeFromCart'])
  }
};
</script>

<style scoped>

</style>
