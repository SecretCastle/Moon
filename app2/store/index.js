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
    isStop: false,
    toast: false,
    msg: '这是一个神奇的事情',
    IS_PC: false,
    HAS_PROGRAMINFO_DONE_FLAG: false,
    HAS_PROGRAMLIST_DONE_FLAG: false
};

export default new Vuex.Store({
    state,
    mutations
});