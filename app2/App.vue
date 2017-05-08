<!--前期app文件夹结构混乱-->
<template>
    <div id = "app">
        <router-view></router-view> 
        <play-area :play-url="url"></play-area>
    </div>
</template>
<script>
    import PlayArea from "./components/play/play";
    export default {
        data(){
            return {
                url:"http://upod.qingting.fm/m4a/5902fe3f7cb8917264810f95_7231066_24.m4a"
            }
        },
        components:{
            PlayArea
        },
        created(){
            //检查是否存在storage
            localStorage.clear();
            let urlSave = localStorage.getItem('saveUrl');
            if(urlSave !== undefined && urlSave !== null){   
                this.$store.commit('SET_URL',urlSave);
                this.$store.commit('SET_HAS_PLAY',true);
            }
        }
    }
</script>

<style lang="sass">
    @import './assets/common.scss';
    
</style>