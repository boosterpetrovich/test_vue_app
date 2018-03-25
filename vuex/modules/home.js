import * as types from '../mutation-types'
import * as api from '../../api'
import { router } from '../../main.js'

// initial state
const state = {
    testVar: null,
}

// getters
const getters = {
    testVar: state => state.testVar
}

// actions
const actions = {
    testMethod({ commit }) {
        api.testMethod(
            (response) => commit(types.TEST_MUTATION, response),
            (response) => commit(types.SET_ERROR,response)
        )
    }

}

// mutations
const mutations = {
    [types.TEST_MUTATION] (state, data) {
        state.testVar = 'blah'
    },

}

export default {
    getters,
    actions,
    state,
    mutations
}
