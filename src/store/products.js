import Vue from 'vue';
const loadProducts = async () => {
  let response  = await Vue.prototype.$api.instance.get('/products');
  return await response.data;
}

const loadCategories = async () => {
  let response  = await Vue.prototype.$api.instance.get('/products/categories');
  return await response.data;
}

export default {
    namespaced: true,
    state: {
        products: [],
        categories: [],
        singleProduct: []
    },
    getters: {
        getProducts(state) {
            return state.products
        },
        getCategories(state) {
          return state.categories
        },
        getSingleProduct(state) {
          return state.singleProduct
        }
    },
    mutations: {
        SET_PRODUCTS(state, payload) {
            state.products = payload
        },
        SET_CATEGORIES(state, payload) {
            state.categories = payload
        },
        SET_PRODUCTS_FROM_CATEGORY(state, payload) {
            state.products = payload
        },
        SET_SINGLE_PRODUCT(state, payload) {
          state.singleProduct = payload
        },
        SET_WITH_PRICE_SORT(state, payload) {
          if (payload === 'max')
            state.products = state.products.sort((a, b) => a.price - b.price);
          if (payload === 'min')
            state.products = state.products.sort((a, b) => b.price - a.price);
        }
    },
    actions: {
        async loadProducts({ commit }, payload) {
            try {
                const products = await loadProducts()
                commit('SET_PRODUCTS', products)
            } catch (error) {
                console.error(error)
            }
        },
        async loadCategories({ commit }, payload) {
          try {
            const categories = await loadCategories()
            commit('SET_CATEGORIES', categories)
          } catch (error) {
            console.error(error)
          }
        },
        async setProductsFromCategory({ commit }, payload) {
          let response = await Vue.prototype.$api.filter.changeFilter('/products/category/' + payload.target.value)
          if (response)
            commit('SET_PRODUCTS_FROM_CATEGORY', response.data)
          return response
        },
        async loadSingleProduct({ commit }, payload) {
          let response = await Vue.prototype.$api.instance.get('/products/' + payload)
          if (response)
            commit('SET_SINGLE_PRODUCT', response.data)
          return response.data
        },
        setWithPriceSort({ commit }, payload) {
          commit('SET_WITH_PRICE_SORT', payload.target.value)
        }
    }
}
