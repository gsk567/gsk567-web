<template>
    <div class="row" id="dev">
        <vue-headful 
            title="Development • gsk567 • Georgi Karagogov" 
            description="Development projects list"
            image="https://cdn.gsk567.com/images/hp-img2.jpg" />
        <div class="col-12 p-0">
            <div class="header-card d-flex">
                <div class="header-card-container">
                    <h1>Development</h1>
                </div>
            </div>
        </div>
        <loading-splash v-if="projects.length == 0"></loading-splash>
        <div v-if="projects.length > 0" class="row pl-4 pr-4 pt-3 pb-3">
            <div v-for="(project, index) in projects" :key="index" class="col-12 col-sm-6 col-md-4 col-lg-3 pb-2 pt-2 project-card">
                <div class="card p-0">
                    <img class="card-img-top" :src="project.image" :alt="project.title">
                    <div class="card-body p-0">
                        <h2 class="card-title">{{project.title}}</h2>
                        <p class="project-type">Type: {{project.type}}</p>
                        <div class="project-tags">
                            <span :key="tagIndex" v-for="(tag, tagIndex) in project.technologies">{{tag}}</span>
                        </div>
                    </div>
                    <a :href="project.url" target="_blank" class="btn btn-view hvr-pop">VIEW</a>
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
                projects: []
            }
        },
        methods: {

        },
        mounted: function() {
            axios.get(this.apiUrl + "development/projects")
                .then(response => {
                    this.projects = response.data;
                    
                })
                .catch(e => {
                    this.errors.push(e)
                })
        },
    }
</script>

<style lang="scss">
#dev {
    .header-card {
        background-image: url('https://cdn.gsk567.com/images/hp-img2.jpg');
    }
}
.project-card {
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

    .project-tags {
        margin: 10px;
    }

    .project-tags span {
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

    h2 {
        font-size: 21px;
        padding: 10px;
        font-weight: bold;
        margin: 0px;
        padding-bottom: 0px;
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