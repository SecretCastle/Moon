<template>
    <!--增加判断。PC or Mobile-->
    <div class="refresh_wrap" ref="fresh_scroll" @mousewheel = "wheelFn" v-if="platform">
        <slot name="fresh"></slot>
    </div>
    <div class="refresh_wrap" ref="fresh_scroll" @touchstart = "touchStart" @touchmove="touchMove" @touchend = "touchEnd" v-else>
        <slot name="fresh"></slot>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                startY:0,
                moveY:0,
                isMove:false,
                scrollHeight:0,
                platform:false,  // false mobile , true pc
                scrollTop:0,
                hasData:true
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
            this.platform = this.$store.state.IS_PC;
        },
        mounted(){
            this.scrollHeight = this.$el.scrollHeight;
            window.addEventListener('scroll',this.scrollFn);
        },
        updated(){
            this.scrollHeight = this.$el.scrollHeight;
        },
        methods:{
            wheelFn(e){
                if(e.deltaY > 0){ //down
                    this.PublicFn();
                    this.isMove = true;
                }
            },
            touchStart(e){
                this.isMove = true;
                this.startY = e.touches[0].pageY;
                // console.log('touchstart',this.startY,this.scrollTop,this.scrollHeight);
            },
            touchMove(e){
               if(!this.isMove){
                    return;
               }
               this.$el.style.transform = "translate3d(0,-50px,0)";
               this.$el.style.transition = "transform 0.3s ease-in-out";
            },
            touchEnd(e){
                this.$el.style.transform = "translate3d(0,0,0)";
                this.$el.style.transition = "transform 0.3s ease-in-out";
                let minusVal = this.scrollHeight - document.documentElement.clientHeight + 65 ;
                console.log(minusVal,this.scrollHeight,this.scrollTop);
                if(this.scrollTop === minusVal ){
                    if(this.hasData){
                        this.onRefresh();
                    }
                }
            },
            scrollFn(){
                this.scrollTop = document.body.scrollTop;
            },
            noMoreFn(bool){
                this.hasData = bool;
                console.log(this.hasData);
            },
            /* PC */
            PublicFn(){
                let minusVal = this.scrollHeight - document.documentElement.clientHeight + 64 ;
                console.log(minusVal,this.scrollHeight,this.scrollTop);
                if(this.scrollTop === minusVal){
                    if(this.hasData){
                        this.onRefresh();
                        //console.log(this.scrollHeight,this.scrollTop,this.$el.offsetHeight,this.$el.clientHeight,document.documentElement.clientHeight);
                    }   
                }
            }

            /* Mobile */
        }
    }    
</script>
