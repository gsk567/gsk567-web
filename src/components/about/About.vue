<template>
    <div>
        <vue-headful 
            title="About • gsk567 • Georgi Karagogov" 
            description="Georgi Karagogov information" 
            image="https://cdn.gsk567.com/images/gk-image.jpg"/>
        <section class="card personal-card">
            <div class="row">
                <div class="col-sm-7 col-12 p-5">
                    <img class="personal-image border-item" src="https://cdn.gsk567.com/images/gk-image.jpg" alt="Georgi Karagogov">
                </div>
                <div class="col-sm-5 col-12 p-5 pt-sm-5 pb-sm-5 pr-sm-5 pl-sm-0 personal-info">
                    <p class="intro">Hello everybody, I am</p>
                    <h2 class="name">Georgi Karagogov</h2>
                    <p class="title">Software Engineer, Geodetic Engineer, Designer</p>
                    <p class="info">People often think that when somebody knows much stuff he/she knows nothing. Sometimes they are right, but when this 'much' are in perfect synchronization the result is stunning. Especially when this 'much' is always in maintenance.</p>
                    <img class="w-100 border-item mb-4 mt-3" src="https://cdn.gsk567.com/images/gk-image2.jpg"/>
                    <p class="info">Knowledge without experience is like geodesy without coordinates, like software without algorithms, like design without shape and colors. I have spent a large amount of time to learn the best practices from the best in the business. My knowledge is built in the environment of UACEG and Ghent University but is nothing without the experience which I accumulated in ESRI Bulgaria, EIS, ZenitGeo, Solitech, Apogee99 and still do in Codific.</p>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {

    }
</script>

<style>
.personal-card {
    border-radius: 4px;
    -webkit-box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
    width: 75%;
    margin: 3rem auto;
}
    .personal-image {
        border-radius: 4px;
        width: 100%;
    }

   .personal-info .intro {
        text-transform: uppercase;
        font-size: 15px;
        margin-bottom: 20px;
    }
    .personal-info .name {
        font-size: 40px;
        text-transform: uppercase;
        text-align: left;
        font-weight: bold;
        margin-bottom: 20px;
        white-space: pre-wrap;
        word-break: keep-all;
    }
    .personal-info .title {
        text-transform: uppercase;
        font-size: 17px;
        font-weight: bold;
        line-height: 21px;
        margin-bottom: 20px;
    }
    .personal-info .info {
        font-size: 16px;
        color: #777;
        line-height: 19px;
        margin-bottom: 10px;
    }

@media only screen and (max-width: 767px) {
    .personal-card {
        width: 95%;
    }
    .personal-info .name {
        font-size: 30px;
    }
}
</style>