<template>
    <div>
        
    </div>
</template>
<script>

import { mapGetters, mapActions } from 'vuex'
import * as Helper from '../../helper/index.js'

export default {
    name: 'auth_success',
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
        this.loading(true)
        this.getAuthStateRND()
        var authStateRND = Helper.parseParams('state')
        var code = Helper.parseParams('code')
        // if (!authStateRND || !code || this.auth.authState != authStateRND) {
        //     var data ={
        //         code: null,
        //         message: 'Incorrect auth data provided, please try to login again',
        //         trace: ''
        //     }
        //     this.setError(data)
        // }
        this.$store.commit('SET_CODE', code)
        // we don't need it
        Helper.clearLocalStorage('authStateRND')
        // get token
        this.getToken(this.auth)
    },
    mounted() {

    },
    methods: mapActions([
        'getAuthStateRND',
        'loading',
        'setError',
        'getToken',
    ]),
}
</script>
