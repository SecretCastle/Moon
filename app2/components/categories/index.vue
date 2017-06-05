<template>
    <div class="categories_wrap main_content_wrap flex-left">
        <cate-item v-for = "item in resData" :item-data="item" :key = "item.id"></cate-item>
    </div>
</template>

<script>
    import CateItem from './categorie_item';
    import axios from 'axios';

    export default {
        components: {
            CateItem
        },
        computed: {
            resData() {
                return this.$store.state.CATEGORIESDATA;
            }
        },
        mounted() {
            this.$store.commit('NAVTITLE', '');
            this.$store.commit('HAS_DONE', true);
        }
    }
</script>