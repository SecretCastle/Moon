<template>
    <div class="swiper" @touchstart="touchStart" @touchmove = "touchMove" @touchend = "touchEnd">
        <slot name ="swiper_img_slot"></slot>
    </div>
</template>
<script>
    import axios from 'axios';
    export default {
        data(){
            return{
                touchStartX:0,
                touchMoveX:0,
                isTap:false,
                isMove:false,
                currentIndex:0,
                imgLength:0
            }
        },
        props:{
            imgData:{
                type:Array,
                require:true
            },
            delayTime:{
                type:Number,
                require:false,
                default:2000
            },
            isDelay:{
                type:Boolean,
                require:false,
                default:false
            }
        },
        updated(){
            this.imgLength = this.imgData.length;
            //渲染Img
            this.imgData.forEach((n,i)=>{
                
                this.$el.childNodes[i].style.transform = `translate3d(${100*i}%,0,0)`;
            });
            if(this.isDelay){
                setInterval(()=>{
                    //console.log('延迟加载，滚动');
                    this.autoMoveFn();
                },this.delayTime);
               
            }
        },
        methods:{
            touchStart(e){
                this.isTap = true;
                this.touchStartX = e.targetTouches[0].pageX;
            },
            touchMove(e){
                if(!this.isTap){
                    return;
                }
                this.touchMoveX = e.targetTouches[0].pageX - this.touchStartX;
                this.isMove = true;
            },
            touchEnd(e){
                if(!this.isMove || !this.isTap){
                    return;
                }
                this.touchFn();

                this.isMove = false;
                this.isTap  = false;
            },
            touchFn(){
                if(this.touchMoveX < -100){  // right
                    if(this.currentIndex < this.imgLength -1){
                        this.currentIndex += 1;    
                    }else{
                        this.currentIndex = 0;
                    }
                    this.moveSlideFn();
                }else if(this.touchMoveX > 100){ //left
                    if(this.currentIndex < this.imgLength -1 && this.currentIndex !== 0){
                        this.currentIndex -= 1;    
                    }else{
                        this.currentIndex = 0;
                    }
                    this.moveSlideFn();
                }
            },
            moveSlideFn(){
                this.$el.style.transform = `translate3d(-${100*this.currentIndex}%,0,0)`;
                this.$el.style.transition = `transform 0.3s ease-out`;
            },
            autoMoveFn(){
                if(this.currentIndex < this.imgLength -1){
                    this.currentIndex += 1;    
                }else{
                    this.currentIndex = 0;
                }
                this.$el.style.transform = `translate3d(-${100*this.currentIndex}%,0,0)`;
                this.$el.style.transition = `transform 0.5s ease-out`;
            }
        }
    }
</script>
