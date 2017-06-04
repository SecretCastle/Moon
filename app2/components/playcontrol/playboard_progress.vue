<template>
    <div class="play_board_progress">
        <progress></progress>
    </div>
</template>

<script>
    export default {
        props: {
            playObject: {
                type: Object,
                require: true
            }
        },
        computed: {
            duration() {
                return this.playObject;
            }
        }
    }
</script>