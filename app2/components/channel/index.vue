<template>
    <div class="channel_wrap main_content_wrap">
        <channel-item v-for = "item in chenData" :key = "item.id" :item-data="item"></channel-item>
    </div>
</template>

<script>
    import ChannelItem from  './channel_item';
    import axios from 'axios';
    export default {
        components:{
            ChannelItem
        },
        data(){
            return {
                attrId:0,
                cateId:0,
                chenData:[]
            }
        },
        created(){
            this.attrId = this.$route.params.attrid;
            this.cateId = this.$route.params.cateid;
            axios.get(`/categories/${this.cateId}/channels/order/bydefault/0/attr/${this.attrId}/curpage/1/pagesize/30`).then(res=>{
                if(res){
                    this.chenData = res.data.data;
                }
            }).catch(err=>{

            });
        }
    }
</script>