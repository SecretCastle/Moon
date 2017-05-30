<template>
    <div class="item_detail_wrap main_content_wrap" :class="[isPlay !== null ? 'isPlay':'']" >
        <program-info :chanel-id="chanelId" :class="[INFO_DONE?'DONE':'LOADING']"></program-info>
        <program-list :chanel-id="chanelId" :class="[LIST_DONE?'DONE':'LOADING']"></program-list>
    </div>
</template>

<script>
    import ProgramInfo from './programinfo';
    import ProgramList from './programlist';

    import axios from 'axios';
    import Public from '../../utils/public';

    export default {
        components: {
            ProgramInfo,
            ProgramList
        },
        created() {
            this.chanelId = this.$route.params.id;
            this.$store.commit('HAS_PROGRAMINFO_DONE', false);
            this.$store.commit('HAS_PROGRAMLIST_DONE', false);
        },
        computed: {
            isPlay() {
                return this.$store.state.playUrl;
            },
            INFO_DONE() {
                return this.$store.state.HAS_PROGRAMINFO_DONE_FLAG;
            },
            LIST_DONE() {
                return this.$store.state.HAS_PROGRAMLIST_DONE_FLAG;
            }
        },
        mounted() {
            console.log(this.INFO_DONE, this.LIST_DONE);
            this.$store.commit('HAS_DONE', false);
            if (this.INFO_DONE && this.LIST_DONE) {
                this.$store.commit('HAS_DONE', true);
            } else {
                this.$store.commit('HAS_DONE', false);
            }
            /**
                多请求处理
             */
            // Public.MultiRequest(`/channelondemands/${this.chanelId}`,`/channelondemands/${this.chanelId}/programs/order/0/curpage/1/pagesize/10`).then((res)=>{
            //     if(res){
            //         this.$store.commit('HAS_DONE',true);
            //         this.reqData = [...res];
            //     }
            // }).catch((err)=>{
            //     throw err;
            // });
        },
        updated() {
            if (this.INFO_DONE && this.LIST_DONE) {
                this.$store.commit('HAS_DONE', true);
                // this.$store.commit('HAS_PROGRAMLIST_DONE',false);
                // this.$store.commit('HAS_PROGRAMINFO_DONE',false);
            } else {
                this.$store.commit('HAS_DONE', false);
            }
        }
    }
</script>