<template>
    <div class="full-screen">
        <div class="ui dimmer" v-bind:class="{ active: loading}">
            <div class="ui massive text loader">Loading</div>
        </div>
        <main-menu></main-menu>
        <router-view></router-view>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import MainMenu from './menu/main.vue'
import {appClientCreds} from '../main.js'
import * as Helper from '../helper/index.js'

export default {
    name: 'layout-main',
    computed: mapGetters({
        loading: 'loading'
    }),
    components: {
        MainMenu: MainMenu
    },
    created() {
        this.assignCreds(appClientCreds)
        var rnd = Helper.generateRandom()
        this.randomState(rnd)
    },
    mounted() {

    },
    updated() {

    },
    methods: mapActions([
        'assignCreds',
        'randomState'
    ])
}
</script>
