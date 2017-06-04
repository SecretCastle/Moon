<template>
     <div class="play_board_control">
        <play-progress :play-object="controlData"></play-progress>
        <div class="menuGroup">
            <span class="iconfont" @click="volumnBtn">&#xe622;</span>
            <span class="iconfont" @click="prevBtn">&#xe60a;</span>
            <span class="iconfont" @click="playBtn"><em v-if="isStop">&#xe604;</em><em v-else>&#xe605;</em></span>
            <span class="iconfont" @click="nextBtn">&#xe60b;</span>
            <span class="iconfont" @click="menuBtn">&#xe7cc;</span>
        </div>
    </div>
</template>

<script>
    import Public from '../../utils/public';
    import PlayProgress from './playboard_progress';
    let Music = document.getElementById('Music');
    export default {
        props: {
            controlData: {
                type: Object,
                require: true
            }
        },
        components: {
            PlayProgress
        },
        computed: {
            isStop() {
                return this.$store.state.isStop;
            },
        },
        methods: {
            volumnBtn() {

            },
            prevBtn() {

            },
            playBtn() {
                if (this.isStop) {
                    Music.play();
                    this.$store.commit('SET_IS_STOP', false);
                } else {
                    Music.pause();
                    this.$store.commit('SET_IS_STOP', true);
                }
            },
            nextBtn() {

            },
            menuBtn() {

            }
        }
    }
</script>