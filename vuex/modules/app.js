import * as types from '../mutation-types'
import * as api from '../../api'
import { router } from '../../main.js'
import Auth from '../../auth'

// initial state
const state = {
    error: {
        code: null,
        message: '',
        trace: '',
    },
    mockError: {
        code: null,
        message: '',
        trace: '',
    }
}

// getters
const getters = {
    error: state => state.error
}

// actions
const actions = {

    checkAuth ({ commit }) {
        // var jwt = localStorage.getItem('token');
        // var obj = JSON.parse(jwt);
        // if(!obj.id || obj.id === undefined) {
        //     return false;
        // }
        return true;
    },

    logout({ commit }) {
        // commit(types.RESET_AUTH)
        // router.push({name: 'login'})
    },

    signup({commit}) {

	    var data = {
            Signup: {
    	        email: state.tempUser.email,
    	        username: state.tempUser.email,
    	        password: state.tempUser.password,
              name: state.tempUser.name,
              phone: state.tempUser.phone
            }
        }

        // api.signup(
        //     data,
        //     (response) => commit(types.SIGNUP_SUCCESS, response),
        //     (response) => commit(types.SET_ERROR_SIGNUP,response)
        // )

    },

    clearError({commit}) {
        commit(types.CLEAR_ERROR)
    }

}

// mutations
const mutations = {
    [types.SET_ERROR] (state, data) {
        // set stat
        state.error = data
        router.push({name: 'error'})
    },

    [types.CLEAR_ERROR] (state) {
        // set stat
        state.error = state.mockError
        router.push({name: 'home'})
    },

}

export default {
    getters,
    actions,
    state,
    mutations
}
