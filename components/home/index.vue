<template>
    <div class="ui segments">

        <div class="ui basic yellow inverted segment">
            <div class="ui container">
                <form class="ui form">
                    <div class="field">
                        <div class="three fields">
                            <div class="six wide field">
                                <label>Facility</label>
                                <select class="ui fluid dropdown">
                                    <option disabled selected>select facility</option>
                                    <option v-for="(facility,index) in propertyMetaData.facilities" :value="index">{{facility}}</option>
                                </select>
                            </div>
                            <div class="six wide field">
                                <label>Type</label>
                                <select class="ui fluid dropdown">
                                    <option disabled selected>select a type</option>
                                    <option v-for="(type,index) in propertyMetaData.types" :value="index">{{type}}</option>
                                </select>
                            </div>
                            <div class="four wide field">
                                <label>Time</label>
                                <select class="ui fluid dropdown">
                                    <option disabled selected>select a type</option>
                                    <option v-for="(time,index) in propertyMetaData.times" :value="index">{{time}}</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="inline fields">
                        <label>Rating</label>
                        <div class="field" v-for="(rating,index) in propertyMetaData.ratings">
                            <div class="ui checkbox">
                                <input type="checkbox" :value="index" name="rating">
                                <label>{{rating}}</label>
                            </div>
                        </div>
                    </div>
                    <div class="ui submit huge blue button" @click="getProperty()">Search</div>
                </form>
            </div>
        </div>

        <div class="ui basic grey inverted segment">
            <div class="ui container">

                <div class="ui segments" v-for="(item,index) in property">
                    <div class="ui segment">
                        <div class="ui items">
                            <div class="item">
                                <a class="ui small image" @click="toogleExtraContent(item.id)">
                                    <img src="https://semantic-ui.com/images/wireframe/image.png">
                                </a>
                                <div class="content">
                                    <div class="header">{{item.attributes.name}}</div>
                                    <div class="meta">
                                        <span class="price">{{item.attributes.currency}}$1200</span>
                                        <span class="stay">Checkin {{item.attributes.times.checkin}} | Checkout {{item.attributes.times.checkout}}</span>
                                    </div>
                                    <div class="description">
                                        <p>
                                            {{item.attributes.address.country.name}}, {{item.attributes.address.region.name}}, {{item.attributes.address.region.name}}
                                        </p>
                                        <p>
                                            {{item.attributes.contact.name}}, {{item.attributes.contact.email}}, {{item.attributes.phone.main}}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="ui segment app-element_hidden" :id="'extraContent_' + item.id">
                        <div class="ui tabular pointing secondary menu">
                            <a class="item active" :data-tab="'photos_' + item.id">Photos</a>
                            <a class="item" :data-tab="'info_' + item.id">Info</a>
                            <a class="item" :data-tab="'reviews_' + item.id">Reviews</a>
                            <a class="item" :data-tab="'deals_' + item.id">Deals</a>
                        </div>
                        <div class="ui active tab basic segment" :data-tab="'photos_' + item.id">
                            Here will be a photo gallery
                        </div>
                        <div class="ui tab basic segment" :data-tab="'info_' + item.id">
                            Here will be info
                        </div>
                        <div class="ui tab basic segment" :data-tab="'reviews_' + item.id">
                            Here will be reviews
                        </div>
                        <div class="ui tab basic segment" :data-tab="'deals_' + item.id">
                            Here will be deals
                        </div>
                    </div>
                </div>



            </div>
        </div>

    </div>
</template>
<script>

import { mapGetters, mapActions } from 'vuex'


export default {
    name: 'home',
    computed: mapGetters({
        propertyMetaData: 'propertyMetaData',
        property: 'property',
        loading: 'loading',
    }),
    components: {

    },
    data() {
        return {

        }
    },
    created() {
        this.getPropertyMetaData()
        this.getProperty()
    },
    mounted() {
        this.activateTabs()
    },
    methods: mapActions([
        'getPropertyMetaData',
        'getProperty',
        'toogleExtraContent',
        'activateTabs',
    ]),
}
</script>
