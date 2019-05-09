<template>
  <div>
    <input v-model="userName">
    <input type="password" v-model="password">
    <button @click="handleSubmit">登录</button>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      userName: '',
      password: ''
    }
  },
  methods: {
    handleSubmit () {
    }
  }
}
</script>

<style scoped>

</style>
