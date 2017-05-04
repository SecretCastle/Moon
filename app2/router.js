import Vue from 'vue';
import VueRouter from 'vue-router';


import Home from './components/index';

const Routes = new VueRouter({
    routes: [{
        path: '/',
        component: Home
    }]
});

export default Routes;