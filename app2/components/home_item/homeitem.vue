<template>
    <div class="panel_content_item" v-if="isPositiveProportion" @click ="clickTap">
        <img :src="url.src" />
        <span>{{homeItem.title}}</span>
    </div>
</template>

<script>
    import Public from '../../utils/public';
    export default {
        data(){
            return {
                url:'https://img.alicdn.com/imgextra/i3/786678272/TB2ZOGJaMOI.eBjSszhXXbHvFXa_!!786678272.jpg'
            }
        },
        props:{
            homeItem:{
                type:Object,
                require:false
            }
        },
        created(){
            Public.preImgLoad(this.homeItem.thumb).then((res)=>{
                if(typeof res === 'object'){
                    this.url =  res;
                }
            }).catch((err)=>{

            });
        },
        computed:{
            //让图片不为1:1的不显示
            isPositiveProportion(){
                if(this.url.width / this.url.height === 1){
                    return true;
                }
            }
        },
        methods:{
            clickTap(){
                //直播中没有parent_info，这里过滤
                if(this.homeItem.parent_info){
                    this.$router.push({path:`/program/${this.homeItem.parent_info.parent_id}`});
                }else{
                    alert('没有');
                }
                
            }
        }
    }
</script>