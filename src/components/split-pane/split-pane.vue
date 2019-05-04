<template>
  <div class="split-pane-wrapper">
    <div class="pane pane-left"></div>
    <div></div>
    <div class="pane pane-right"></div>
  </div>
</template>

<script>
export default {
  name: 'SplitPane'
}
</script>

<style scoped lang="less">
.split-pane-wrapper {
  height: 100%;
  width: 100%;
  .pane {
    height: 100%;
  }
}
</style>
