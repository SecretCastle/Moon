<template>
    <div class="play_board_progress">
        <progress></progress>
    </div>
</template>

<script>
    export default {
        props: {
            playDuration: {
                type: Number,
                require: true
            }
        },
        computed: {
            duration() {
                return this.playDuration;
            }
        }
    }
</script>