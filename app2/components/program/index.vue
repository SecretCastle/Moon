<template>
    <div class="item_detail_wrap main_content_wrap" :class="[isPlay !== null ? 'isPlay':'']">
        <program-info :info-data="reqData[0]"></program-info>
        <program-list :list-data="reqData[1]"></program-list>
    </div>
</template>

<script>
    import ProgramInfo from './programinfo';
    import ProgramList from './programlist';
    
    import axios from 'axios';
    import Public from '../../utils/public';

    export default {
        data(){
            return{
                reqData:[]
            }
        },
        components:{
            ProgramInfo,
            ProgramList
         
        },
        created(){
            this.chanelId = this.$route.params.id;
            this.$store.commit('HAS_DONE',false);
        },
        mounted(){
            /**
                多请求处理
             */
            Public.MultiRequest(`/channelondemands/${this.chanelId}`,`/channelondemands/${this.chanelId}/programs/order/0/curpage/1/pagesize/10 `).then((res)=>{
                if(res){
                    this.$store.commit('HAS_DONE',true);
                    this.reqData = [...res];
                }
            }).catch((err)=>{
                throw err;
            });
        },
        computed:{
            isPlay(){
                return this.$store.state.playUrl;
            }
        }
    }
</script>
