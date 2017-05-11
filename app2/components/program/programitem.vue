<template>
    <div class="item_list_panel">
        <div class="item_list_panel_title clearfix">
            <span>{{itemData.title}}</span>
            <span class="iconfont">&#xe625;</span>
        </div>
        <div class="item_list_panel_detail flex-left">
            <span>{{itemData.sale_status === 'free' ? '免费':'付费'}}</span>
            <span>11:30</span>
            <span>{{itemData.update_time}}</span>
        </div>
    </div>
</template>
<script>
    export default {
        props:{
            itemData:{
                type:Object,
                require:true
            }
        }
    }
</script>