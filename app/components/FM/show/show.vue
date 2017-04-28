<template lang="html">
    <div class="wrap">
        <div class="navTitle">Title</div>
        <div class="noTop">
            <scroll-fresh ref="scroller" :on-refresh = "onRefresh">
                <div slot="s1">
                    <show-list v-for = "item in data" :data-detail = "item" :key = "item.id"></show-list>
                </div>
            </scroll-fresh>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import ShowList from './showlist';
    import ScrollFresh from '../../common/ReFresh.vue';

    export default {
        data(){
            return{
                id:this.$route.params.id,
                typeid:this.$route.params.typeid,
                data:[],
                startSize:10,
                indexPage:1,
                dataLength:0,
                nowSize:0
            }
        },
        created:function(){
            axios.get(`/categories/${this.typeid}/channels/order/bydefault/0/attr/${this.id}/curpage/${this.indexPage}/pagesize/${this.startSize}`).then((res)=>{
                this.dataLength = res.data.total;
                this.nowSize = res.data.data.length;
                this.data = res.data.data;
            }).catch((err)=>{
                console.log(err);
            });
        },

        components:{
            ShowList,
            ScrollFresh
        },

        methods:{
            onRefresh(){
                if(this.dataLength > this.nowSize){
                    this.indexPage += 1;
                    axios.get(`/categories/${this.typeid}/channels/order/bydefault/0/attr/${this.id}/curpage/${this.indexPage}/pagesize/${this.startSize}`).then((res)=>{
                        console.log("refresh完成");
                        this.data = this.data.concat(res.data.data);
                        this.nowSize += res.data.data.length;
                        this.$refs.scroller.onFresh();
                    }).catch((err)=>{
                        console.log(err);
                        console.log("refresh失败");
                        this.$refs.scroller.onFresh();
                    });
                }else {
                    console.log('无更多数据');
                    this.$refs.scroller.onFresh();
                }
                
            }
        }
    }
</script>
