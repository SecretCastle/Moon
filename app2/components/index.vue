<template>
    <div class="main_content_wrap" :class="[isPlay !== null ? 'isPlay':'']">
        
        <!--顶部图片-->
        <!--参数 => isDelay , delayTime-->
        <swiper :img-data="imgData">
            <div slot="swiper_img_slot" class="swiper_img" v-for = "item in imgData" :key = "item.id">
                <img :src="item.thumbs.large_thumb" />
            </div>
        </swiper>
        <div class="tabSelect">
            <router-link to="/recommend/1011">精品</router-link>
            <router-link to="/categories">分类</router-link>
            <router-link to="/test/refresh">测试</router-link>
            <router-link to="">其他</router-link>
        </div>
        <home-item-group :home-data="homeData"></home-item-group>
    </div>
</template>

<script>
    console.warn('前期写的app1，可在webpackconfig中修改路径，并重新编译，即可查看，此为重构版本');

    import Swiper from "./public/swiper";
    import axios from 'axios';
    //import Loading from './public/loading';
    import HomeItemGroup from './home_item/homeitemgroup';

    export default {
        data(){
            return{
                imgData:[{
                    "thumbs": {
                        "large_thumb": "https://img.alicdn.com/imgextra/i1/786678272/TB2Ni_eXghJc1FjSZFDXXbvnFXa_!!786678272.jpg"
                    }
                }],
                homeData:[]
            }
        },
        components:{
            Swiper,
            "home-item-group":HomeItemGroup
        },
        mounted(){
            this.$store.commit('HAS_DONE',false);
            axios.get('/section/0').then((res)=>{
                if(res){
                    //console.log("初始化的数据",res);
                    this.imgData = res.data.data[0].recommends;
                    this.$store.commit('HAS_DONE',true);
                    this.homeData = this.filterData(res.data.data);
                }
            }).catch((err)=>{
                console.warn(err);
            });
        },
        methods:{
            testClick(){
                this.$store.commit('SET_URL','/m4a/5902fe3f7cb8917264810f95_7231066_24.m4a');
                this.$store.commit('SET_HAS_PLAY',true);
                localStorage.setItem('saveUrl','/m4a/5902fe3f7cb8917264810f95_7231066_24.m4a');
            },
            /**
            过滤不包括brief_name的data
            */
            filterData(data){
                return data.filter( item => item.brief_name !== "");
            }
        },
        computed:{
            isPlay(){
                return this.$store.state.playUrl;
            }
        }
    }
</script>

<style lang="sass">
    
</style>