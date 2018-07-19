import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import store from './vuex/store'
import { sync } from 'vuex-router-sync'
import Auth from './auth'
import Promise from 'bluebird'
// adding jquery to the project
import 'expose-loader?$!expose-loader?jQuery!jquery'
// adding sematin
import './vendors/semantic/dist/semantic.min.js'
import './vendors/semantic/dist/semantic.min.css'
import './vendors/boosterStyles/custom.css'

Vue.use(VueRouter)
Vue.use(VueResource)

import App from './components/App.vue'
// Components
import Home from './components/home/index.vue';
import Login from './components/login/index.vue';
import AuthSuccess from './components/auth_success/index.vue';

//Error
import Error from './components/error/error.vue';
//router
const routes = [
    { path: '/', redirect: { name: 'login' }},
    {
        path: '/home',
        name: 'home',
        component: Home,
        meta: { requiresAuth: true }
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: { requiresAuth: false }
    },
    {
        path: '/auth_success',
        name: 'auth-success',
        component: AuthSuccess,
        meta: { requiresAuth: false }
    },
    {
      path: '/error',
      name: 'error',
      component: Error,
      meta: { requiresAuth: false }
    },
]

export const router = new VueRouter({
    mode: process.env.ROUTER_MODE,
    base: '/',
    linkActiveClass: 'active',
    routes
})

export const appClientCreds = {
    client: process.env.CLIENT,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET
}

export const apiUrl = process.env.API_URL
export const redirectUrl = process.env.REDIRECT_URL

// Check auth
const auth = new Auth()

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!auth.checkAuth()) {
            next({
                path: '/login',
                query: { redirect: to.fullPath }
            })
        } else {
            next()
        }
    } else {
        next()
    }
})

// sync the router with the vuex store.
// this registers `store.state.route`
sync(store, router)

const app = new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
