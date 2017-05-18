<template>
    <div class="item_list">
        <re-fresh :on-refresh="onRefresh" ref="program_scroll" :inner-fresh="true" :scroll-val = "scrollTop" >
            <program-item slot="fresh" v-for="item in listData.data.data" :key = "item.id" :item-data="item"></program-item>
        </re-fresh>
    </div>
</template>

<script>
    import ProgramItem from './programitem';
    import ReFresh from '../public/refresh';
    import Public from '../../utils/public';
    export default {
        data(){
            return {
                listData:{data:{}},
                indexPage:30,
                nowCount:0,
                totalCount:0,
                scrollTop:0
            }
        },
        components:{
            ProgramItem,
            ReFresh
        },
        props:{
            chanelId:{
                type:String,
                require:true
            }
        },
        methods:{
            onRefresh(){
                //this.$store.commit('HAS_PROGRAMLIST_DONE',false);
                if(this.totalCount > this.nowCount){
                    this.indexPage += 30;
                    Public.MultiRequest(`/channelondemands/${this.chanelId}/programs/order/0/curpage/1/pagesize/${this.indexPage}`).then(res=>{
                        this.totalCount = res[0].data.total;
                        this.nowCount += res[0].data.data.length;
                        //this.$store.commit('HAS_PROGRAMLIST_DONE',true);
                        this.listData = res[0];
                    }).catch(err=>{
                        console.log(err);
                    });
                }else{
                    console.log('没有了');
                    this.$refs.program_scroll.noMoreFn(false);
                    //this.$store.commit('HAS_PROGRAMLIST_DONE',true);
                    this.$store.commit('TOAST_STATE',{
                        bol:true,
                        msg:'没有数据了'
                    });
                }
                
            },
            scrollFn(){
                this.scrollTop = this.$el.scrollTop;
            }
        },
        mounted(){
            this.$el.addEventListener('scroll',this.scrollFn);
            Public.MultiRequest(`/channelondemands/${this.chanelId}/programs/order/0/curpage/1/pagesize/${this.indexPage}`).then(res=>{
                this.totalCount = res[0].data.total;
                this.nowCount += res[0].data.data.length;
                this.$store.commit('HAS_PROGRAMLIST_DONE',true);
                this.listData = res[0];
            }).catch(err=>{
                console.log(err);
            });
        }
    }   
</script>