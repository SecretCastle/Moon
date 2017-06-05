<template>
    <div class="play_board_main">
        <div class="meng"></div>
        <div class="mengColor"></div>
        <play-content :content-data="this.data"></play-content>
        <play-control :control-data="this.data"></play-control>
    </div>
</template>

<script>
    import PlayControl from './playboard_control';
    import PlayContent from './playboard_content';
    import axios from 'axios';
    import Public from '../../utils/public';
    export default {
        data() {
            return {
                id: null,
                data: {}
            }
        },
        created() {
            this.$store.commit('HAS_DONE', false);
            this.$store.commit('PLAYAREASHOW', false);

        },
        computed: {
            contentPic() {
                return this.$store.state.PLAYCONTENT_PIC;
            }
        },
        mounted() {
            //加载背景图片
            let meng = document.querySelector('.meng');
            meng.style.backgroundImage = `url(${this.contentPic})`;
            //获取存储的id状态
            this.id = this.$store.state.PLAYID;
            if (!this.id) {
                this.$router.back(-1);
            }
            axios.get(`/programs/${this.id}`).then(res => {
                //Public.colorfulDebugConsole('log', 'blue', res);
                if (res) {
                    this.$store.commit('HAS_DONE', true);
                    this.data = res.data.data;
                    Public.colorfulDebugConsole('log', 'blue', this.data);
                }

            }).catch(err => {

            });
        },
        components: {
            PlayControl,
            PlayContent
        },
        /*
        此处修改底部弹窗播放器的状态，改为显示
         */
        destroyed() {
            console.log('destoryed');
            this.$store.commit('PLAYAREASHOW', true);
        }
    }
</script>