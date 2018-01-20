<template>
    <div>Hello {{ World }}! </div>
</template>

<script>
import World from './World';

export default {
    data() {
        return {
            World
        };
    },
    mounted(){
        this.$toast('xxxx');
    }
};
</script>


<style lang="less">
    @color: blue;

    div {
        color: @color;
    }
</style>

<style scoped>
    div {
        font-size: 32px;
    }
</style>
