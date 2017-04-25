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
<style lang="sass" scoped>
    .show_item{
        display:flex;
        display:-webkit-flex;
        justify-content:space-around;
        background:#fff;
        margin-bottom:5px;
        padding:5px;
        .item_pic{
            width:100px;
            height:100px;
            img{
                width:100px;
                height:100px;
            }
        }
        .item_wrap{
            width:80%;
            padding-left:10px;
            position:relative;

            .item_title{
                display:box;
                display:-webkit-box;
                overflow:hidden;
                text-overflow:ellipsis;
                font-size:16px;
                line-height:24px;
                height:24px;
            }
            .item_des{
                
                font-size:12px;
                max-height:32px;
                overflow:hidden;
            }
            .item_lastUpdate{
                font-size:12px;
                font-weight:400;
                position:relative;
                bottom:-20px;
                overflow:hidden;
                max-height:18px;
            }
        }
        
    }
</style>