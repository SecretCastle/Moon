<template>
    <div class="nav_html flex-left">
        <span class="iconfont" @click="back()">&#xe60c;</span>
    </div>
</template>

<script>
    export default {

        methods:{
            back(){
                this.$router.back(-1)
            }
        }
    }
</script>