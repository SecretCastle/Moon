<template>
    <div class="item_detail_wrap">
        <program-info></program-info>
        <program-list></program-list>
    </div>
</template>

<script>
    import ProgramInfo from './programinfo';
    import ProgramList from './programlist';
    export default {
        components:{
            ProgramInfo,
            ProgramList
        }

    }
</script>
