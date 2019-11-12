import Vue from 'vue';

import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Cart from '../pages/Cart.vue';
import Goods from '../pages/Goods.vue';
import List from '../pages/List.vue';
import Home from '../pages/Home.vue';
import Login from '../pages/Login.vue';
import Reg from '../pages/Reg.vue';

const router = new VueRouter({
    routes: [{
            name: 'home',
            path: '/',
            component: Home
        }, {
            name: 'goods',
            path: '/goods',
            component: Goods
        }, {
            name: 'cart',
            path: '/cart',
            component: Cart
        },
        {
            name: 'list',
            path: '/list',
            component: List
        }, {
            name: 'login',
            path: '/login',
            component: Login
        }, {
            name: 'reg',
            path: '/reg',
            component: Reg
        }
    ]
});
//全局路由守卫
/* router.beforeEach((to, from, next) => {
    window.console.log(to, from, next);
}) */

export default router;