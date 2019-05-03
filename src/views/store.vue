<template>
  <div>
    <a-input v-model="stateValue" />
    <p>{{ stateValue }} -> LastLetter is {{ inputValueLastLetter }}</p>
<!--    <a-show :content="inputValue"></a-show>-->
    <p>appName: {{ appName }}</p>
    <p>user: {{ userName }}, {{appNameWithVersion}}</p>
    <button @click="handleChangeAppName">修改appName</button>
    <button @click="handleChangeUserName">修改用户名</button>
    <button @click="register">动态注册模块</button>
    <p v-for="li in todoList" :key="li">{{li}}</p>
  </div>
</template>

<script>
import AInput from '_c/AInput.vue'
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  name: 'store',
  data () {
    return {
      inputValue: ''
    }
  },
  components: {
    AInput
  },
  computed: {
    ...mapState({
      userName: state => state.user.userName,
      todoList: state => state.todo ? state.todo.todoList : []
    }),
    stateValue: {
      get () {
        return this.$store.state.stateValue
      },
      set (value) {
        this.SET_STATE_VALUE(value)
      }
    },
    ...mapGetters([
      'appNameWithVersion'
    ]),
    inputValueLastLetter () {
      return this.inputValue.substr(-1, 1)
    },
    appName () {
      return this.$store.state.appName
    },
    appNameWithVersion () {
      return this.$store.getters.appNameWithVersion
    }
    // ...mapState({
    //   appName: state => state.appName,
    //   userName: state => state.user.userName
    // })
    // appName () {
    //   return this.$store.state.appName
    // },
    // userName () {
    //   return this.$store.state.user.userName
    // }
  },
  methods: {
    ...mapMutations([
      'SET_USER_NAME',
      'SET_APP_NAME',
      'SET_STATE_VALUE'
    ]),
    ...mapActions([
      'updateAppName'
    ]),
    handleInput (value) {
      this.inputValue = value
    },
    handleChangeAppName () {
      // this.$store.commit('SET_APP_NAME', {
      //   appName: 'newAppName'
      // })
      // this.SET_APP_NAME({
      //   appName: 'newAppName'
      // })
      this.updateAppName()
    },
    handleChangeUserName () {
      this.SET_USER_NAME('ttt')
    },
    register () {
      this.$store.registerModule('todo', {
        state: {
          todoList: [
            'test1',
            'test2'
          ]
        }
      })
    },
    handleStateValueChange (val) {
      this.SET_STATE_VALUE(val)
    }
  }
}
</script>

<style scoped>

</style>
