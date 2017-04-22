import Vue from "vue";
import App from './App';
import VueRouter from 'vue-router';

import FMrouter from './components/FM/router';

Vue.use(VueRouter);

// const FM = document.getElementById("FM");
// const DB = document.getElementById("DB");


// FM.addEventListener('click', (e) => {
//     document.body.innerHTML = `<div id = "app"></div>`;

// }, false);


// DB.addEventListener('click', (e) => {
//     document.body.innerHTML = `<div id = "app"></div>`;

// }, false);

new Vue({
    el: '#app',
    router: FMrouter,
    render: h => h(App)
});