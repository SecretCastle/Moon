<template>
    <div class="refresh_wrap" @touchstart="touchStart"  @touchmove="touchMove" @touchend="touchEnd">
        <slot name="fresh">
            
        </slot>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                startY:0,
                moveY:0,
                isMove:false,
                scrollHeight:0
            }
        },
        props:{
            scrollType:{
                type:String,
                require:false,
                default:'topTobottom' //滚动刷新
            },
            onRefresh:{
                type:Function,
                require:true
            }
        },
        created(){
            this.$store.commit('HAS_DONE',true);
        
        },
        mounted(){
            this.scrollHeight = this.$el.scrollHeight;
        },
        updated(){
            this.scrollHeight = this.$el.scrollHeight;
        },
        methods:{
            touchStart(e){
                //e.preventDefault();
                this.isMove = true;
                this.startY = e.touches[0].pageY;
                console.log(this,this.scrollType);
            },
            touchMove(e){
                //e.preventDefault();
                if(!this.isMove){
                    return;
                }
                this.moveY = e.touches[0].pageY - this.startY;
                if(this.scrollType === 'bottomTotop'){
                    if(this.moveY  < 100 && document.body.scrollTop === 0){
                        this.$el.style.transform = `translate3d(0,${this.moveY}px,0)`;
                        this.$el.style.webkitTransform = `translate3d(0,${this.moveY}px,0)`;
                    }
                }
            },
            touchEnd(e){
                if(!this.isMove){
                    return;
                }
                if(this.scrollType === 'bottomTotop'){
                    this.$el.style.transform = `translate3d(0,0,0)`;
                    this.$el.style.webkitTransform = `translate3d(0,0,0)`;
                    console.log('touch end',document.body.scrollTop,this.moveY);
                    if(document.body.scrollTop === 0){
                         this.onRefresh();
                    }
                   
                   
                }else if(this.scrollType === 'topTobottom'){
                    console.log(document.body.scrollTop,this.scrollHeight-100);
                    if(document.body.scrollTop > this.scrollHeight - 1500){
                        //when topTobottom
                        this.onRefresh();
                    }
                }
            }
        }
    }    
</script>
