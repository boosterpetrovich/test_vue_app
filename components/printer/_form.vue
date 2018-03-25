<template>
    <form class="ui form printer-settings">
        <div class="required field">
            <label>Имя принтера</label>
            <input type="text" name="printerName" placeholder="Имя принтера" :value="printer.name" @input="updatePrinterStore">
        </div>
        <div class="required field">
            <label>Код принтера</label>
            <input type="text" name="printerCompanyCode" placeholder="Код принтера" :value="printer.companyCode" @input="updatePrinterStore">
        </div>
        <div class="required field">
            <label>Порт baudRate</label>
            <input type="text" name="printerPortSettingsbaudRate" placeholder="baudRate" :value="printer.portSettings.baudRate" @input="updatePrinterStore">
        </div>
        <div class="required field">
            <label>Имя порта</label>
            <input type="text" name="printerPortSettingsName" placeholder="name" :value="printer.portSettings.name" @input="updatePrinterStore">
        </div>
        <div class="required field">
            <label>Порт timeout</label>
            <input type="text" name="printerPortSettingsTimeout" placeholder="timeout" :value="printer.portSettings.timeout" @input="updatePrinterStore">
        </div>
        <div class="required field">
            <label>Тип порта</label>
            <select class="ui fluid dropdown" name="printerPortSettingsType" @input="updatePrinterStore">
                <option :value="printer.portSettings.type" v-if="printer.portSettings.type != ''" selected>{{printer.portSettings.type}}</option>
                <option v-else disabled selected>Выберите тип</option>
                <option value="type2">other type</option>
                <option value="type3">other type</option>
            </select>
        </div>
        <a class="ui large primary button" v-if="this.$route.name === 'printer-new'" @click="createPrinter(printer)">Сохранить</a>
        <a class="ui large primary button" v-if="this.$route.name === 'printer-edit'" @click="updatePrinter(printer)">Обновить</a>
        <a class="ui right floated large basic button" @click="goBackToPrintersList">
            <i class="arrow left icon"></i>
            К списку принтеров
        </a>
    </form>
</template>
<script>

import { mapGetters, mapActions } from 'vuex'

var mixins = {
    methods: {
        updatePrinterStore(e) {
            var data = {
                field: e.target.name,
                value: e.target.value
            }
            this.$store.commit('UPDATE_PRINTER_STORE', data)
        }
    }
}

export default {
    name: 'printer-form',
    computed: mapGetters({
        printer: 'printer'
    }),
    components: {

    },
    mixins: [
        mixins
    ],
    data() {
        return {

        }
    },
    created() {

    },
    mounted() {
        // form validation rules
        $('.ui.form.printer-settings')
          .form({
              inline: true,
              fields: {
                  printerName: {
                      identifier: 'printerName',
                      rules: [
                          {
                              type: 'empty',
                              prompt: 'Укажите имя принтера'
                          }
                      ]
                  },
                  printerCompanyCode: {
                      identifier: 'printerCompanyCode',
                      rules: [
                          {
                              type: 'empty',
                              prompt: 'Укажите код принтера'
                          }
                      ]
                  },
                  printerPortSettingsbaudRate: {
                      identifier: 'printerPortSettingsbaudRate',
                      rules: [
                          {
                              type: 'empty',
                              prompt: 'Укажите baudRate'
                          }
                      ]
                  },
                  printerPortSettingsName: {
                      identifier: 'printerPortSettingsName',
                      rules: [
                          {
                              type: 'empty',
                              prompt: 'Укажите имя порта'
                          }
                      ]
                  },
                  printerPortSettingsTimeout: {
                      identifier: 'printerPortSettingsTimeout',
                      rules: [
                          {
                              type: 'empty',
                              prompt: 'Укажите timeout'
                          }
                      ]
                  },
                  printerPortSettingsType: {
                      identifier: 'printerPortSettingsType',
                      rules: [
                          {
                              type: 'empty',
                              prompt: 'Укажите тип порта'
                          }
                      ]
                  },
              }
            })
        ;
    },
    methods: mapActions([
        'goBackToPrintersList',
        'createPrinter',
        'updatePrinter'
    ]),
}
</script>
