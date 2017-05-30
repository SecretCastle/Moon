<template>
    <div class="play_board_main">
        <div class="meng"></div>
        <div class="mengColor"></div>
        <play-content :content-data="this.data"></play-content>
        <play-control></play-control>
    </div>
</template>

<script>
    import PlayControl from './playboard_control';
    import PlayContent from './playboard_content';
    import axios from 'axios';
    export default  {
        data(){
            return {
                id:null,
                data:{}
            }
        },
        created(){
            this.$store.commit('HAS_DONE',false);
            this.id = this.$route.params.id;
        },
        mounted(){
            axios.get(`/programs/${this.id}`).then(res=>{
                console.log(res);
                if(res){
                    this.$store.commit('HAS_DONE',true);
                    this.data = res.data.data;
                }

            }).catch(err=>{

            });
        },
        components:{
            PlayControl,
            PlayContent
        }
    }
</script>