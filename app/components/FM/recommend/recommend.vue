<template>
    <div class="rec_panel">
        <div class="title">{{recData.name}}</div>
        <div class="line_with_onepx"></div>
        <div class="rec_box flex_left">
            <!--屏蔽了没有parent_info的朋友-->
            <rec-list v-for = "item in recData.recommends" :rec-array ="item" :key = "item.id" v-if="item.parent_info"></rec-list>
        </div>
    </div>
</template>
<script>
    import recList from './recommendlist';
    export default {
        props:{
            recData:{
                type:Object,
                require:true
            }
        },
        components:{
            recList
        }

    }
</script>