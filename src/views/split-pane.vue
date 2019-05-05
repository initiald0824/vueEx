<template>
  <div class="split-pane-con">
    <split-pane>
      <div slot="left">left</div>
      <div slot="right">right</div>
    </split-pane>
  </div>
</template>

<script>
import SplitPane from '_c/split-pane'
export default {
  name: 'split-pane-view',
  components: {
    SplitPane
  }
}
</script>

<style scoped lang="less">
.split-pane-con {
  width: 400px;
  height: 200px;
  background: pink;
}
</style>
