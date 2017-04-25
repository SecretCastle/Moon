<template>
    <div id = "app">
        <router-view></router-view>
        <play-area></play-area>
    </div>
</template>
<script>
    import PlayArea from './components/FM/play/play';
    export default {
        data(){
            return {

            }
        },
        components:{
            "play-area":PlayArea
        }
    }
</script>

<style lang="sass">
    
   *,body{
       margin:0;
       padding:0;
   }
   body{
        background:#eee
   }
   .tab{
       height:30px;
       display:flex;
       display:-webkit-flex;
       position:fixed;
       top:0;
       left:0;
       width:100%;
       z-index:999;
       background:#fff;
       .tabLi{
           flex:1;
           float:left;
           display:block;
           text-decoration:none;
           text-align:center;
           line-height:30px;
           border-right:1px solid #ccc;
           border-bottom:1px solid #ccc;
       }
       .tabLi:last-child{
           border-right:none;
       }
   }
   .tab::after{
       content:"";
       display:table;
       clear:both;
       overflow:hidden;
   }
</style>