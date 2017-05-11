<template>
    <div class="categories_wrap main_content_wrap flex-left">
        <cate-item v-for = "item in resData" :item-data="item" :key = "item.id"></cate-item>
    </div>
</template>

<script>
    import CateItem from './categorie_item';
    import axios from 'axios';

    export default {
        data(){
            return {
                resData:[]
            }
        },
        components:{
            CateItem
        },
        created(){
            axios.get('/categories').then(res=>{
                if(res){
                    this.resData = res.data.data
                }
            }).catch(err=>{

            });
        }
    }
</script>