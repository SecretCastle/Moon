<template>
    <div class="panel">
        <div class="panel_title clearfix">
            <span>{{homePanel.brief_name}}</span>
            <span class="iconfont" @click="tabClick">&#xe625;</span>
        </div>
        <div class="panel_line"></div>
        <div class="panel_content">
            <home-item v-for = "item in homePanel.recommends" :key= "item.id" :home-item="item"></home-item>
        </div>
    </div>
</template>

<script>
    import HomeItem from './homeitem';

    export default {
        props:{
            homePanel:{
                type:Object,
                require : false
            }
        },
        components:{
            HomeItem
        },
        methods:{
            tabClick(){
                if(this.homePanel.redirect.attributes  && this.homePanel.redirect.category_id){
                    this.$router.push({path:`/channel/${this.homePanel.redirect.category_id}/${this.homePanel.redirect.attributes[0]}`});
                }else{
                    console.log('点击menu',this.homePanel);
                }
                
            }
        }
    }
</script>
