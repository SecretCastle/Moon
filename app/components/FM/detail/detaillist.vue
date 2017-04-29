<template>
    <div class="play_area_wrap_item flex_left" @click="play" >
        <div class="num">{{detailItem.title}}</div>
        <div class="sale_status">{{detailItem.sale_status === 'free' ? '免费':'付费'}}</div>
    </div>
</template>

<script>
    
    export default {
        data(){
            return {
                
            }            
        },
        props:{
            detailItem:{
                type:Object,
                require:false
            },
            
        },
        methods:{
            play(){
                if(this.detailItem.sale_status !== "free"){
                    alert('收费的哦');
                }else{
                    this.$emit('getUrl',{url:"http://upod.qingting.fm/"+this.detailItem.mediainfo.bitrates_url[0].file_path});
                }
            }
        }
       
    }
</script>