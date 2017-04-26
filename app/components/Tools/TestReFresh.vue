<template>
    <div>
         <refresh-view>
            <div class="scroll_test_wrap" slot = "s1">
                <refresh-list v-for = "item in listdata" :key="item.id" :item-data="item"></refresh-list>
            </div>
        </refresh-view>
    </div>
</template>
<script>
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
                }]
            }
        },
        components:{
            'refresh-view':ReFresh,
            'refresh-list':ReFreshList
        },
        methods:{
            onRefresh(){

            }
        }

    }
</script>
