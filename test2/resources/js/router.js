import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

const routes = [
    {
        path: '/',
        name: Home,
        component: Home
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('./views/authentification/Login.vue')
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('./views/authentification/Register.vue')
    }
];

const router = new Router({
    mode: 'history',
    routes: routes
});

export default router;