import * as types from '../mutation-types'
import * as api from '../../api'
import { router } from '../../main.js'
import Auth from '../../auth'
import * as Helper from '../../helper/index.js'

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
    },
    auth: {
        client: null,
        clientId: null,
        clientSecret: null,
        authState: null,
        code: null
    },
    loading: false,
    token: {
        access_token: null,
        token_type: null,
        expires_in: null,
        refresh_token: null,
        refresh_token_expires_in: null
    }
}

// getters
const getters = {
    error: state => state.error,
    mockError: state => state.mockError,
    auth: state => state.auth,
    loading: state => state.loading,
    token: state => state.token,
}

// actions
const actions = {

    assignCreds ({ commit }, data) {
        commit(types.ASSIGN_CREDS, data)
    },

    randomState ({ commit }, rnd) {
        Helper.clearLocalStorage('authStateRND')
        localStorage.setItem('authStateRND', rnd)
        commit(types.RANDOM_STATE, rnd)
    },

    getAuthStateRND ({ commit }) {
        var rnd = localStorage.getItem('authStateRND')
        if (!rnd) {
            var data = {
                code: null,
                message: 'randon auth code is not valid',
                trace: '',
            }
            commit(types.SET_ERROR, data)
        }

        commit(types.RANDOM_STATE, rnd)
    },

    loading ({ commit }, param) {
        commit(types.LOADING, param)
    },

    getToken ({ commit }, auth) {
        api.getToken(
            auth,
            (response) => commit(types.SET_TOKEN, response),
            (response) => commit(types.SET_ERROR,{code:null,message:'Error of getting token. Please try login again', trace:''})
        )
    },

    login ({ commit }, data) {
        var auth = new Auth();
        auth.login(data)
    },

    setError({commit}, data) {
        commit(types.SET_ERROR, data)
    },

    clearError({commit}) {
        commit(types.CLEAR_ERROR)
    }

}

// mutations
const mutations = {
    [types.ASSIGN_CREDS] (state, data) {
        state.auth.client = data.client
        state.auth.clientId = data.clientId
        state.auth.clientSecret = data.clientSecret
    },

    [types.RANDOM_STATE] (state, rnd) {
        state.auth.authState = rnd
    },

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

    [types.LOADING] (state, param) {
        state.loading = param
    },

    [types.SET_CODE] (state, code) {
        state.auth.code = code
    },

    [types.SET_TOKEN] (state, response) {
        state.token.access_token = response.access_token
        state.token.token_type = response.token_type
        state.token.expires_in = response.expires_in
        state.token.refresh_token = response.refresh_token
        state.token.refresh_token_expires_in = response.refresh_token_expires_in

        Helper.clearLocalStorage('token')
        response = JSON.stringify(response)
        localStorage.setItem('token', response)
        state.loading = false
        router.push({name: 'home'})
    },

}

export default {
    getters,
    actions,
    state,
    mutations
}
