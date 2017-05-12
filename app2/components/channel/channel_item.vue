<template>
    <div class="channel_wrap_item flex-between" @click="go">
        <div class="channel_wrap_item_img">
            <img src="../../assets/default.jpg">
        </div>
        <div class="channel_wrap_content">
            <div class="title">{{itemData.title}}</div>
            <div class="author">{{itemData.detail.podcasters ? itemData.detail.podcasters[0].nickname : '无名氏'}}</div>
            <div class="last_update">[最新更新]{{itemData.latest_program}}</div>
            <div class="update_time">{{itemData.update_time}}</div>
        </div>
    </div>
</template>
<script>
    import Public from '../../utils/public';
    export default {
        data(){
            return {
                url:{
                    src:''
                }
            }
        },
        props:{
            itemData:{
                type:Object,
                require:true
            }
        },
        mounted(){
            Public.preImgLoad(this.itemData.thumbs.large_thumb).then(res=>{
               if(res){
                   this.url = res;
                   this.$el.childNodes[0].childNodes[0].src=res.src;
               }
            }).catch(err=>{

            });
        },
         updated(){
             if(this.$el.childNodes.length > 0){
                this.$el.childNodes[0].src=this.url.src;
             }
        },
        methods:{
            go(){
                this.$router.push({path:`/program/${this.itemData.id}`});
            }
        }  
    }
</script>