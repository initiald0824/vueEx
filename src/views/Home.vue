<template>
  <div class="home">
<!--    <button @click="handleClick('back')">返回上一页</button>-->
<!--    <button @click="handleClick('push')">跳转</button>-->
<!--    <b>{{food}}</b>-->
<!--    <button @click="getInfo">请求数据</button>-->
<!--    <button @click="handleLogout">退出登录</button>-->
    <Row>
      <i-col></i-col>
    </Row>
    <Row :gutter="10">
      <i-col span="8"></i-col>
      <i-col span="8"></i-col>
      <i-col span="8"></i-col>
    </Row>
  </div>
</template>

<script>
// @ is an alias to /src
import { getUserInfo } from '../api/user'
import { mapActions } from 'vuex'
export default {
  name: 'home',
  beforeRouteEnter (to, from, next) {
    next(vm => {
      console.log('vm', vm)
    })
  },
  beforeRouteLeave (to, from, next) {
    next()
  },
  methods: {
    ...mapActions([
      'logout'
    ]),
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
      getUserInfo({ userId: 21 }).then(res => {
        console.log('res:', res)
      })
    },
    handleLogout () {
      this.logout()
      this.$router.push({
        name: 'login'
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
<style lang="less">
.home {
  .ivu-col {
    height: 50px;
    background: pink;
    background-clip: content-box;
    margin-top: 10px;
  }
}
</style>
