import {
    SET_URL,
    SET_HAS_PLAY,
    SET_IS_STOP,
    HAS_DONE,
    TOAST_STATE,
    IS_PC
} from './mutation_type';

const Mutations = {
    [SET_URL](state, url) { // playUrl
        state.playUrl = url;
    },
    [SET_HAS_PLAY](state, bool) { // hasPlay
        state.hasPlay = bool;
    },
    [SET_IS_STOP](state, bool) { //修改的参数 isStop
        state.isStop = bool;
    },
    [HAS_DONE](state, bool) { //修改的参数 loadingState
        state.loadingState = bool;
    },
    [TOAST_STATE](state, stateObj) {
        state.toast = stateObj.bol;
        state.msg = stateObj.msg;
    },
    [IS_PC](state, bool) {
        state.IS_PC = bool;
    }
}


export default Mutations;