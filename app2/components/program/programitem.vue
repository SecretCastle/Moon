<template>
    <div class="item_list_panel" @click="playProgram">
        <div class="item_list_panel_title clearfix">
            <span>{{itemData.title}}</span>
            <span class="iconfont">&#xe625;</span>
        </div>
        <div class="item_list_panel_detail flex-left">
            <span>{{itemData.sale_status === 'free' ? '免费':'付费'}}</span>
            <span>{{fileDuration}}</span>
            <span>{{itemData.update_time}}</span>
        </div>
    </div>
</template>
<script>
    import Public from '../../utils/public';
    export default {
        props:{
            itemData:{
                type:Object,
                require:true
            }
        },
        computed:{
            fileDuration(){
               return Public.computeMinutes(this.itemData.duration);
            }
        },
        methods:{
            playProgram(){ 
                if(this.itemData.sale_status === 'free'){
                    let playUrl = this.itemData.mediainfo.bitrates_url[0].file_path;
                    this.$store.commit('SET_URL',this.itemData);
                    this.$store.commit('SET_HAS_PLAY',true);
                    localStorage.setItem('saveUrl',JSON.stringify(this.itemData));
                }else{
                     this.$store.commit('TOAST_STATE',{
                        bol:true,
                        msg:`此为付费栏目`
                    });
                }
                
                
            }
        }
    }
</script>