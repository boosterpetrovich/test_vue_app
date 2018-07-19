<template>
    <div class="segment">
        <h1 class="ui center aligned icon huge header">
            <i class="frown outline icon"></i>
            <div class="content">
                Error occured
            </div>
            <div class="sub header">
                {{error.message}}
            </div>
            <div class="ui hidden divider"></div>
            <button class="ui large basic button" @click="clearError">
                Go home
            </button>
        </h1>
    </div>
</template>
<script>

import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'error',
    computed: mapGetters({
        error: 'error'
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
        'clearError'
    ]),
}
</script>
