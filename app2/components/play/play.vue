<template>
    <div class="play_panel" :class="{isPlay:isPlay}">
        <audio :src="url" id="Muisc" autoplay></audio>
        <div class="play_mid_panel flex-left"> 
            <div class="panel_left flex-left">
                <div class="play_urlImg">
                    <img src="https://img.alicdn.com/imgextra/i3/786678272/TB2ZOGJaMOI.eBjSszhXXbHvFXa_!!786678272.jpg" />
                </div>
                <div class="play_mid_title">
                    <span>人民的名义001</span>
                    <span>HenryChen</span>
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
    export default {
        props:{
            playUrl:{
                type:String,
                require:false
            }
        },
        computed:{
            url(){
                console.log(this.$store.Play.state.playUrl);
                return "http://upod.qingting.fm"+this.$store.Play.state.playUrl;
            },
            isPlay(){
                return this.$store.Play.state.hasPlay
            },
            test(){
                return this.$store.Play.state.playUrl;
            },
            isStop(){
                return this.$store.Play.state.isStop;
            }
        },
        methods:{
            prevBtn(){
                console.log('prev');
            },
            playBtn(){
                if(this.isStop){
                    this.$el.childNodes[0].play();
                    this.$store.Play.commit('setIsStop',false);
                }else{
                    this.$el.childNodes[0].pause();
                    this.$store.Play.commit('setIsStop',true);
                }
            },
            nextBtn(){
                console.log('next');
            },
            
        },
        updated(){
            console.log("这是获取的更新",this.test);
        }
    }
</script>