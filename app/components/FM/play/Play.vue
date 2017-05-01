<template>
    <div class="play_area">
        <audio  :src="playUrl" controls ></audio>
    </div>
</template>

<script>
    import Public from '../../../utils/public';
    export default {
        data(){
            return {
                isLoaded:false
            }
        },
        props:{
            playUrl:{
                type:String,
                require:false
            }
        },
        methods:{
            playMusic(){
                const playProgress = setInterval(()=>{
                    if(this.isLoaded){
                        this.$el.children[0].play();
                        clearInterval(playProgress);
                    }else{
                        console.log("加载中");
                    }
                },500);
            }
        },
        updated(){
            console.log(this.playUrl);
            Public.preLoadAudio(this.playUrl).then((res)=>{
                if(res === "success"){
                    this.isLoaded = true;
                }
            }).catch((err)=>{
                console.log(err);
            });
        }
    }
</script>
