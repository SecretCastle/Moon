<template>
    <div class="list-wrap">
        <list-item v-for = "item in listData" :list-data="item" :key="item.id"></list-item>
    </div>
</template>
<script>
    import axios from 'axios';
    import ListItem from "./ListItem";
    export default {
        data(){
            return {
                listData: {}
            }
        },
        created (){
            var _ = this;
            axios.get('/categories').then(function(res){
                _.$set(_,"listData",res.data.data);
            }).catch(function(err){
                console.log(err);
            });
        },
        components:{
            "list-item":ListItem
        }
    }
</script>