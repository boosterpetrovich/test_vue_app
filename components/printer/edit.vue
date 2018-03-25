<template>
    <div class="segment">
      <h1 class="ui header">
          Принтер {{printer.name}}
          <div class="sub header">
              код {{printer.companyCode}}
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
    name: 'printer-edit',
    computed: mapGetters({
        printer: 'printer'
    }),
    components: {
        EditForm: EditForm,
    },
    data() {
        return {

        }
    },
    created() {
        if(this.printer.name === '') {
            router.push({name: 'printer-new'})
        }
    },
    mounted() {

    },
    methods: mapActions([

    ]),
}
</script>
