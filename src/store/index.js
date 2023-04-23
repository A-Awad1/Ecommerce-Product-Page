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
    // cart: null,
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
