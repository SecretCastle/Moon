<template>
    <div class="cate_item" @click="go">{{itemData.name}}</div>
</template>

<script>
    export default {
        props:{
            itemData:{
                type:Object,
                require:true
            }
        },
        methods:{
            go(){
                console.log("点击的分类id",this.itemData.id);
                this.$router.push({path:`/recommend/${this.itemData.section_id}`});
            }
        }
    }
</script>