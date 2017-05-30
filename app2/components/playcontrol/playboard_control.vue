<template>
     <div class="play_board_control">
        <audio />
        <play-progress :play-duration="controlData.duration"></play-progress>
        <div class="menuGroup">
            <span class="iconfont" @click="volumnBtn">&#xe622;</span>
            <span class="iconfont" @click="prevBtn">&#xe60a;</span>
            <span class="iconfont" @click="playBtn">&#xe738;</span>
            <span class="iconfont" @click="nextBtn">&#xe60b;</span>
            <span class="iconfont" @click="menuBtn">&#xe7cc;</span>
        </div>
    </div>
</template>

<script>
    import Public from '../../utils/public';
    import PlayProgress from './playboard_progress';

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
        methods: {
            volumnBtn() {

            },
            prevBtn() {

            },
            playBtn() {

            },
            nextBtn() {

            },
            menuBtn() {

            }
        }
    }
</script>