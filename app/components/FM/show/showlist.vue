<template>
    <div class="show_item" @click="detail">
        <div class="item_pic">
            <img src="../../../assets/default.jpg" :data-img="dataDetail.thumbs.large_thumb"/>
        </div>
        <div class="item_wrap">
            <div class="item_title">{{dataDetail.title}}</div>
            <div class="item_des">{{dataDetail.description}}</div>
            <div class="item_lastUpdate">【{{dataDetail.latest_program}}】</div>
        </div>
        
    </div>
</template>
<script>
    export default {
        data(){
            return {
               
            }
        },
        props:{
            dataDetail:Object
        },
        updated(){

        },
        methods:{
            detail(){
                this.$router.push({path:`/detail/${this.dataDetail.id}`});
            }
        }
    }
</script>
