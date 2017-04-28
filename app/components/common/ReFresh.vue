<template>
    <div ref="scroller" id = "scroll_wrap" @touchstart = "touchStart" @touchmove = "touchMove" @touchend = "touchEnd">
        <div class="scroll_top_title">刷新</div>
        <slot name = "s1">s1的东西</slot>
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
            refreshState:{
                type:Boolean,
                require:false
            },
            onRefresh:{
                type:Function,
                require:false,
                default :undefined
            }
        },

        methods:{
            touchStart(e){
                e.preventDefault();
                this.startY = e.changedTouches[0].pageY;
                this.isTap = true;
            },
            touchMove(e){
                e.preventDefault();
                if(!this.isTap){
                    return;
                }
                this.isMove = true;
                this.isMoveY = e.changedTouches[0].pageY - this.startY;
                if(this.isMoveY < 80){
                    this.$el.style.transform = `translateY(${this.isMoveY}px)`;
                    this.$el.style.transition = 'transform 100ms ease-out';
                }
            },
            touchEnd(e){
                e.preventDefault();
                if(!this.isMove){
                    return;
                }
                if(this.isMoveY < 80){
                    this.$el.style.transform = `translateY(0)`;
                    this.$el.style.transition = 'transform 100ms ease-out';
                }else{
                    this.onRefresh();
                }
                this.isTap = false;
                this.isMove = false;
            },
            onFresh(){
                console.log('这是fresh组件中的onFresh方法');
                this.$el.style.transform = `translateY(0)`;
                this.$el.style.transition = 'transform 100ms ease-out';
            }
        }
    }
</script>