<template>
    <div id = "scroll_wrap" @touchstart = "touchStart" @touchmove = "touchMove" @touchend = "touchEnd">
        <slot name = "s1">s1的东西</slot>
        <slot name = "s2">s2的东西</slot>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                startIndex : 1,
                startSize: 10,
                startY: 0,
                moveY : 0,
                isMoveY:0,
                isMove:false,
                isTap:false
            }
        },


        props:{
            refresh:{
                type:Function,
                require:false,
                default: undefined
            }
        },

        methods:{
            touchStart(e){
                this.startY = e.touches[0].pageY;
                this.isTap = true;
                console.log(this);
            },
            touchMove(e){
                if(!this.isTap){
                    return;
                }
                console.log('touch move');
                this.isMove = true;
                this.isMoveY = e.touches[0].pageY - this.startY;
                
                if(this.isMoveY <= 100){
                    this.$el.style.transform = `translateY(${this.isMoveY}px)`;
                }
            },
            touchEnd(e){
                if(!this.isMove){
                    return;
                }
                if(this.isMoveY > 100){
                    setTimeout(()=>{
                        this.$el.style.transform = `translateY(0)`;
                    },2000);   
                }else{
                    this.$el.style.transform = `translateY(0)`;
                }
               
                this.isTap = false;
                this.isMove = false;
                console.log('touch end');
            },
            onRefresh(){
                
            }
        }
    }
</script>