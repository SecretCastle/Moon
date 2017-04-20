<template>
    <div class="listItem">
        <div class="panel">
            <span>{{listData.name}}</span>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
            }
        },
        props:{
            listData:Object
        }
    }
</script>

<style lang="sass">
    .listItem{
        position:relative;
        margin:5px;
        
        .panel{
            padding:5px;
            background:#fff;
            border-radius:5px;
        }
    }
</style>