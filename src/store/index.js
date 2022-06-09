import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cartItems: 0,
    products: [],
    user: {},
  },
  mutations: {
    updateCart(state, payload) {
      state.cartItems += payload;
    },
    updateProducts(state, payload) {
      state.products.push(payload);
    },
    updateUser(state, payload) {
      state.user = payload;
    },
  },
  actions: {
    updateCart({ commit }, payload) {
      commit("updateCart", payload);
    },
    updateProducts({ commit }, payload) {
      commit("updateProducts", payload);
    },
    updateUser({ commit }, payload) {
      commit("updateUser", payload);
    },
  },
});
