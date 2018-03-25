<template>
    <div class="segment">
        <h1 class="ui header">
            Список принтеров
            <router-link :to="{ name: 'printer-new', params: {} }" class="ui right floated large green button">
                <i class="plus icon"></i>
                Добавить
            </router-link>
        </h1>
      <div class="ui large middle aligned selection divided animated list">
        <div class="item" v-for="(printer,key) in printers" @click="getPrinter(key)">
          <div class="content">
            <div class="header">{{printer.name}}</div>
            <div class="description">{{printer.companyCode}}</div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>

import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'printer-list',
    computed: mapGetters({
        printers: 'printerList'
    }),
    components: {

    },
    data() {
        return {

        }
    },
    created() {
        // getting list of printers
        this.getPrinters();
    },
    mounted() {

    },
    methods: mapActions([
      'getPrinter',
      'getPrinters',
    ]),
}
</script>
