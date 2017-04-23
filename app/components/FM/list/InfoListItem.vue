<template>
    <div class="info_list_items">
        <div class="panel">{{resItem.id}} == > {{resItem.name}}</div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                mgs:'hello world',
                
            }
        },
       
        props:{
            resItem : Object
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
        } 

    }
</style>