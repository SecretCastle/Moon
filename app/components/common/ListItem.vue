<template>
    <div class="listItem" @click = "toNav">
        <div class="panel">
            <span>{{data.name}}</span>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                data: this.listData
            }
        },
        props:{
            listData:Object
        },
        methods:{
           toNav:function(event){
                this.$router.push({path:`/type/${this.data.id}`});
           }
        }
    }
</script>

<style lang="sass" scoped>
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