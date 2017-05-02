<template>
    <div class="rec_box_item" @click="goDetail">
        <div class="rec_box_item_img">
            <img src = "../../../assets/default.jpg" />
        </div>
        <div class="rec_box_item_title">{{recArray.title}}</div>
    </div>
</template>
<script>
import Public from '../../../utils/public';
    export default {
        props:{
            recArray:{
                type:Object,
                require:true
            }
        },
        created(){
            Public.preImgLoad(this.recArray.thumb).then((img)=>{
                if(typeof img === "string"){
                    this.$el.children[0].children[0].src=img;
                }
            }).catch((err)=>{
                console.warn(err);
            });
        },
        methods:{
            goDetail(){
                this.$router.push({path:`/detail/${this.recArray.parent_info.parent_id}`});
            }
        }
    }
</script>