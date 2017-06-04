import VueRouter from 'vue-router';


import Home from './components/index';
import Program from './components/program/index';
import Recommend from './components/recommend/index';
import Categories from './components/categories';
import Channel from './components/channel/index';
import PlayBoard from './components/playcontrol/playboard';

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
            path: '/recommend/:id',
            component: Recommend
        },
        {
            path: '/categories',
            component: Categories
        },
        {
            path: '/channel/:cateid/:attrid',
            component: Channel
        },
        {
            path: '/channel',
            component: Channel
        },
        {
            path: '/playboard',
            component: PlayBoard
        },
        {
            path: '/playboard/:id',
            component: PlayBoard
        }
    ]
});

export default Routes;