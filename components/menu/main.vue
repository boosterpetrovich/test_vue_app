<template>
  <div class="ui basic two item massive menu">
    <router-link class="item" :to="{ name: 'printer-list', params: {} }">Принтеры</router-link>
    <router-link class="item" :to="{ name: 'scanner-list', params: {} }">Сканеры</router-link>
  </div>
</template>
<script>

import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'main-menu',
    computed: mapGetters({

    }),
    components: {

    },
    data() {
        return {

        }
    },
    created() {

    },
    mounted() {

    },
    methods: mapActions([

    ]),
}
</script>
