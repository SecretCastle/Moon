<template>
    <div class="panel_content_item" v-if="isPositiveProportion"  @click ="clickTap">
        <img src="../../assets/default.jpg" />
        <span>{{homeItem.title}}</span>
    </div>
</template>

<script>
    import Public from '../../utils/public';
    export default {
        data() {
            return {
                url: {
                    src: ''
                }
            }
        },
        props: {
            homeItem: {
                type: Object,
                require: false
            }
        },
        mounted() {
            Public.preImgLoad(this.homeItem.thumb).then((res) => {
                if (typeof res === 'object') {
                    this.url = res;

                }
            }).catch((err) => {

            });
        },
        computed: {
            //让图片不为1:1的不显示
            isPositiveProportion() {
                if (this.url.width / this.url.height === 1) {
                    return true;
                }
            }
        },
        updated() {
            if (this.$el.childNodes.length > 0) {
                this.$el.childNodes[0].src = this.url.src;
            }
        },
        methods: {
            clickTap() {
                //直播中没有parent_info，这里过滤
                if (this.homeItem.parent_info) {
                    console.log(this.homeItem);
                    this.$store.commit('NAVTITLE', this.homeItem.parent_info.parent_name);
                    this.$router.push({
                        path: `/program/${this.homeItem.parent_info.parent_id}`
                    });
                } else {
                    this.$store.commit('TOAST_STATE', {
                        bol: true,
                        msg: `${this.homeItem.title}，没有子栏目`
                    });
                }

            }
        }
    }
</script>