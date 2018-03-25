<template>
    <div class="segment">
      <h1 class="ui header">
          Сканер {{scanner.logicalName}}
          <div class="sub header">
              порт {{scanner.port}}
          </div>
      </h1>
      <edit-form></edit-form>
    </div>
</template>
<script>

import { mapGetters, mapActions } from 'vuex'
import EditForm from './_form.vue'
import { router } from '../../main.js'

export default {
    name: 'scanner-edit',
    computed: mapGetters({
        scanner: 'scanner'
    }),
    components: {
        EditForm: EditForm,
    },
    data() {
        return {

        }
    },
    created() {
        if(this.scanner.logicalName === '') {
            router.push({name: 'scanner-new'})
        }
    },
    mounted() {

    },
    methods: mapActions([

    ]),
}
</script>
