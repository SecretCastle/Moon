<template>
    <div class="show_item" @click="detail">
        <div class="item_pic">
            <img src="../../../assets/default.jpg"/>
        </div>
        <div class="item_wrap">
            <div class="item_title">{{dataDetail.title}}</div>
            <div class="item_des">{{dataDetail.description}}</div>
            <div class="item_lastUpdate">【{{dataDetail.latest_program}}】</div>
        </div>
        
    </div>
</template>
<script>
    import Public from '../../../utils/public';

    export default {
        data(){
            return {
               
            }
        },
        props:{
            dataDetail:Object
        },
        created(){
            Public.preImgLoad(this.dataDetail.thumbs.large_thumb).then((img)=>{
                if(typeof img === "string"){
                    this.$el.children[0].children[0].src = img;
                }
            }).catch((err)=>{

            });
        },
        methods:{
            detail(){
                this.$router.push({path:`/detail/${this.dataDetail.id}`});
            }
        }
    }
</script>
