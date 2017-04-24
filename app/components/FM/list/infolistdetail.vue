<template>
    <div class="list_detail" @click = "getDetail">
        {{resDetail.name}}
    </div>
</template>

<script>
    export default {
        data(){
            return {
                id: this.resDetail.id
            }
        },
        props:{
            resDetail:Object
        },
        methods:{
            getDetail:function(e){
                
            }
        }
    }
</script>

<style lang="sass">
    .list_detail{
        height:40px;
        line-height:40px;
        border-bottom:1px solid #ccc;
        padding-left:10px;
    }
    .list_detail:last-child{
        border-bottom:none;
    }
</style>