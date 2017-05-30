<template>
    <div class="play_board_content">
        <div class="play_title">{{contentData.title}}</div>
        <div class="play_author">读者</div>
        <div class="bigImg">
            <img src="http://pic.qingting.fm/goods/2017/05/08/38efd7f676f66c9ad74d7aa3370fc141.jpg!large"/>
        </div>
    </div>
</template>

<script>
    import Public from '../../utils/public';
    export default {
        props:{
            contentData:{
                type:Object,
                require:true
            }
        },
        mounted(){
           
        },
        computed:{
            
        }
    }
</script>