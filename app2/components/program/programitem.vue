<template>
    <div class="item_list_panel">
        <div class="item_list_panel_title clearfix">
            <span>{{itemData.title}}</span>
            <span class="iconfont">&#xe625;</span>
        </div>
        <div class="item_list_panel_detail flex-left">
            <span>{{itemData.sale_status === 'free' ? '免费':'付费'}}</span>
            <span>{{fileDuration}}</span>
            <span>{{itemData.update_time}}</span>
        </div>
    </div>
</template>
<script>
    import Public from '../../utils/public';
    export default {
        props:{
            itemData:{
                type:Object,
                require:true
            }
        },
        computed:{
            fileDuration(){
               return Public.computeMinutes(this.itemData.duration);
            }
        }
    }
</script>