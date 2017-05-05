<template>
    <div class="main_content_wrap">
        <!--Loading-->
        <loading></loading>
        <!--顶部图片-->
        <!--参数 => isDelay , delayTime-->
        <swiper :img-data="imgData" :isDelay="true">
            <div slot="swiper_img_slot" class="swiper_img" v-for = "item in imgData" :key = "item.id">
                <img :src="item.thumbs.large_thumb" />
            </div>
        </swiper>
        <div class="tabSelect">
            <div>精品</div>
            <div>分类</div>
            <div>其他</div>
            <div>其他</div>
        </div>
        <div class="panel">
            <div class="panel_title">分类</div>
            <div class="panel_line"></div>
            <div class="panel_content">
                <div class="panel_content_item">
                    <img src="https://img.alicdn.com/imgextra/i3/786678272/TB2ZOGJaMOI.eBjSszhXXbHvFXa_!!786678272.jpg" />
                </div>
                <div class="panel_content_item">
                    <img src="https://img.alicdn.com/imgextra/i3/786678272/TB2ZOGJaMOI.eBjSszhXXbHvFXa_!!786678272.jpg" />
                </div>
                <div class="panel_content_item">
                    <img src="https://img.alicdn.com/imgextra/i3/786678272/TB2ZOGJaMOI.eBjSszhXXbHvFXa_!!786678272.jpg" />
                </div>
            </div>
        </div>
        <div class="panel">
            <div class="panel_title">分类</div>
            <div class="panel_line"></div>
            <div class="panel_content">
                <div class="panel_content_item">
                    <img src="https://img.alicdn.com/imgextra/i3/786678272/TB2ZOGJaMOI.eBjSszhXXbHvFXa_!!786678272.jpg" />
                </div>
                <div class="panel_content_item">
                    <img src="https://img.alicdn.com/imgextra/i3/786678272/TB2ZOGJaMOI.eBjSszhXXbHvFXa_!!786678272.jpg" />
                </div>
                <div class="panel_content_item">
                    <img src="https://img.alicdn.com/imgextra/i3/786678272/TB2ZOGJaMOI.eBjSszhXXbHvFXa_!!786678272.jpg" />
                </div>
            </div>
        </div>
        <div class="panel">
            <div class="panel_title">分类</div>
            <div class="panel_line"></div>
            <div class="panel_content">
                <div class="panel_content_item">
                    <img src="https://img.alicdn.com/imgextra/i3/786678272/TB2ZOGJaMOI.eBjSszhXXbHvFXa_!!786678272.jpg" />
                </div>
                <div class="panel_content_item">
                    <img src="https://img.alicdn.com/imgextra/i3/786678272/TB2ZOGJaMOI.eBjSszhXXbHvFXa_!!786678272.jpg" />
                </div>
                <div class="panel_content_item">
                    <img src="https://img.alicdn.com/imgextra/i3/786678272/TB2ZOGJaMOI.eBjSszhXXbHvFXa_!!786678272.jpg" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    console.warn('前期写的app1，可在webpackconfig中修改路径，并重新编译，即可查看，此为重构版本');

    import Swiper from "./public/swiper";
    import axios from 'axios';
    import Loading from './public/loading';

    export default {
        data(){
            return{
                imgData:[{
                    "thumbs": {
                        "large_thumb": "https://img.alicdn.com/imgextra/i1/786678272/TB2Ni_eXghJc1FjSZFDXXbvnFXa_!!786678272.jpg"
                    }
                }]
            }
        },
        components:{
            Swiper,
            Loading
        },
        created(){
            axios.get('/section/0').then((res)=>{
                console.log('初始化数据',res);
                if(res){
                    this.imgData = res.data.data[0].recommends;
                    this.$store.Common.commit('done',false);
                }
            }).catch((err)=>{
                console.warn(err);
            });
        }
    }
</script>

<style lang="sass">
    
</style>