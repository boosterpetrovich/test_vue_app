<template>
    <form class="ui form scanner-settings">
        <div class="required field">
            <label>Имя сканера</label>
            <input type="text" name="scannerLogicalName" placeholder="Имя сканера" :value="scanner.logicalName" @input="updateScannerStore">
        </div>
        <div class="required field">
            <label>Порт сканера</label>
            <input type="text" name="scannerPort" placeholder="Порт сканера" :value="scanner.port" @input="updateScannerStore">
        </div>

        <a class="ui large primary button" v-if="this.$route.name === 'scanner-new'" @click="createScanner(scanner)">Сохранить</a>
        <a class="ui large primary button" v-if="this.$route.name === 'scanner-edit'" @click="updateScanner(scanner)">Обновить</a>
        <a class="ui right floated large basic button" @click="goBackToScannersList">
            <i class="arrow left icon"></i>
            К списку сканеров
        </a>
    </form>
</template>
<script>

import { mapGetters, mapActions } from 'vuex'

var mixins = {
    methods: {
        updateScannerStore(e) {
            var data = {
                field: e.target.name,
                value: e.target.value
            }
            this.$store.commit('UPDATE_SCANNER_STORE', data)
        }
    }
}

export default {
    name: 'scanner-form',
    computed: mapGetters({
        scanner: 'scanner'
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
        $('.ui.form.scanner-settings')
          .form({
              inline: true,
              fields: {
                  scannerLogicalName: {
                      identifier: 'scannerLogicalName',
                      rules: [
                          {
                              type: 'empty',
                              prompt: 'Укажите имя сканера'
                          }
                      ]
                  },
                  scannerPort: {
                      identifier: 'scannerPort',
                      rules: [
                          {
                              type: 'empty',
                              prompt: 'Укажите порт сканера'
                          }
                      ]
                  },
              }
            })
        ;
    },
    methods: mapActions([
        'goBackToScannersList',
        'createScanner',
        'updateScanner'
    ]),
}
</script>
