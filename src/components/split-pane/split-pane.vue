<template>
  <div class="split-pane-wrapper" ref="outer">
    <div class="pane pane-left" :style="{ width: leftOffsetPercent }">
      <slot name="left"></slot>
    </div>
    <div class="pane-trigger-con" @mousedown="handleMouseDown"
         :style="{ left: triggerLeft, width: `${triggerWidth}px` }" ></div>
    <div class="pane pane-right" :style="{ left: leftOffsetPercent, paddingLeft: `${this.triggerWidth / 2}px` }">
      <slot name="right"></slot>
    </div>
    </div>
</template>

<script>
export default {
  name: 'SplitPane',
  data () {
    return {
      leftOffset: 0.3,
      canMove: false,
      initOffset: 0
    }
  },
  props: {
    triggerWidth: {
      type: Number,
      default: 8
    },
    min: {
      type: Number,
      default: 0.1
    },
    max: {
      type: Number,
      default: 0.9
    }
  },
  computed: {
    leftOffsetPercent () {
      return `${this.leftOffset * 100}%`
    },
    triggerLeft () {
      return `calc(${this.leftOffset * 100}% - ${this.triggerWidth / 2}px)`
    }
  },
  methods: {
    handleClick () {
      this.leftOffset -= 0.02
    },
    handleMouseDown (event) {
      document.addEventListener('mousemove', this.handleMouseMove)
      document.addEventListener('mouseup', this.handleMouseUp)
      this.canMove = true
      this.initOffset = event.pageX - event.srcElement.getBoundingClientRect().left
    },
    handleMouseUp () {
      this.canMove = false
    },
    handleMouseMove (event) {
      if (!this.canMove) {
        return
      }
      const outerRect = this.$refs.outer.getBoundingClientRect()
      const offsetPercent = (event.pageX - outerRect.left - this.initOffset + this.triggerWidth / 2) / outerRect.width
      if (offsetPercent < this.min) {
        this.leftOffset = this.min
      } else if (offsetPercent > this.max) {
        this.leftOffset = this.max
      } else {
        this.leftOffset = offsetPercent
      }
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
      background: red
    }
    &-right {
      right: 0;
      bottom: 0;
      background: green
    }
    &-trigger-con {
      height: 100%;
      background: black;
      position: absolute;
      top: 0;
      z-index: 10;
      user-select: none;
      cursor: col-resize;
    }
  }
}
</style>
