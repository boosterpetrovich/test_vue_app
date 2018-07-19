<template>
    <div class="ui basic center aligned segment">
        <a class="ui huge blue button" @click="login({type: 'ibex', data: auth})">
            Login
        </a>
    </div>
</template>
<script>

import { mapGetters, mapActions } from 'vuex'


export default {
    name: 'login',
    computed: mapGetters({
        auth: 'auth'
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
        'login'
    ]),
}
</script>
