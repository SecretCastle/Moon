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
