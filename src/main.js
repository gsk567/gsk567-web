import Vue from 'vue'
import VueRouter from 'vue-router';
import BootstrapVue from 'bootstrap-vue'

import App from './App.vue'
import { routes } from './routes';
import vueHeadful from 'vue-headful';

Vue.use(VueRouter);
Vue.use(BootstrapVue);

const router = new VueRouter({
    mode: 'history',
    routes
});

Vue.component('vue-headful', vueHeadful);

new Vue({
    el: '#app',
    router,
    render: h => h(App),
})