<template>
    <div class="info_list">
        <info-item v-for = "item in resDatas" :res-item = "item" :key = "item.id"></info-item>
    </div>
</template>


<script>
    import InfoItem from './InfoListItem';

    export default {
        data(){
            return {
                
            }
        },
        created:function(){
            
        },
        props:{
            resDatas:Array
        },
        components:{
            InfoItem
        }
    }
</script>

<style lang="sass" scoped>
    .info_list{

    }
</style>