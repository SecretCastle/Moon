<template>
    <div class="play_area">
        <audio  :src="playUrl" controls id="Music"></audio>
    </div>
</template>

<script>
    export default {
        props:{
            playUrl:{
                type:String,
                require:false
            }
        },
        methods:{
            playMusic(){
                setTimeout(()=>{
                    this.$el.children[0].play();
                },0);
            }
        }
    }
</script>
