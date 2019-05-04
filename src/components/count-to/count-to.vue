<template>
  <div>
    <slot name="left"></slot>
    <span ref="number" :class="countClass" :id="eleId"></span>
    <slot name="right"></slot>
  </div>
</template>

<script>
import CountUp from 'countup'
import './count-to.less'
export default {
  name: 'count-to',
  computed: {
    eleId () {
      return `count_up_${this._uid}`
    },
    countClass () {
      return [
        'count-to-number',
        this.className
      ]
    }
  },
  data () {
    return {
      counter: {}
    }
  },
  watch: {
    endVal (newVal, oldVal) {
      this.counter.update(newVal)
      setTimeout(() => {
        this.$nextTick(() => {
          this.$emit('on-animation-end', Number(this.getCount()))
        })
      }, this.duration * 1100)
    }
  },
  props: {
    startVal: {
      type: Number,
      default: 0
    },
    endVal: {
      type: Number,
      default: 100
    },
    decimals: {
      type: Number,
      default: 0
    },
    duration: {
      type: Number,
      default: 1
    },
    useEasing: {
      type: Boolean,
      default: false
    },
    useGrouping: {
      type: Boolean,
      default: true
    },
    separator: {
      type: String,
      default: ','
    },
    decimal: {
      type: String,
      default: '.'
    },
    delay: {
      type: Number,
      default: 0
    },
    className: {
      type: String,
      default: ''
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.counter = new CountUp(this.eleId, this.startVal, this.endVal, this.duration, {
        useEasing: this.useEasing,
        useGrouping: this.useGrouping,
        separator: this.separator,
        decimal: this.decimal
      })
    })
    setTimeout(() => {
      this.counter.start()
    }, this.delay)
  },
  methods: {
    getCount () {
      console.log('inner', this.$refs.number.innerText)
      return this.$refs.number.innerText
    }
  }
}
</script>

<style scoped>

</style>
