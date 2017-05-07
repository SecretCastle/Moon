import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const Play = new Vuex.Store({
    state: {
        playUrl: "",
        stopDuration: 0,
        hasPlay: false,
        isStop: false
    },
    mutations: {
        setUrl(state, url) {
            state.playUrl = url;
        },
        sethasPlay(state, bol) {
            state.hasPlay = bol;
        },
        setIsStop(state, bol) {
            state.isStop = bol;
        }
    }
});


export default Play;