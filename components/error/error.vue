<template>
    <div class="segment">
        <h1 class="ui center aligned icon huge header">
            <i class="frown outline icon"></i>
            <div class="content">
                Что-то пошло не так...
            </div>
            <div class="sub header">
                Наши лучшие специалисты уже работают над проблемой!
            </div>
            <div class="ui hidden divider"></div>
            <button class="ui large basic button" @click="clearError">
                Вернуться на главную
            </button>
        </h1>
    </div>
</template>
<script>

import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'error',
    computed: mapGetters({
        printer: 'printer'
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
