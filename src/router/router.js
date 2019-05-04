import Home from '../views/Home.vue'

export default [
  {
    path: '/',
    alias: '/home_page',
    name: 'home',
    component: Home,
    props: route => ({
      food: route.query.food
    }),
    beforeEnter: (to, from, next) => {
      next()
    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    props: {
      food: 'banana'
    },
    meta: {
      title: '关于'
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue')
  },
  {
    path: '/argu/:name',
    name: 'argu',
    component: () => import('@/views/argu.vue'),
    props: true
  },
  {
    path: '/parent',
    name: 'parent',
    component: () => import('@/views/parent.vue'),
    children: [
      {
        path: 'child',
        component: () => import('@/views/child.vue')
      }
    ]
  },
  {
    path: '/named_view',
    components: {
      default: () => import('@/views/child.vue'),
      email: () => import('@/views/email.vue'),
      tel: () => import('@/views/tel.vue')
    }
  },
  {
    path: '/main',
    redirect: {
      name: 'home'
    }
  },
  {
    path: '/store',
    component: () => import('@/views/store.vue')
  },
  {
    path: '/count-to',
    name: 'count-to',
    component: () => import('@/views/count-to.vue')
  },
  {
    path: '/split-pane',
    name: 'split-pane',
    component: () => import('@/views/split-pane.vue')
  },
  {
    path: '*',
    component: () => import('@/views/error_404.vue')
  }
]
