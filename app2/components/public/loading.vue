<template>
    <div class="loading" v-show = "isLoading">
        <div class="iconfont">&#xe642;</div>
    </div>
</template>
<script>
    export default {
        computed:{
            isLoading(){
               return this.$store.state.loadingState;
            }
        }
    }
</script>
