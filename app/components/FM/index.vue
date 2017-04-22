<template>
    <div class="wrap">
        <swiper-box :img-src="img[0]"></swiper-box>
        <list-box></list-box>
    </div> 
</template>
<script>
   import Swiper from '../common/Swiper';
   import List from '../common/List';
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
            "list-box":List
        }
   }
</script>
<style lang="sass">
    
</style>