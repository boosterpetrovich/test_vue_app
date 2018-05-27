<template>
    <div class="flex-container">
        <div class="top-block">
            <div class="container">
                <h1 class="ui header">
                    <img :src="'/static/booster.jpg'" class="ui circular bordered image" />
                    <div class="content">
                        Alexey Kosenko
                        <div class="sub header">project manager</div>
                    </div>
                </h1>
            </div>
        </div>
        <div class="bottom-block">
            <div class="container">
                <h2 class="ui header">
                    My services
                </h2>
                <div class="ui relaxed list">
                    <div class="item">
                        <div class="content">
                            <div class="header">Project management</div>
                            <div class="description">As a project manager with over than 10 years of work in different fields, I am saying that the project management can play the significant role in the project success. Ask me how I can help your project and save your money.</div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="content">
                            <div class="header">Consultations</div>
                            <div class="description">Consultations and integrations in the fields of digital advertisement technologies. Integrations of Google DFP, header bidding, programmatic, mobile, native and video ads, troubleshooting and debugging. The companies like fool.com trust to me to maintain their accounts.</div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="content">
                            <div class="header">Development</div>
                            <div class="description">
                                You do not need to find a employees, organise workplaces, pay salaries and taxes. I already have done it for you. As a bonus, I have already coded a part of your future application. Because my team is reusing the code rather than starts from scratch. Tell me what would you like to develop and I will tell you how many percentages of your application already has been completed.
                                <br /><br />
                                The stack I am working with: Vue.js, React, Android, iOS (Swift), JAVA, Yii2, Nginx
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="footer-block">
                <div class="footer-social-buttons container">
                    <a class="item" href="https://www.instagram.com/boosterpetrovich/" target="_blank">
                        <img class="footer-image-circular" :src="'static/instagram.png'">
                    </a>
                    <a class="item" href="https://www.facebook.com/IamAlexeyKosenko" target="_blank">
                        <img class="footer-image-circular" :src="'static/facebook.png'">
                    </a>
                    <a class="item" href="https://www.upwork.com/freelancers/~01f26ee0c4c8e61c2c" target="_blank">
                        <img class="footer-image-circular" :src="'static/upwork.png'">
                    </a>
                    <a class="item" href="https://www.linkedin.com/in/alexeykosenko/" target="_blank">
                        <img class="footer-image-circular" :src="'static/linkedin.png'">
                    </a>
                </div>
                <div class="ui divider"></div>
                <div class="container">
                    Contact me by the phone +7 913 066 4360 or email <a href="mailto:misterlexa123@gmail.com">misterlexa123@gmail.com</a>
                </div>
            </div>

        </div>
    </div>
</template>
<script>

import { mapGetters, mapActions } from 'vuex'
import Greeting from '../booster/greeting.vue'

export default {
    name: 'home',
    computed: mapGetters({

    }),
    components: {
      Greeting: Greeting
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
