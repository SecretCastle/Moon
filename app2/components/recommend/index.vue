<template>
    <div class="main_content_wrap" :class="[isPlay !== null ? 'isPlay':'']">
        <loading></loading>

        <swiper :img-data="imgData">
            <div slot="swiper_img_slot" class="swiper_img" v-for = "item in imgData" :key = "item.id">
                <img :src="item.thumbs.large_thumb" />
            </div>
        </swiper>
        <home-item-group :home-data="homeData"></home-item-group>
    </div>
</template>
<script>
    import Loading from '../public/loading';
    import Swiper from '../public/swiper';
    import HomeItemGroup from '../home_item/homeitemgroup';
    import axios from 'axios';

    export default {
        data(){
            return{
                imgData:[{
                    "thumbs": {
                        "large_thumb": "https://img.alicdn.com/imgextra/i1/786678272/TB2Ni_eXghJc1FjSZFDXXbvnFXa_!!786678272.jpg"
                    }
                }],
                homeData:[],
                chanelId:null
            }
        },
        components:{
            Swiper,
            Loading,
            'home-item-group':HomeItemGroup
        },
        computed:{
            isPlay(){
                return this.$store.state.playUrl;
            },
            filterData(data){
                return data.filter( item => item.brief_name !== "");
            }
        },
        created(){
            this.chanelId = this.$route.params.id;
            this.$store.commit('HAS_DONE',false);
            axios.get(`/section/${this.chanelId}`).then((res)=>{
                console.log(res);
                if(res){
                     this.$store.commit('HAS_DONE',true);
                     this.imgData = res.data.data.shift().recommends;
                     this.homeData = res.data.data;
                }
            }).catch((err)=>{

            });
            
        }
    }
</script>