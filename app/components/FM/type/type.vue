<template>
    <div>
        <div>{{id}}</div>
        <div>{{data}}</div>
    </div>
</template>
<script>
    import axios from 'axios';
    export default {
        data(){
            return {
                id : this.$route.params.id,
                data:"",
                dataMsg:""
            }
        },
        created:function(){
            axios.get(`/categories/${this.id}`).then((res)=>{
                this.data = res.data.data;
            }).catch((err)=>{
                console.log(err);
            });
        }


    }
</script>