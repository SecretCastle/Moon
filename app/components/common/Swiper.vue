<template>
    <div class="swiper">
        <img :src="imgSrc" />
    </div>
</template>
<script>
    export default{
        props:{
            imgSrc:String
        }
    }
</script>
<style lang="css" scoped>
    .swiper{
        position:relative;
    }

    img{
        width:100%;
    }
</style>