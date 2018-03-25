import * as types from '../mutation-types'
import * as api from '../../api'
import { router } from '../../main.js'

// initial state
const state = {
    scanner: {
        logicalName: '',
        port: '',
    },
    scannerList: []
}

// getters
const getters = {
    scanner: state => state.scanner,
    scannerList: state => state.scannerList,
}

// actions
const actions = {
    getScanners({ commit }) {
        api.getScanners(
            (response) => commit(types.GET_SCANNERS, response),
            (response) => commit(types.SET_ERROR,response)
        )
    },

    getScanner({commit}, key) {
        commit(types.GET_SCANNER, key)
    },

    goBackToScannersList({commit}) {
        commit(types.RESET_ACTIVE_SCANNER)
        commit(types.GO_BACK_TO_SCANNERS_LIST)
    },

    resetActiveScanner({commit}) {
        commit(types.RESET_ACTIVE_SCANNER)
    },

    createScanner({commit}, scanner) {
        var is_valid = $('.ui.form.scanner-settings').form('is valid');
        if (!is_valid) {
            $('.ui.form.scanner-settings').form('validate form');
            return;
        }
        // reset form
        $('.ui.form.scanner-settings').form('reset')
        $('.ui.form.scanner-settings').form('clear')

        api.createScanner(
            function(response) {
                commit(types.RESET_ACTIVE_SCANNER)
                commit(types.SCANNER_CREATED, response)
            },
            (response) => commit(types.SET_ERROR,response),
            scanner
        )
    },

    updateScanner({commit}, scanner) {
        var is_valid = $('.ui.form.scanner-settings').form('is valid');
        if (!is_valid) {
            $('.ui.form.scanner-settings').form('validate form');
            return;
        }
        // reset form
        $('.ui.form.scanner-settings').form('reset')
        $('.ui.form.scanner-settings').form('clear')

        api.updateScanner(
            (response) => commit(types.SCANNER_UPDATED, response),
            (response) => commit(types.SET_ERROR,response),
            scanner
        )
    }

}

// mutations
const mutations = {

    [types.GET_SCANNER] (state, key) {
        // get printer from printer list
        var scanner = state.scannerList[key]
        // set state
        state.scanner = scanner
        // change router
        router.push({name: 'scanner-edit'})
    },

    [types.GET_SCANNERS] (state, scanners) {
        // set state
        state.scannerList = scanners.data;
    },

    [types.GO_BACK_TO_SCANNERS_LIST] (state) {
        // set state
        router.push({name: 'scanner-list'});
    },

    [types.RESET_ACTIVE_SCANNER] (state) {
        // set state
        state.scanner.logicalName = '';
        state.scanner.port = '';
    },

    [types.UPDATE_SCANNER_STORE] (state, data) {
        // set state
        if( data.field === 'scannerLogicalName' ) {
            state.scanner.logicalName = data.value
        }
        if( data.field === 'scannerPort' ) {
            state.scanner.port = data.value
        }
    },

    [types.SCANNER_CREATED] (state, response) {
        router.push({ name:'scanner-success', params: { create:'true' } });
    },

    [types.SCANNER_UPDATED] (state, response) {
        router.push({ name:'scanner-success', params: { update:'true' } });
    },

}

export default {
    getters,
    actions,
    state,
    mutations
}
