<template>
    <div class="wrap">
        <swiper-box :img-data="imgData" :delay-time="4000" :is-delay="false"></swiper-box>
        <rec-view v-for = "item in recommendData" :rec-data="item" :key ="item.section_id" ></rec-view>
        <div class="type_class">
            <router-link to="/categories" class="iner">分类</router-link>
        </div>
       
    </div> 
</template>
<script>
   import Swiper from '../common/Swiper';
   import List from '../common/List';
   import RecView from './recommend/recommend';
   import axios from 'axios';
   export default {
       data(){
            return {
                imgData:{},
                recommendData:[],
                liver:[]
            }
       },
        components:{
            "swiper-box":Swiper,
            "list-box":List,
            'rec-view':RecView
        },
        created(){
            axios.get('/section/0').then((res)=>{
                if(res){
                    this.imgData = res.data.data.shift();
                    this.liver = res.data.data.splice(0,1);
                    this.recommendData = res.data.data;
                }
            }).catch((err)=>{
                console.log(err);
            });
        }
   }
</script>
<style lang="sass" scoped>
    .wrap{
        position:relative;
        margin-bottom:85px;
    }
    .info_area{
        position:relative; 
    }
    .type_class{
       display:flex;
       display:-webkit-flex;
       .iner{
           flex:1;
           height:40px;
           text-align:center;
           line-height:40px;
           text-decoration:none;
           background:#fff;
       }
    }
    .type_class::after{
        content:"";
        display:table;
        clear:both;
        overflow:hidden;
    }
</style>