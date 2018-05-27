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
import Greeting from './components/booster/greeting.vue';
// Printer
import PrinterList from './components/printer/list.vue';
import PrinterEdit from './components/printer/edit.vue';
import PrinterNew from './components/printer/new.vue';
import PrinterSuccess from './components/printer/success.vue';
// Scanner
import ScannerList from './components/scanner/list.vue';
import ScannerEdit from './components/scanner/edit.vue';
import ScannerNew from './components/scanner/new.vue';
import ScannerSuccess from './components/scanner/success.vue';
// Settings
import Settings from './components/settings/list.vue';
//Error
import Error from './components/error/error.vue';
//router
const routes = [
    { path: '/', redirect: { name: 'home' }},
    {
        path: '/home',
        name: 'home',
        component: Home,
        meta: { requiresAuth: true }
    },
    {
      path: '/printer',
      name: 'printer-list',
      component: PrinterList,
      meta: { requiresAuth: true }
    },
    {
      path: '/printer/edit',
      name: 'printer-edit',
      component: PrinterEdit,
      meta: { requiresAuth: true }
    },
    {
      path: '/printer/new',
      name: 'printer-new',
      component: PrinterNew,
      meta: { requiresAuth: true }
    },
    {
      path: '/printer/success',
      name: 'printer-success',
      component: PrinterSuccess,
      meta: { requiresAuth: true }
    },
    {
      path: '/error',
      name: 'error',
      component: Error,
      meta: { requiresAuth: true }
    },
    {
      path: '/scanner',
      name: 'scanner-list',
      component: ScannerList,
      meta: { requiresAuth: true }
    },
    {
      path: '/scanner/edit',
      name: 'scanner-edit',
      component: ScannerEdit,
      meta: { requiresAuth: true }
    },
    {
      path: '/scanner/new',
      name: 'scanner-new',
      component: ScannerNew,
      meta: { requiresAuth: true }
    },
    {
      path: '/scanner/success',
      name: 'scanner-success',
      component: ScannerSuccess,
      meta: { requiresAuth: true }
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings,
      meta: { requiresAuth: true }
    }
]

export const router = new VueRouter({
    mode: process.env.ROUTER_MODE,
    base: '/',
    linkActiveClass: 'active',
    routes
})

// Check auth
const auth = new Auth()

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!auth.checkAuth()) {
            next({
                path: '/error',
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
