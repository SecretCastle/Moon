<template>
    <div class="info_wrap flex-arround">
        <div class="leftImgOfProgram">
            <img :src="infoData.data.data.thumbs.large_thumb" />
        </div>
        <div class="rightContentOfProgram">
            <div class="program_title">{{this.infoData.data.data.title}}</div>
            <div class="program_decsription">{{this.infoData.data.data.description}}</div>
            <!--<div class="program_author">作者：<span>陈方仲</span></div>-->
        </div>
    </div>
</template>
<script>
    export default {
        
        props:{
            infoData:{
                type:Object,
                require:true,
                default(){  //保证传入的不为undefined
                    return{
                            data:{
                            data:{
                                title:'',
                                description:'',
                                thumbs:{
                                    large_thumb:''
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</script>