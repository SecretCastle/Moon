<!--前期app文件夹结构混乱-->
<template>
    <div id = "app">
        <nav-bar></nav-bar>
        <loading></loading>
        <toast></toast>
        <router-view></router-view> 
        <play-area :play-url="url"></play-area>
    </div>
</template>
<script>
    import PlayArea from "./components/play/play";
    import Loading from './components/public/loading';
    import Toast from './components/public/toast';
    import NavBar from './components/public/nav';
    export default {
        data() {
            return {
                url: "http://upod.qingting.fm/m4a/5902fe3f7cb8917264810f95_7231066_24.m4a"
            }
        },
        components: {
            PlayArea,
            Loading,
            Toast,
            NavBar
        },
        created() {
            //检查是否存在storage
            localStorage.removeItem('saveUrl');
            /*
                目前保存的localstorage
                saveUrl，playcontentImg

            */
            let urlSave = localStorage.getItem('saveUrl');
            if (urlSave !== undefined && urlSave !== null) {
                this.$store.commit('SET_URL', JSON.parse(urlSave));
                this.$store.commit('SET_HAS_PLAY', true);
            };

            //判断手机还是PC
            var mobileAgent = new Array("iphone", "ipod", "ipad", "android", "mobile", "blackberry", "webos", "incognito", "webmate", "bada", "nokia", "lg", "ucweb", "skyfire");
            var browser = navigator.userAgent.toLowerCase();
            var isMobile = false;

            for (var i = 0; i < mobileAgent.length; i++) {
                if (browser.indexOf(mobileAgent[i]) != -1) {
                    isMobile = true;
                    this.$store.commit('IS_PC', false);
                    break;
                } else {
                    this.$store.commit('IS_PC', true);
                }
            }
        }
    }
</script>

<style lang="sass">
    @import './assets/common.scss';
</style>