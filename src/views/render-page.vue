<template>
  <div @click="handleClick">
    <ul @click.stop="handleClick">
      <li v-for="item in list" :key="item.name">{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'render',
  data () {
    return {
      list: [
        { name: 'lison' },
        { name: 'lili' }
      ]
    }
  },
  methods: {
    handleClick (event) {
      console.log(event)
    }
  }
}
</script>

<style scoped>

</style>
