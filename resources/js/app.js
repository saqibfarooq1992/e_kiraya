import Vue from "vue";
import router from "./router";
import store from './store';
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import BootstrapVue from "bootstrap-vue";
import FlashMessage from "@smartweb/vue-flash-message";
import { VueEditor } from "vue2-editor";
import moment from "moment";
import InputMask from 'vue-input-mask';
import VueSocialSharing from 'vue-social-sharing'
Vue.component('input-mask', InputMask);
import ScrollFixedHeader from 'vuejs-scroll-fixed-header';
Vue.use(ScrollFixedHeader);
import vueScrollto from 'vue-scrollto'
import VueMeta from 'vue-meta'
Vue.use(VueMeta, {
    refreshOnceOnNavigation: true
  })
Vue.use(vueScrollto)
Vue.use(require('vue-chunks'));
Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(FlashMessage);
Vue.use(VueSocialSharing);
Vue.filter("date", value => {
    if (!value) {
        return "";
    }
    return moment(value).format("MMM DD, YYYY");
});

Vue.filter("timeAgo", value => {
    if (!value) {
        return "";
    }
    return moment(value)
        .startOf("hour")
        .fromNow();
});
Vue.filter('snippet',function(value){
    return value.slice(0,15) +'...read more';
});
Vue.filter('trendingsnippiet',function(value){
    return value.slice(0,28) +'...read more';
});
Vue.filter('descriptionsnippiet',function(value){
    return value.slice(0,40) +'...read more';
});
let app = new Vue({
    el: "#app",
    router,
    store,
    render: h => h(App)
});
