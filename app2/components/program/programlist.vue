<template>
    <div class="item_list">
        <program-item v-for="item in listData.data.data" :key = "item.id" :item-data="item"></program-item>
    </div>
</template>

<script>
    import ProgramItem from './programitem';
    export default {
        components:{
            ProgramItem
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
        }
    }   
</script>