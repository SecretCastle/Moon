<template>
    <div id = "app">
        <div class="tab">
            <router-link to="/" class="tabLi">首页</router-link>
            <router-link to="/categories" class="tabLi">分类</router-link>
        </div>
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