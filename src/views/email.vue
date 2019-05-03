<template>
  <div class="email">
    email: initiald0824@163.com
    <button @click="handleClick">click me</button>
  </div>
</template>

<script>
export default {
  name: 'email',
  mounted () {
    console.log(this.$bus)
  },
  methods: {
    handleClick () {
      this.$bus.$emit('on-click', 'hello')
    }
  }
}
</script>

<style scoped>
.email {
  border: 1px solid green
}
</style>
