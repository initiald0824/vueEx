import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'
import { setTitle } from '../lib/util'

Vue.use(Router)

const router = new Router({
  routes
})

const HAS_LOGINED = false

router.beforeEach((to, from, next) => {
  to.meta && setTitle(to.meta.title)
  if (to.name !== 'login') {
    if (HAS_LOGINED) {
      next()
    } else {
      next({
        name: 'login'
      })
    }
  } else {
    if (HAS_LOGINED) {
      next({
        name: 'home'
      })
    } else {
      next()
    }
  }
})

router.afterEach((to, from) => {
  // loigning false
})

export default router
