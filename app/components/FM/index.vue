<template>
    <div class="wrap">
        <div class="info_area">
            <swiper-box :img-src="img[0]"></swiper-box>
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
    }
    .info_area{
        position:relative;
        margin-bottom:85px;
    }
</style>