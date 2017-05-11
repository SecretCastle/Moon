<template>
    <div class="item_detail_wrap">
        <loading></loading>
        <program-info :info-data="reqData[0]"></program-info>
        <program-list :list-data="reqData[1]"></program-list>
    </div>
</template>

<script>
    import ProgramInfo from './programinfo';
    import ProgramList from './programlist';
    import Loading from '../public/loading'
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
            ProgramList,
            Loading
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
                    console.log([...res]);
                }
            }).catch((err)=>{
                throw err;
            });
        }
    }
</script>
