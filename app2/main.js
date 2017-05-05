import Vue from "vue";
import App from './App';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import router from './router';
import store from './store/index';

Vue.use(VueRouter);
Vue.use(Vuex);


new Vue({
    el: '#app',
    store: store,
    router: router,
    render: h => h(App)
});