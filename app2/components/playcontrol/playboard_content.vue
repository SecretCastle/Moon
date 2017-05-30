<template>
    <div class="play_board_content">
        <div class="play_title">{{contentData.title}}</div>
        <div class="play_author">读者</div>
        <div class="bigImg">
            <img :src="contentImg"/>
        </div>
    </div>
</template>

<script>
    import Public from '../../utils/public';
    export default {
        props: {
            contentData: {
                type: Object,
                require: true
            }
        },
        computed: {
            contentImg() {
                return localStorage.getItem('playcontentImg');
            }
        }
    }
</script>