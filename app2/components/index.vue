<template>
    <div class="main_content_wrap">
        <!--顶部图片-->
        <swiper-slide></swiper-slide>
    </div>
</template>

<script>
    console.warn('前期写的app1，可在webpackconfig中修改路径，并重新编译，即可查看，此为重构版本');

    import Swiper from "./public/swiper";
    export default {
        components:{
            "swiper-slide":Swiper
        }
    }
</script>

<style lang="sass">
    
</style>