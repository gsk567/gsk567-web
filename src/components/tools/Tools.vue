<template>
    <div class="row" id="tools">
        <vue-headful 
            title="Tools • gsk567 • Georgi Karagogov" 
            description="Tools list"
            image="https://cdn.gsk567.com/images/hp-tools.jpg" />
        <div class="col-12 p-0">
            <div class="header-card d-flex">
                <div class="header-card-container">
                    <h1>Tools</h1>
                </div>
            </div>
        </div>
        <loading-splash v-if="tools.length == 0"></loading-splash>
        <div v-if="tools.length > 0" class="row pl-4 pr-4 pt-3 pb-3">
            <div v-for="(tool, index) in tools" :key="index" class="col-12 col-sm-6 col-md-4 col-lg-3 pb-2 pt-2 project-card">
                <div class="card p-0">
                    <img class="card-img-top" :src="tool.image" :alt="tool.title">
                    <div class="card-body p-0">
                        <h2 class="card-title">{{tool.title}}</h2>
                    </div>
                    <router-link :to="tool.uri" class="btn btn-view hvr-pop">CHECKOUT</router-link>
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
                tools: []
            }
        },
        methods: {

        },
        mounted: function() {
            axios.get(this.apiUrl + "tools")
                .then(response => {
                    this.tools = response.data;
                    
                })
                .catch(e => {
                    this.errors.push(e)
                })
        },
    }
</script>

<style lang="scss">
#tools {
    .header-card {
        background-image: url('https://cdn.gsk567.com/images/hp-tools.jpg');
    }
}
.project-card .card {
    border: none;
    line-height: 1.42857143;
    border-radius: 2px;
    -webkit-transition: box-shadow .25s; 
    transition: box-shadow .25s; 
    -webkit-box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12); 
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12); 
}
.project-card {
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
        padding: 10px;
        font-weight: bold;
        margin: 0px;
        padding-bottom: 0px;
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