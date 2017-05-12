<template>
    <div class="loading" v-show = "!isLoading">
        <div class="iconfont">&#xe642;</div>
    </div>
</template>
<script>
    export default {
        computed:{
            isLoading(){
               return this.$store.state.loadingState;
            }
        },
        mounted(){
            document.body.classList.add('noScrollScreen');
        },
        updated(){
            if(this.isLoading){
                document.body.classList.remove('noScrollScreen');
            }else{
                document.body.classList.add('noScrollScreen');
            }
        }
    }
</script>
