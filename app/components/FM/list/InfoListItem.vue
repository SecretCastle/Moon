<template>
    <div class="info_list_items">
        <div class="panel"># {{resItem.name}}</div>
        <div class="innerPanel">
            <info-list-detail v-for = "item in resItem.values" :res-detail = "item" :key = "item.id"></info-list-detail>
        </div>
    </div>
</template>
<script>
    import InfoListDetail from './infolistdetail';
    export default {
        data(){
            return {
                mgs:'hello world',
                
            }
        },
        props:{
            resItem : Object
        },

        components:{
            'info-list-detail':InfoListDetail
        }
    }
</script>
<style lang="sass" scoped>
    $bgColor:#fff;
    .info_list_items{
        margin: 5px;
        .panel{
            padding:10px;
            background-color: $bgColor;
            border-bottom:1px solid #ccc;
        } 
        .innerPanel{
            padding-top:0;
            padding-left:20px;
            padding-right:20px;
            padding-bottom:0;
            background:$bgColor;
        }
    }
</style>