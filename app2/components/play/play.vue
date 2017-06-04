<template>
    <div class="play_panel" :class="[PLAYAREASHOW ? 'isPlay':'']" @click="toPlayPanel">
        <audio :src="playLink" id="Music" autoplay></audio>
        <div class="play_mid_panel flex-left"> 
            <div class="panel_left flex-left">
                <div class="play_urlImg">
                    <img src="https://img.alicdn.com/imgextra/i3/786678272/TB2ZOGJaMOI.eBjSszhXXbHvFXa_!!786678272.jpg" />
                </div>
                <div class="play_mid_title">
                    <span>{{getUrl? getUrl.title :''}}</span>
                </div>
            </div>
            
            <div class="play_mid_control flex-arround">
                <span class="iconfont" @click="prevBtn">&#xe60a;</span>
                <span class="iconfont" @click="playBtn"><em v-if="isStop">&#xe604;</em><em v-else>&#xe605;</em></span>
                <span class="iconfont" @click="nextBtn">&#xe60b;</span>
            </div>
        </div>
    </div>
</template>

<script>
    let Music = document.getElementById('Muisc');
    let basUrl = "http://upod.qingting.fm/";

    import Public from '../../utils/public';
    export default {
        data() {
            return {
                playLinkState: false,
                playLink: ''
            }
        },
        computed: {
            getUrl() {
                return this.$store.state.playUrl;
            },
            isPlay() {
                return this.$store.state.hasPlay;
            },
            isStop() {
                return this.$store.state.isStop;
            },
            PLAYAREASHOW() {
                return this.$store.state.PLAYAREASHOW;
            }
        },
        methods: {
            prevBtn() {
                console.log('prev');
            },
            playBtn() {
                if (this.isStop) {
                    this.$el.childNodes[0].play();
                    this.$store.commit('SET_IS_STOP', false);
                } else {
                    this.$el.childNodes[0].pause();
                    this.$store.commit('SET_IS_STOP', true);
                }
            },
            nextBtn() {
                console.log('next');
            },
            /**
                这里需要优化，目前的bug，每次更新都要加载一次promise
             */
            playUrl() {
                console.log('playUrl', this.playLinkState);
                const loadUrl = setInterval(() => {
                    if (this.playLinkState) {
                        this.playLink = basUrl + this.getUrl.mediainfo.bitrates_url[0].file_path;
                        //this.playLinkState = false;
                        clearInterval(loadUrl);
                    } else {
                        console.log('加载中');
                    }
                }, 500);
            }

        },
        mounted() {
            if (this.getUrl) {
                this.playUrl();
                Public.preLoadAudio(basUrl + this.getUrl.mediainfo.bitrates_url[0].file_path).then((res) => {
                    if (res === 'success') {
                        //这里修改处理思路，根据res返回的‘success’，修改stroe中的状态，联动的带动播放
                        this.playLinkState = true;
                    }
                }).catch((err) => {
                    console.log(err);
                });
            }
        },
        updated() {

            this.playUrl();
            console.log('update');
            Public.preLoadAudio(basUrl + this.getUrl.mediainfo.bitrates_url[0].file_path).then((res) => {
                if (res === 'success') {
                    //这里修改处理思路，根据res返回的‘success’，修改stroe中的状态，联动的带动播放
                    this.playLinkState = true;
                }
            }).catch((err) => {
                console.log(err);
            });

        }
    }
</script>