<template>
    <div class="row" id="competences">
        <vue-headful 
            title="Competences • gsk567 • Georgi Karagogov" 
            description="List of competences and skills."  
            image="https://cdn.gsk567.com/images/hp-competences.jpg" />
        <div class="col-12 p-0">
            <div class="header-card d-flex">
                <div class="header-card-container">
                    <h1>Competences</h1>
                </div>
            </div>
        </div>
        <loading-splash v-if="competences.length == 0"></loading-splash>
        <div v-if="competences.length > 0" class="w-100 pl-4 pr-4 pt-3 pb-3 row m-0">
            <div v-for="(competence, index) in competences" :key="index" class="col-12 col-sm-6 col-md-4 col-lg-3 pb-2 pt-2 competence-card">
                <div class="card p-0">
                    <div class="card-body p-0 row m-0 p-2">
                        <div class="col-2 p-0">
                            <img :src="competence.icon" class="w-100"/>
                        </div>
                        <div class="col-10 d-flex">
                            <h2 class="card-title">{{competence.name}}</h2>
                        </div>
                        <div class="col-12">
                            <span class="tech-tag" v-for="(tech, i) in competence.technologies" :key="i">{{tech}}</span>
                        </div>
                    </div>
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
                competences: []
            }
        },
        methods: {

        },
        mounted: function() {
            axios.get(this.apiUrl + "competences")
                .then(response => {
                    this.competences = response.data;
                    
                })
                .catch(e => {
                    this.errors.push(e)
                })
        }
    }
</script>

<style lang="scss">
    #competences {
        .header-card {
            background-image: url('https://cdn.gsk567.com/images/hp-competences.jpg');
        }

        .competence-card {
            .card {
                border: none;
                line-height: 1.42857143;
                border-radius: 2px;
                height: 100%;
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

            img {
                border-radius: 0px;
            }

            .tech-tag {
                display: inline-block;
                background-color: #ddd;
                margin: 2px;
                line-height: 10px;
                padding: 3px 4px;
                border-radius: 3px;
                font-size: 10px;
                font-weight: bold;
                color: #333;
            }

        }
    }
</style>