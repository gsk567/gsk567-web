<template>
    <div class="row" id="design">
        <vue-headful 
            title="Design • gsk567 • Georgi Karagogov" 
            description="Design projects list"
            image="https://cdn.gsk567.com/images/hp-img3.jpg" />
        <div class="col-12 p-0">
            <div class="header-card d-flex">
                <div class="header-card-container">
                    <h1>Design</h1>
                </div>
            </div>
        </div>
        <loading-splash v-if="projects.length == 0"></loading-splash>
        <div class="d-block w-100" v-if="projects.length > 0">
            <div id="gallery" class="mb-2 mt-2" style="display:none;">
                <a v-for="(project, index) in projects" :key="index">
                    <img :alt="project.title"
                        v-bind:src="project.fileName"
                        :data-image="project.fileName"
                        :data-description="project.title"
                        style="display:none"/>
                </a>
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
            axios.get(this.apiUrl + "design/projects")
                .then(response => {
                    this.projects = response.data;
                    
                })
                .catch(e => {
                    this.errors.push(e)
                })
        },
        updated: function () {
            $('#gallery').unitegallery({
                tiles_type: "justified",
                theme_enable_preloader: true,
                theme_preloading_height: 0,
            });
        }
    }
</script>

<style>
    #design .header-card {
        background-image: url('https://cdn.gsk567.com/images/hp-img3.jpg');
    }
    @import 'https://cdn.gsk567.com/unitegallery/css/unite-gallery.css';
</style>