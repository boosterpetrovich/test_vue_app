<template>
    <div class="segment">
        <h1 class="ui center aligned icon huge header">
            <i class="checkmark icon"></i>
            <div class="content" v-if="this.$route.params.update === 'true'">
                Принтер {{printer.name}}  успешно обновлен!
            </div>
            <div class="content" v-else>
                Принтер {{printer.name}}  успешно создан!
            </div>
            <div class="ui hidden divider"></div>
            <button class="ui large basic button" @click="goBackToPrintersList">
                Вернуться к списку принтеров
            </button>
        </h1>
    </div>
</template>
<script>

import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'printer-success',
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
        'goBackToPrintersList'
    ]),
}
</script>
