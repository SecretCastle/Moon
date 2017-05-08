import {
    SET_URL,
    SET_HAS_PLAY,
    SET_IS_STOP,
    HAS_DONE
} from './mutation_type';

const Mutations = {
    [SET_URL](state, newurl) { // playUrl
        state.playUrl = newurl;
    },
    [SET_HAS_PLAY](state, bool) { // hasPlay
        state.hasPlay = bool;
    },
    [SET_IS_STOP](state, bool) { //修改的参数 isStop
        state.isStop = bool;
    },
    [HAS_DONE](state, bool) { //修改的参数 loadingState
        state.loadingState = bool;
    }
}


export default Mutations;