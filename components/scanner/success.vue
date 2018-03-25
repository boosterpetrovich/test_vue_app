<template>
    <div class="segment">
        <h1 class="ui center aligned icon huge header">
            <i class="checkmark icon"></i>
            <div class="content" v-if="this.$route.params.update === 'true'">
                Сканнер {{scanner.logicalName}}  успешно обновлен!
            </div>
            <div class="content" v-else>
                Сканнер {{scanner.logicalName}} успешно создан!
            </div>
            <div class="ui hidden divider"></div>
            <button class="ui large basic button" @click="goBackToScannersList">
                Вернуться к списку сканнеров
            </button>
        </h1>
    </div>
</template>
<script>

import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'scanner-success',
    computed: mapGetters({
        scanner: 'scanner'
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
        'goBackToScannersList'
    ]),
}
</script>
