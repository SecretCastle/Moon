import Vue from "vue";
import Vuex from "vuex";


Vue.use(Vuex);

const Common = new Vuex.Store({
    state: {
        loadingState: true
    },
    mutations: {
        done(state, bolen) {
            state.loadingState = bolen;
        }
    }
});

export default Common;