<template>
    <div class="show_item">
        <div class="item_pic">
            <img :src="dataDetail.thumbs.large_thumb" />
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
        }
    }
</script>
