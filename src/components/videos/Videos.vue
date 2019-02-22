<template>
    <div class="row" id="videos">
        <vue-headful 
            title="Videos • gsk567 • Georgi Karagogov" 
            description="Videos list" 
            image="https://cdn.gsk567.com/images/hp-videos.jpg"/>
        <div class="col-12 p-0">
            <div class="header-card d-flex">
                <div class="header-card-container">
                    <h1>Videos</h1>
                </div>
            </div>
        </div>
        <loading-splash v-if="videos.length == 0"></loading-splash>
        <div class="d-block w-100" v-if="videos.length > 0">
            <div id="video-gallery" class="mb-2 mt-2" style="display:none;">
            <div v-for="(video, index) in videos" :key="index"
                    data-type="youtube"
                    :data-title="video.title"
                    :data-description="video.description"
                    :data-thumb="video.thumbnail"
                    :data-image="video.image"
                    :data-videoid="video.code" ></div>
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
                videos: []
            }
        },
        methods: {

        },
        mounted: function() {
            axios.get(this.apiUrl + "videos")
                .then(response => {
                    this.videos = response.data;
                    
                })
                .catch(e => {
                    this.errors.push(e)
                })
        },
        updated: function () {
            $("#video-gallery").unitegallery({
                gallery_theme: "video"
            });
        }
    }
</script>

<style>
    @import 'https://cdn.gsk567.com/unitegallery/css/unite-gallery.css';
    @import 'https://cdn.gsk567.com/unitegallery/themes/video/skin-right-thumb.css';
    
    #videos .header-card {
        background-image: url('https://cdn.gsk567.com/images/hp-videos.jpg');
    }

    #video-gallery {
        width: 100% !important;
        max-width: unset !important;
        min-width: unset !important;
    }
    
</style>