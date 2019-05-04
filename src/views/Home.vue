<template>
  <div class="home">
    <button @click="handleClick('back')">返回上一页</button>
    <button @click="handleClick('push')">跳转</button>
    <b>{{food}}</b>
    <button @click="getInfo">请求数据</button>
  </div>
</template>

<script>
// @ is an alias to /src
import { getUserInfo } from '../api/user'

export default {
  name: 'home',
  beforeRouteEnter (to, from, next) {
    next(vm => {
      console.log('vm', vm)
    })
  },
  beforeRouteLeave (to, from, next) {
  },
  methods: {
    handleClick (type) {
      if (type === 'back') {
        this.$router.back()
      } else if (type === 'push') {
        const name = 'initiald'
        this.$router.push({
          path: `/argu/${name}`
        })
      }
    },
    getInfo () {
      getUserInfo({userId: 21}).then(res => {
        console.log('res:', res)
      })
    }
  },
  props: {
    food: {
      type: String,
      default: 'apple'
    }
  }
}
</script>
