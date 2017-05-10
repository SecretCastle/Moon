import Vue from 'vue';
import VueRouter from 'vue-router';


import Home from './components/index';
import Program from './components/program/index';


const Routes = new VueRouter({
    routes: [{
            path: '/',
            component: Home
        },
        {
            path: '/program/:id',
            component: Program
        },
        {
            path: '/program',
            component: Program
        }
    ]
});

export default Routes;