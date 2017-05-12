<template>
    <div class="toast_wrap" v-show="toast">
        <div class="toast_main">
            <div class="title">提示</div>
            <div class="line"></div>
            <div class="content">
                {{msg}}
            </div>
            <div class="line"></div>
            <div class="btnWrap flex-left">
                <span @touchstart = "confirm_start" @touchend="confirm_end" id="confirmBtn">确定</span>
                <span @touchstart = "cancel_start" @touchend="cancel_end" id= "cancelBtn">取消</span>
            </div>
        </div>
    </div>
</template>

<script>
   

    export default {
        data(){
            return {
                 confirmBtn : document.getElementById('confirmBtn'),
                 cancelBtn : document.getElementById('cancelBtn')
            }
        },
        updated(){
            if(this.toast){
                document.body.classList.add('noScrollScreen');
            }else{
                 document.body.classList.remove('noScrollScreen');
            }
        },
        computed:{
            toast(){
                return this.$store.state.toast;
            },
            msg(){
                return this.$store.state.msg;
            }
        },
        methods:{
            confirm_start(e){
                e.preventDefault();
                confirmBtn.classList.add('ontap');
                
            },
            confirm_end(e){
                confirmBtn.classList.remove('ontap');
                this.$store.commit('TOAST_STATE',{
                    bol:false
                })
            },
            cancel_start(e){
                e.preventDefault();
                cancelBtn.classList.add('ontap');
            },
            cancel_end(e){
                cancelBtn.classList.remove('ontap');
                this.$store.commit('TOAST_STATE',{
                    bol:false
                })
            }
        }
    }
</script>