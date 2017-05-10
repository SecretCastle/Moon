import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutation';
Vue.use(Vuex);


const state = {
    //common 
    loadingState: false,
    //play
    playUrl: null,
    hasPlay: false,
    isStop: false
};

export default new Vuex.Store({
    state,
    mutations
});