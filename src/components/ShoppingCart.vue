<template>
  <div>
    <h2>Shopping Cart</h2>
    <ul>
      <li v-for="item in cartItems" :key="item.id">
        {{ item.name }} ({{ item.quantity }}) - ₱{{ item.price * item.quantity }}
        <button @click="removeFromCart(item.id)">Remove</button>
      </li>
    </ul>
    <p>Total Items: {{ totalItems }}</p>
    <p>Total Price: ₱{{ totalPrice }}</p>
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