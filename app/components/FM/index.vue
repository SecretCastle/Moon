<template>
    <div class="wrap">
        <div class="info_area">
            <swiper-box :img-src="img[0]"></swiper-box>
        </div>
        <div class="type_class">
            <router-link to="/categories" class="iner">分类</router-link>
        </div>
       
    </div> 
</template>
<script>
   import Swiper from '../common/Swiper';
   import List from '../common/List';

   export default {
       data(){
            return {
                img:["http://img.zcool.cn/community/014813571214bd6ac7251343d76f9a.jpg@900w_1l_2o_100sh.jpg"],
                list:[{
                    id:'1',
                    title:'title one'
                },{
                    id :'2',
                    title:'title two'
                }]
            }
       },
        components:{
            "swiper-box":Swiper,
            "list-box":List
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