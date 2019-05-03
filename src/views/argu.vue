<template>
  <div>
    {{name}}
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: [String, Number],
      default: 'initiald'
    }
  }
}
</script>

<style scoped>

</style>
