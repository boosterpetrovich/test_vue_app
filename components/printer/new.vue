<template>
    <div class="segment">
      <h1 class="ui header">
          Новый принтер
          <div class="sub header">
              Заполните форму ниже, чтобы добавить новый принтер
          </div>
      </h1>
      <edit-form></edit-form>
    </div>
</template>
<script>

import { mapGetters, mapActions } from 'vuex'
import EditForm from './_form.vue'

export default {
    name: 'printer-new',
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

    },
    mounted() {

    },
    methods: mapActions([
        
    ]),
}
</script>
