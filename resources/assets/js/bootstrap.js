import Vue from "vue";
import lodash from "lodash";
import axios from "axios";
import Vuetify from "vuetify";

Vue.use(Vuetify);

window.Vue = Vue;

window._ = lodash;

window.axios = axios;

window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

let token = document.head.querySelector("meta[name='csrf-token']");

if (token) {
	window.axios.defaults.headers.common["X-CSRF-TOKEN"] = token.content;
}
