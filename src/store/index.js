import { createStore } from "vuex";
import JsonProducts from "../json.json";

export default createStore({
  state: {
    iconCartD:
      "M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z",
    cart: [],
    productData: JsonProducts[0],
  },
  getters: {
    productsNumber: function (state) {
      return state.cart.reduce((acc, e) => acc + e.quantity, 0);
    },
  },
  mutations: {
    addItem: function (state, newValue) {
      state.cart.push(newValue);
    },
    removeItem: function (state, itemId) {
      // let index = state.cart.indexOf(state.cart.filter((e) => e.id === itemId)[0]);
      let index = state.cart.map((e, index) => (e.id === itemId ? index : ""));
      state.cart.splice(index, 1);
    },
    increaseItemQuantity: function (state, newValue) {
      state.cart.forEach((e) => {
        e.id === state.productData.id ? (e.quantity += newValue) : "";
      });
    },
  },
  actions: {
    addProduct: function ({ commit, state }, quantity) {
      if (
        state.cart.length &&
        state.cart.some((e) => e.id === state.productData.id)
      ) {
        commit("increaseItemQuantity", quantity);
      } else {
        commit("addItem", {
          id: state.productData.id,
          name: state.productData.name,
          price: state.productData.priceAfterDiscount,
          quantity: quantity,
        });
      }
    },
    removeProduct: function ({ commit }, productId) {
      commit("removeItem", productId);
    },
  },
  modules: {},
});
