import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home'
import Catalog from '../pages/Catalog'

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
        }
    ]
})
