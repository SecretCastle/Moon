import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import router from './router';
import store from './store/index';

Vue.use(VueRouter);
Vue.use(Vuex);

//设置显示
document.querySelector('meta[name="viewport"]').setAttribute('content',
    `initial-scale=${(1 / devicePixelRatio)} , maximum-scale=${(1 / devicePixelRatio)}, 
    minimum-scale=${(1 / devicePixelRatio)}, user-scalable=no`);

//设置html font-size
document.documentElement.style.fontSize = document.documentElement.clientWidth / 10 + 'px';

new Vue({
    el: '#app',
    store: store,
    router: router,
    render: h => h(App)
});