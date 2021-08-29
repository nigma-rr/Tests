import products from '../assets/json/products.json'

const loadProducts = () => {
    return new Promise((resolve) => {
        resolve(products)
    })
}

export default {
    namespaced: true,
    state: {
        products: []
    },
    getters: {
        getProducts(state) {
            return state.products
        }
    },
    mutations: {
        SET_PRODUCTS(state, payload) {
            state.products = payload
        }
    },
    actions: {
        async loadProducts({ commit }, payload) {
            try {
                const products = await loadProducts()
                commit('SET_PRODUCTS', products.products)
            } catch (error) {
                console.error(error)
            }
        }
    }
}