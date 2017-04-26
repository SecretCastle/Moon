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
    @import './assets/common.scss';
  
</style>