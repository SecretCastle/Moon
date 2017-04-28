<template>
    <div class="father">
         <refresh-view ref="scroller" :on-refresh = "onRefresh">
            <div class="scroll_test_wrap" slot = "s1">
                <refresh-list v-for = "item in listdata" :key="item.id" :item-data="item"></refresh-list>
            </div>
        </refresh-view>
    </div>
</template>
<script>
    //父组件
    import ReFresh from './ReFresh';
    import ReFreshList from './TestList';

    export default {
        data(){
            return {
                listdata:[{
                    id:"1",
                    name:'1'
                },{
                    id:"2",
                    name:'2'
                },{
                    id:"3",
                    name:'3'
                },{
                    id:"4",
                    name:'4'
                },{
                    id:"5",
                    name:'5'
                }],
                refreshState:false
            }
        },
        components:{
            'refresh-view':ReFresh,
            'refresh-list':ReFreshList
        },
        methods:{
            onRefresh(){
                setTimeout(()=>{
                    this.$refs.scroller.onFresh();
                },2000);
            }
        }

    }
</script>
