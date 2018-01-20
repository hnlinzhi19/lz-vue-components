<template>
    <div>Hello {{ World }}! <ComponentA /></div>
</template>

<script>
import ComponentA from './ComponentA';
import World from './World';

export default {
    data() {
        return {
            World
        };
    },
    components: {
        ComponentA
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
