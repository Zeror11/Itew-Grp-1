import { createStore } from 'vuex'; 

export default createStore({
  state() {
    return {
      products: [
        { id: 1, name: 'Primer', price: 1500 },
        { id: 2, name: 'Foundation', price: 700 },
        { id: 3, name: 'Concealer', price: 400 },
        { id: 4, name: 'Setting Powder', price: 1500 },
        { id: 5, name: 'Mascara', price: 300 },
        { id: 6, name: 'Eyeshadow Palette', price: 800 },
        { id: 7, name: 'Eyeliner', price: 300 },
        { id: 8, name: 'Lipstick', price: 400 },
        { id: 9, name: 'BB Cream or CC Cream', price: 1500 },
        { id: 10, name: 'Contour Kit', price: 800 }
      ],
      cart: {}
    };
  },
  mutations: {
    addToCart(state, productId) {
      if (state.cart[productId]) {
        state.cart[productId]++;
      } else {
        state.cart[productId] = 1;
      }
    },
    removeFromCart(state, productId) {
      if (state.cart[productId]) {
        state.cart[productId]--;
        if (state.cart[productId] === 0) {
          delete state.cart[productId];
        }
      }
    },
    setProducts(state, products) {
      state.products = products;
    }
  },
  actions: {
    async fetchProducts({ commit }) {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        commit('setProducts', data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    },
    async addToCartAsync({ commit }, productId) {
      return new Promise((resolve) => {
        setTimeout(() => {
          commit('addToCart', productId);
          resolve();
        }, 500);
      });
    }
  },
  getters: {
    cartItems(state) {
      return Object.entries(state.cart).map(([id, quantity]) => {
        const product = state.products.find(p => p.id == id);
        return { ...product, quantity };
      });
    },
    totalItems(state) {
      return Object.values(state.cart).reduce((acc, num) => acc + num, 0);
    },
    totalPrice(state, getters) {
      return getters.cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    }
  }
});
