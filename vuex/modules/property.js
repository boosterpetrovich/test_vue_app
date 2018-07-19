import * as types from '../mutation-types'
import * as api from '../../api'
import { router } from '../../main.js'
import Auth from '../../auth'
import * as Helper from '../../helper/index.js'

// initial state
const state = {
    propertyMetaData: {},
    property: [],
}

// getters
const getters = {
    propertyMetaData: state => state.propertyMetaData,
    property: state => state.property,
}

// actions
const actions = {

    getPropertyMetaData ({ commit }) {
        api.getPropertyMetaData(
            (response) => commit(types.SET_PROPERTY_META_DATA, response),
            (response) => commit(types.SET_ERROR,{code:null,message:'Error of getting token. Please try login again', trace:''})
        )
    },
    getProperty ({ commit }) {
        commit(types.LOADING, true)
        api.getProperty(
            function(response) {
                commit(types.SET_PROPERTY, response)
                commit(types.LOADING, false)
            },
            function(response) {
                commit(types.SET_ERROR,{code:null,message:'Error of getting token. Please try login again', trace:''})
                commit(types.LOADING, false)
            }
        )
    },

    toogleExtraContent ({ commit }, id) {
        $('#extraContent_' + id).toggle();
        $('.tabular.menu .item').tab();
    },

    activateTabs ({ commit }) {
        $('.tabular.menu .item').tab();
    },

}

// mutations
const mutations = {
    [types.SET_PROPERTY_META_DATA] (state, data) {
        state.propertyMetaData = data
    },
    [types.SET_PROPERTY] (state, data) {
        state.property = data
    },
}

export default {
    getters,
    actions,
    state,
    mutations
}
