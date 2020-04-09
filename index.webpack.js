import "./src/css/styles.css";

import Vue from 'vue';
import App from './src/vue/App.vue' ;

let phozerApp = new Vue({
    el: '#phozer-app',
    template: '<App/>',
    components: {App}
});

