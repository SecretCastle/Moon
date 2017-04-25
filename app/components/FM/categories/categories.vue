<template>
    <div class="categories_style">
        <list-box></list-box>
    </div>
</template>

<script>
    import List from '../../common/List';
    export default {
       data(){
            return {
               
            }
       },
        components:{
            "list-box":List
        }
   }
</script>

<style lang="sass" scoped>
    .categories_style{
        margin-bottom:85px;
    }
</style>