import { createStore } from "vuex";
import JsonProducts from "../json.json";

export default createStore({
  state: {
    productData: JsonProducts[0],
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
