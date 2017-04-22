import Vue from 'vue';
import VueRouter from 'vue-router';

import FM_Index from './index';
import FM_type from './type/type';



const router = new VueRouter({
    hashbang: false,
    routes: [{
        path: '/',
        component: FM_Index
    }, {
        path: '/type/:id',
        component: FM_type
    }]
});



export default router;