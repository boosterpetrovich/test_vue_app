<template>
    <div class="segment">
        <h1 class="ui header">
            Список сканеров
            <router-link :to="{ name: 'scanner-new', params: {} }" class="ui right floated large green button">
                <i class="plus icon"></i>
                Добавить
            </router-link>
        </h1>
      <div class="ui large middle aligned selection divided animated list">
        <div class="item" v-for="(scanner,key) in scanners" @click="getScanner(key)">
          <div class="content">
            <div class="header">{{scanner.logicalName}}</div>
            <div class="description">порт {{scanner.port}}</div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>

import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'scanner-list',
    computed: mapGetters({
        scanners: 'scannerList'
    }),
    components: {

    },
    data() {
        return {

        }
    },
    created() {
        // getting list of printers
        this.getScanners();
    },
    mounted() {

    },
    methods: mapActions([
      'getScanner',
      'getScanners',
    ]),
}
</script>
