<template>
  <transition name="fade">
    <div class="toast" v-show="visible">{{msg}}</div>
  </transition>
</template>
<script>
  export default {
    name: 'lz-toat',
    data() {
      return {
        visible: false,
        msg: '',
      };
    },
  };

</script>

<style lang="scss" scoped>
  .toast {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.6);
    padding: 5px 10px;
    max-width: 80%;
    border-radius: 10px;
    font-size: 14px;
    color: #fff;
    line-height: 26px;
    text-align: center;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: transform .5s
  }

  .fade-enter,
  .fade-leave-active {
    transform: translate(-50%, -50%) scale(0);
  }

</style>
