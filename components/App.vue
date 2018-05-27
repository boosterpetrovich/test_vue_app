<template>
    <div class="full-screen">
        <router-view></router-view>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import MainMenu from './menu/main.vue'

export default {
    name: 'layout-main',
    computed: mapGetters({

    }),
    components: {
        MainMenu: MainMenu
    },
    created() {

    },
    mounted() {

    },
    updated() {

    },
    methods: mapActions([

    ])
}
</script>
