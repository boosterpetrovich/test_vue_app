import * as types from '../mutation-types'
import * as api from '../../api'
import { router } from '../../main.js'

// initial state
const state = {
    printer: {
        name: '',
        companyCode: '',
        portSettings: {
            baudRate: '',
            name: '',
            timeout: '',
            type: '',
        }
    },
    printerList: []
}

// getters
const getters = {
    printer: state => state.printer,
    printerList: state => state.printerList,
}

// actions
const actions = {
    getPrinters({ commit }) {
        api.getPrinters(
            (response) => commit(types.GET_PRINTERS, response),
            (response) => commit(types.SET_ERROR,response)
        )
    },

    getPrinter({commit}, key) {
        commit(types.GET_PRINTER, key)
    },

    goBackToPrintersList({commit}) {
        commit(types.RESET_ACTIVE_PRINTER)
        commit(types.GO_BACK_TO_PRINTERS_LIST)
    },

    resetActivePrinter({commit}) {
        commit(types.RESET_ACTIVE_PRINTER)
    },

    createPrinter({commit}, printer) {
        var is_valid = $('.ui.form.printer-settings').form('is valid');
        if (!is_valid) {
            $('.ui.form.printer-settings').form('validate form');
            return;
        }
        // reset form
        $('.ui.form.printer-settings').form('reset')
        $('.ui.form.printer-settings').form('clear')

        printer.logicalName = printer.name
        api.createPrinter(
            function(response) {
                commit(types.RESET_ACTIVE_PRINTER)
                commit(types.PRINTER_CREATED, response)
            },
            (response) => commit(types.SET_ERROR,response),
            printer
        )
    },

    updatePrinter({commit}, printer) {
        var is_valid = $('.ui.form.printer-settings').form('is valid');
        if (!is_valid) {
            $('.ui.form.printer-settings').form('validate form');
            return;
        }
        // reset form
        $('.ui.form.printer-settings').form('reset')
        $('.ui.form.printer-settings').form('clear')

        printer.logicalName = printer.name

        api.updatePrinter(
            (response) => commit(types.PRINTER_UPDATED, response),
            (response) => commit(types.SET_ERROR,response),
            printer
        )
    }

}

// mutations
const mutations = {

    [types.GET_PRINTER] (state, key) {
        // get printer from printer list
        var printer = state.printerList[key]
        // set state
        state.printer = printer
        // change router
        router.push({name: 'printer-edit'})
    },

    [types.GET_PRINTERS] (state, printers) {
        // set state
        state.printerList = printers.data.items;
    },

    [types.GO_BACK_TO_PRINTERS_LIST] (state) {
        // set state
        router.push({name: 'printer-list'});
    },

    [types.RESET_ACTIVE_PRINTER] (state) {
        // set state
        state.printer.name = '';
        state.printer.companyCode = '';
        state.printer.portSettings.baudRate = '';
        state.printer.portSettings.name = '';
        state.printer.portSettings.timeout = '';
        state.printer.portSettings.type = '';
    },

    [types.UPDATE_PRINTER_STORE] (state, data) {
        // set state
        if( data.field === 'printerName' ) {
            state.printer.name = data.value
        }
        if( data.field === 'printerCompanyCode' ) {
            state.printer.companyCode = data.value
        }
        if( data.field === 'printerPortSettingsbaudRate' ) {
            state.printer.portSettings.baudRate = data.value
        }
        if( data.field === 'printerPortSettingsName' ) {
            state.printer.portSettings.name = data.value
        }
        if( data.field === 'printerPortSettingsTimeout' ) {
            state.printer.portSettings.timeout = data.value
        }
        if( data.field === 'printerPortSettingsType' ) {
            state.printer.portSettings.type = data.value
        }
    },

    [types.PRINTER_CREATED] (state, response) {
        router.push({ name:'printer-success', params: { create:'true' } });
    },

    [types.PRINTER_UPDATED] (state, response) {
        router.push({ name:'printer-success', params: { update:'true' } });
    },

}

export default {
    getters,
    actions,
    state,
    mutations
}
