<template>
  <div class="split-pane-wrapper">
    <div class="pane pane-left" :style="{ width: leftOffsetPercent }"></div>
    <div></div>
    <div class="pane pane-right" :style="{ left: leftOffsetPercent }"></div>
  </div>
</template>

<script>
export default {
  name: 'SplitPane',
  data () {
    return {
      leftOffset: 0.3
    }
  },
  computed: {
    leftOffsetPercent () {
      return `${this.leftOffset * 100}%`
    }
  }
}
</script>

<style scoped lang="less">
.split-pane-wrapper {
  height: 100%;
  width: 100%;
  position: relative;
  .pane {
    position: absolute;
    top: 0;
    height: 100%;
    &-left {
      width: 30%;
      background: red
    }
    &-right {
      right: 0;
      bottom: 0;
      left: 30%;
      background: green
    }
  }
}
</style>
