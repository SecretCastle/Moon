<template>
    <div class="info_list_items">
        <div class="panel"># {{resItem.name}}</div>
        <div class="innerPanel">
            <info-list-detail v-for = "item in resItem.values" :res-detail = "item" :key = "item.id"></info-list-detail>
        </div>
    </div>
</template>
<script>
    import InfoListDetail from './infolistdetail';
    export default {
        data(){
            return {
                mgs:'hello world',
                
            }
        },
        props:{
            resItem : Object
        },

        components:{
            'info-list-detail':InfoListDetail
        }
    }
</script>
