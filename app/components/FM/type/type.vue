<template>
    <div class="type_wrap">
        <info-list :res-datas="data"></info-list>
    </div>
</template>
<script>
    import axios from 'axios';
    import InfoList from '../list/infolist';
    export default {
        data(){
            return {
                id : this.$route.params.id,
                data:[],
                dataMsg:""
            }
        },
        created:function(){
            axios.get(`/categories/${this.id}`).then((res)=>{
                if(res){
                    this.data = res.data.data;
                }            
            }).catch((err)=>{
                console.log(err);
            });
        },
        components:{
            "info-list":InfoList
        }
    }
</script>

<style lang="sass" scoped>
    .type_wrap{
        position:relative;
        margin-bottom:85px;
    }


</style>