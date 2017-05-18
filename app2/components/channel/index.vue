<template>
    <div class="channel_wrap main_content_wrap" :class="[isPlay !== null ? 'isPlay':'']">
        <re-fresh :on-refresh="onRefresh" ref="chanel_scroll">
            <channel-item slot="fresh" v-for = "item in chenData" :key = "item.id" :item-data="item"></channel-item>
        </re-fresh>
    </div>
</template>

<script>
    import ChannelItem from  './channel_item';
    import axios from 'axios';
    import ReFresh from '../public/refresh';
    export default {
        components:{
            ChannelItem,
            ReFresh
        },
        data(){
            return {
                attrId:0,
                cateId:0,
                chenData:[],
                totalData:0,
                nowCount:0,
                indexStart:1,
                indexPage:30
            }
        },
        computed:{
            isPlay(){
                return this.$store.state.playUrl;
            },
        },
        mounted(){
            this.attrId = this.$route.params.attrid;
            this.cateId = this.$route.params.cateid;
            this.$store.commit('HAS_DONE',false);
            axios.get(`/categories/${this.cateId}/channels/order/bydefault/0/attr/${this.attrId}/curpage/${this.indexStart}/pagesize/${this.indexPage}`).then(res=>{
                if(res){
                    console.log(res);
                    this.$store.commit('HAS_DONE',true);
                    this.chenData = res.data.data;
                    this.totalData += res.data.total;
                    this.nowCount += res.data.data.length;
                }
            }).catch(err=>{

            });
        },
        methods:{
            onRefresh(){
                this.indexStart += 1;
                //this.$store.commit('HAS_DONE',false);
                if(this.totalData > this.nowCount){
                    axios.get(`/categories/${this.cateId}/channels/order/bydefault/0/attr/${this.attrId}/curpage/${this.indexStart}/pagesize/${this.indexPage}`).then(res=>{
                        if(res){
                            console.log(res);
                            //this.$store.commit('HAS_DONE',true);
                            this.chenData = this.chenData.concat(res.data.data);
                            this.nowCount += res.data.data.length;
                        }
                    }).catch(err=>{
                        console.log(err);
                        //this.$store.commit('HAS_DONE',true);
                    });
                }else{
                    console.log('没有了');
                    this.$refs.chanel_scroll.noMoreFn(false);
                    //this.$store.commit('HAS_DONE',true);
                    this.$store.commit('TOAST_STATE',{
                        bol:true,
                        msg:'没有数据了'
                    });
                }   
            }
        }
    }
</script>