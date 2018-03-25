<template>
    <div class="segment">
      <h1 class="ui header">
          Новый сканнер
          <div class="sub header">
              Заполните форму ниже, чтобы добавить новый сканнер
          </div>
      </h1>
      <edit-form></edit-form>
    </div>
</template>
<script>

import { mapGetters, mapActions } from 'vuex'
import EditForm from './_form.vue'

export default {
    name: 'scanner-new',
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

    },
    mounted() {

    },
    methods: mapActions([

    ]),
}
</script>
