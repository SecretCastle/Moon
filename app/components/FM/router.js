import Vue from 'vue';
import VueRouter from 'vue-router';

import FM_Index from './index';
import FM_type from './type/type';
import FM_Categories from './categories/categories';
import FM_Show from './show/show';


const router = new VueRouter({
    hashbang: false,
    routes: [{
        path: '/',
        component: FM_Index
    }, {
        path: '/type/:id',
        component: FM_type
    }, {
        path: '/categories',
        component: FM_Categories
    }, {
        path: '/show/:typeid/:id',
        component: FM_Show
    }]
});



export default router;