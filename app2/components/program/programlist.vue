<template>
    <div class="item_list">
        <re-fresh :on-refresh="onRefresh" ref="program_scroll">
            <program-item slot="fresh" v-for="item in listData.data.data" :key = "item.id" :item-data="item"></program-item>
        </re-fresh>
    </div>
</template>

<script>
    import ProgramItem from './programitem';
    import ReFresh from '../public/refresh';
    export default {
        components:{
            ProgramItem,
            ReFresh
        },
        props:{
            listData:{
                type:Object,
                require:true,
                default(){
                    return {
                        data:{
                            data:[]
                        }
                    }
                }
            }
        },
        methods:{
            onRefresh(){
                console.log('refresh');
            }
        }
    }   
</script>