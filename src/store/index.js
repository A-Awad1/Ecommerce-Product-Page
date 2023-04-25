import { createStore } from "vuex";

export default createStore({
  state: {
    cart: [
      {
        id: 1,
        name: "Fall Limited Edition Sneakers",
        price: 125,
        quantity: 3,
      },
    ],
    // cart: [],
  },
  getters: {
    productsNumber: function (state) {
      return state.cart.reduce((acc, e) => acc + e.quantity, 0);
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
