import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home'
import Catalog from '../pages/Catalog'
import Cart from '../pages/Cart'
import Product from '../pages/Product'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/catalog',
            name: 'Catalog',
            component: Catalog
        },
        {
            path: '/cart',
            name: 'Cart',
            component: Cart
        },
        {
            path: '/product/:id',
            name: 'Product',
            component: Product
        }
    ]
})
