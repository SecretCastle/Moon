<template>
     <div class="play_board_control">
        <play-progress :play-object="controlData"></play-progress>
        <div class="menuGroup">
            <span class="iconfont" @click="volumnBtn"><em v-if="isVolumn">&#xe622;</em><em v-else>&#xe621;</em></span>
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
    export default {
        data() {
            return {
                isVolumn: true
            }
        },
        props: {
            controlData: {
                type: Object,
                require: true
            }
        },
        created() {
            let Music = document.getElementById('Music');
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
                //volume
                if (Music.volume === 1) {
                    Music.volume = 0;
                    this.isVolumn = false
                } else {
                    Music.volume = 1;
                    this.isVolumn = true
                }
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