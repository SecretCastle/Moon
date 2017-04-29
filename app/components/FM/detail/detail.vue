<template>
    <div>
        <div class="play_area_wrap">
            <detail-list v-for="item in this.data" :detail-item="item" :key = "item.id" v-on:getUrl = "getUrl"></detail-list>
            <div class="loadmore" @click="loadMore" v-show = "hasMore">加载更多</div>
        </div>
        <play-area ref="player" :play-url="playUrl"></play-area>
    </div>
    
</template>
<script>    
    import DetailList from './detaillist';
    import axios  from 'axios';
    import PlayArea from '../play/play';
    export default {
        data(){
            return {
                id: this.$route.params.id,
                indexStart:1,
                indexPage:50,
                data:[],
                playUrl:"",
                hasMore:true,
                dataLength:0,
                nowDataSize:0
            }
        },
        created(){
            axios.get(`/channelondemands/${this.id}/programs/order/0/curpage/${this.indexStart}/pagesize/${this.indexPage}`).then((res)=>{
                if(res.data){
                    this.data= res.data.data;
                    this.dataLength = res.data.total;
                    this.nowDataSize = res.data.data.length;
                }
            }).catch((err)=>{ 
                console.log(err);
            });
        },
        components:{
            DetailList,
            PlayArea
        },
        methods:{
            getUrl(e){
                this.playUrl = e.url;
                this.$refs.player.playMusic();
            },
            loadMore(){
                this.indexStart += 1;
                axios.get(`/channelondemands/${this.id}/programs/order/0/curpage/${this.indexStart}/pagesize/${this.indexPage}`).then((res)=>{
                    if(res.data.data){
                        this.data = this.data.concat(res.data.data);
                        this.nowDataSize += res.data.data.length;
                        if(this.dataLength === this.nowDataSize){
                            this.hasMore = false;
                        }
                    }
                }).catch((err)=>{
                    this.hasMore = false;
                });
            }
        }
    }
</script>