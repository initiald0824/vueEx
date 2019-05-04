<template>
  <div>
    <count-to :end-val="endVal" ref="countTo" @on-animation-end="handleEnd">
      <span slot="left">金额: </span>
      <span slot="right">元</span>
    </count-to>
    <button @click="getNumber">获取数值</button>
    <button @click="up">更新值</button>
  </div>
</template>

<script>
import CountTo from '@/components/count-to/count-to.vue'
export default {
  name: 'count-to-view',
  components: {
    CountTo
  },
  data () {
    return {
      endVal: 100
    }
  },
  methods: {
    getNumber () {
      this.$refs.countTo.getCount()
    },
    up () {
      this.endVal += Math.random() * 100
    },
    handleEnd (endVal) {
      console.log('endVal', endVal)
    }
  }
}
</script>

<style scoped>

</style>
