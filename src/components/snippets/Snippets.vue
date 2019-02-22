<template>
    <div class="row" id="snippets">
        <vue-headful 
            title="Snippets • gsk567 • Georgi Karagogov" 
            description="Code snippets list"
            image="https://cdn.gsk567.com/images/hp-snippets.jpg" />
        <div class="col-12 p-0">
            <div class="header-card d-flex">
                <div class="header-card-container">
                    <h1>Snippets</h1>
                </div>
            </div>
        </div>
        <loading-splash v-if="snippets.length == 0"></loading-splash>
        <div v-if="snippets.length > 0" class="w-100 pl-4 pr-4 pt-3 pb-3 row m-0">
            <div v-for="(snippet, index) in snippets" :key="index" class="col-12 col-sm-6 col-md-4 col-lg-3 pb-2 pt-2 snipped-card">
                <div class="card p-0">
                    <div class="card-body p-0 row m-0 p-2">
                        <div class="col-2 p-0">
                            <img :src="snippet.icon" class="w-100"/>
                        </div>
                        <div class="col-10 d-flex">
                            <h2 class="card-title">{{snippet.title}}</h2>
                        </div>
                        
                    </div>
                    <a :href="snippet.url" target="_blank" class="btn btn-view hvr-pop">CHECKOUT</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import LoadingSplash from './../../components/misc/LoadingSplash.vue';
    import axios from 'axios';
    import {configMixin} from '../../mixins/configMixin'
    export default {
        components: {
            loadingSplash: LoadingSplash
		},
        mixins: [configMixin],
        data() {
            return {
                apiUrl: this.getConfig().apiUrl,
                snippets: []
            }
        },
        methods: {

        },
        mounted: function() {
            axios.get(this.apiUrl + "snippets")
                .then(response => {
                    this.snippets = response.data;
                    
                })
                .catch(e => {
                    this.errors.push(e)
                })
        }
    }
</script>

<style lang="scss">
    #snippets .header-card {
        background-image: url('https://cdn.gsk567.com/images/hp-snippets.jpg');
    }

.snipped-card {
    .card {
        border: none;
        line-height: 1.42857143;
        border-radius: 2px;
        -webkit-transition: box-shadow .25s; 
        transition: box-shadow .25s; 
        -webkit-box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12); 
        box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12); 
    }

    .card:hover {
        -webkit-box-shadow: 0 8px 17px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
        box-shadow: 0 8px 17px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
    }

    .card-body {
        border-top: 1px solid #ddd;
        border-bottom: 1px solid #ddd;
    }

    h2 {
        font-size: 16px;
        font-weight: bold;
        margin: auto;
        padding-bottom: 0px;
        text-align: center;
    }

    .project-type {
        font-size: 12px;
        font-weight: bold;
        margin: 0px;
        padding-left: 10px;
        padding-right: 10px;
    }

    .btn-view {
        width: 100%;
        font-weight: bold;
        border-radius: 0px;
    }

    img {
        border-radius: 0px;
    }

}
</style>