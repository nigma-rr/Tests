import Vue from 'vue';
const loadCart = async () => {
    let cartResponse = await Vue.prototype.$api.cart.getUserCart('/carts/1')
    let productsResponse = await Vue.prototype.$api.instance.get('/products')
    return productsResponse.data.filter(product =>
      cartResponse.data.products.some(item => {
        if (item.productId === product.id) {
          product.productId = item.productId;
          product.quantity = item.quantity;
          return true;
        }
        return false;
      })
    )
}

export default {
  namespaced: true,
  state: {
    cart: []
  },
  getters: {
    getCart(state) {
      return state.cart
    },
    getSum(state) {
      return state.cart.reduce((accumulator, product) => accumulator + product.price * product.quantity, 0);
    }
  },
  mutations: {
    SET_CART(state, payload) {
      state.cart = payload
    },
    UPDATE_CART(state, payload) {
      if (state.cart.some(item => item.productId === payload[0].productId)) {
        const index = state.cart.findIndex(item => item.productId === payload[0].productId);
        state.cart[index].quantity += 1;
      } else {
        state.cart.push(payload[0])
      }
    },
    DELETE_FROM_CART(state, payload) {
      state.cart = state.cart.filter(product => product.productId !== payload[0].productId);
    }
  },
  actions: {
    async loadCart({ commit }, payload) {
      try {
        const cart = await loadCart()
        commit('SET_CART', cart)
      } catch (error) {
        console.error(error)
      }
    },
    async updateCart({ commit }, payload) {
      let response = await Vue.prototype.$api.cart.updateCart('/carts', JSON.stringify(
        payload
      ))
      if (response)
        commit('UPDATE_CART', payload.products)
      return response
    },
    async deleteFromCart({ commit }, payload) {
      commit('DELETE_FROM_CART', payload.products)
    },
  }
}
