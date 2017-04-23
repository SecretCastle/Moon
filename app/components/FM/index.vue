<template>
    <div class="wrap">
        <div class="info_area">
            <swiper-box :img-src="img[0]"></swiper-box>
            <list-box></list-box>
        </div>
        <play-area></play-area>
    </div> 
</template>
<script>
   import Swiper from '../common/Swiper';
   import List from '../common/List';
   import PlayArea from './play/Play';

   export default {
       data(){
            return {
                img:["http://pic.qiantucdn.com/58pic/21/41/37/85N58PIC65z_1024.jpg"],
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
            "list-box":List,
            "play-area":PlayArea
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