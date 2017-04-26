<template>
    <div class="list_detail" @click = "getDetail">
        {{resDetail.name}}
    </div>
</template>

<script>
    export default {
        data(){
            return {
                id: this.resDetail.id,
                typeid : this.$route.params.id
            }
        },
        props:{
            resDetail:Object
        },
        methods:{
            getDetail:function(e){
               this.$router.push({path:`/show/${this.typeid}/${this.id}`});
            }
        }
    }
</script>

