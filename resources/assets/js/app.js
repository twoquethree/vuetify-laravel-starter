import Vue from 'vue';
import Vuetify from 'vuetify';
import './bootstrap';

Vue.use(Vuetify);

window.Vue = Vue;

Vue.component('example-component', require('./components/ExampleComponent.vue'));

const app = new Vue({
    el: '#app'
});
