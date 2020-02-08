import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home'
import Index from './pages/index'
import Cart from './pages/cart'
import Order from './pages/order'
import OrderList from './pages/orderList'
import OrderConfirm from './pages/orderConfirm'
import OrderPay from './pages/orderPay'
import AliPay from './pages/alipay'
Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'home',
        component: Home,
        redirect: '/index'
        ,
        children: [{
            path: '/index',
            name: 'index',
            component: Index
        },
        {
            path: '/product/:id',
            name: 'product',
            component:  () => import('./pages/product.vue')
        },
        {
            path: '/detail/:id',
            name: 'detail',
            component: () => import('./pages/detail.vue')
        }
        ]
    }, {
        path: '/cart',
        name: 'cart',
        component: Cart
    },
    {
        path: '/login',
        name: 'login',
        component:  () => import('./pages/login.vue')
    }, {
        path: '/order',
        name: 'order',
        component: Order,
        children: [{
            path: 'list',
            name: 'order-list',
            component: OrderList,
        }, {
            path: 'confirm',
            name: 'order-confirm',
            component: OrderConfirm,
        }, {
            path: 'pay',
            name: 'order-pay',
            component: OrderPay,
        }, {
            path: 'alipay',
            name: 'alipay',
            component: AliPay,
        }]
    }
    ]
})
