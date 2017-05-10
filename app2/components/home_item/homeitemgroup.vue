<template>
<div class="home_item_group">
    <home-panel v-for = "item in homeData" :key = "item.section_id" :home-panel = "item"></home-panel>
</div>
</template>
<script>
    import HomePanel from './homepanel';

    export default {
        components:{
            HomePanel
        },
        props:{
            homeData:{
                type:Array,
                require :true
            }
        }
    }
</script>