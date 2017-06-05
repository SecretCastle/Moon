<template>
    <div class="info_wrap flex-arround">
        <div class="leftImgOfProgram">
            <img src="../../assets/default.jpg" />
        </div>
        <div class="rightContentOfProgram">
            <div class="program_title">{{data.data.data.title}}</div>
            <div class="program_decsription">{{data.data.data.description}}</div>
            <!--<div class="program_author">作者：<span>陈方仲</span></div>-->
        </div>
    </div>
</template>
<script>
    import Public from '../../utils/public';
    export default {
        data() {
            return {
                data: {
                    data: {
                        data: {}
                    }
                }
            }
        },
        props: {
            chanelId: {
                type: String,
                require: true
            }
        },
        updated() {
            Public.preImgLoad(this.data.data.data.thumbs.large_thumb).then(res => {
                if (res) {
                    this.$el.childNodes[0].childNodes[0].src = res.src;
                }
            }).catch(err => {

            });
        },
        mounted() {
            Public.MultiRequest(`/channelondemands/${this.chanelId}`).then(res => {
                this.$store.commit('HAS_PROGRAMINFO_DONE', true);
                //Public.colorfulDebugConsole('log', 'blue', res[0].data.data.thumbs.large_thumb);
                this.$store.commit('PLAYCONTENT_PIC', res[0].data.data.thumbs.large_thumb);
                localStorage.setItem('playcontentImg', res[0].data.data.thumbs.large_thumb)
                this.data = res[0];
            }).catch(err => {
                console.log(err);
            });
        }
    }
</script>