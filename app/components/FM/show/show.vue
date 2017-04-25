<template lang="html">
    <div class="wrap">
        <div class="navTitle">Title</div>
        <div class="noTop">
            <div class="show"  @touchstart = "touchstart">
                <show-list v-for = "item in data" :data-detail = "item" :key = "item.id"></show-list>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import ShowList from './showlist';
    export default {
        data(){
            return{
                id:this.$route.params.id,
                typeid:this.$route.params.typeid,
                data:[]
            }
        },

        created:function(){
            axios.get(`/categories/${this.typeid}/channels/order/bydefault/0/attr/${this.id}/curpage/1/pagesize/30`).then((res)=>{
                this.data = res.data.data;
            }).catch((err)=>{
                console.log(err);
            });
        },

        components:{
            ShowList
        },

        methods:{
            touchstart(e){
                
            },
            touchMove(e){
                console.log(this.$el.scrollTop);
            }
        }
    }
</script>

<style lang="sass" scoped>
    .navTitle{
        width:100%;
        height:40px;
        background:#fff;
        position:fixed;
        z-index:999;
        text-align:center;
        line-height:40px;
        top:0;
    }
    .scroll_wrap{
        position:absolute;
        left:0;
        top:125px;
        right:0;
    }
    .noTop{
        margin-top:45px;
    }
    .show{
        position:relative;
        margin-top:5px;
        margin-left:5px;
        margin-right:5px;
        margin-bottom:85px;
    }
</style>