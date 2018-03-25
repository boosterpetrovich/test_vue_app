import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import app from './modules/app'
import home from './modules/home'
import printer from './modules/printer'
import scanner from './modules/scanner'

Vue.use(Vuex)

// A Vuex instance is created by combining the state, the actions,
// and the mutations. Because the actions and mutations are just
// functions that do not depend on the instance itself, they can
// be easily tested or even hot-reloaded (see counter-hot example).
export default new Vuex.Store({
    actions,
    modules: {
        app,
        home,
        printer,
        scanner,
    },
})
