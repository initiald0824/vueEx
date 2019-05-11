import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'
import { getToken, setToken } from '../lib/util'
import store from '@/store'

Vue.use(Router)

const router = new Router({
  routes
})

router.beforeEach((to, from, next) => {
  const token = getToken()
  if (token) {
    store.dispatch('authorization').then((res) => {
      if (to.name === 'login') {
        next({ name: 'home' })
      } else {
        next()
      }
    }).catch(() => {
      setToken('')
      next({ name: 'login' })
    })
  } else {
    if (to.name === 'login') {
      next()
    } else {
      next({ name: 'login' })
    }
  }
})

export default router
