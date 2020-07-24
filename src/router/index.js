import Vue from 'vue'
import VueRouter from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { setPageTitle, getSessionStorage } from '../libs/util'
import config from '../libs/config'
import { checkPermission } from '../libs/core'
import Login from '../views/login/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    meta: {
      title: '登录'
    },
    component: Login
  },
  {
    path: '/main',
    name: 'Main',
    meta: {
      title: '首页'
    },
    component: () => import('../views/main/index.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  // exclude whiteList
  if (config.whiteList.includes(to.path)) {
    next()
  // validate token
  } else if (getSessionStorage('AUTH-TOKEN')) {
    // validate permission
    checkPermission(to).then(resp => {
      resp ? next(resp) : next()
    })
  // to login
  } else {
    next('/')
  }
})

router.afterEach((to) => {
  document.title = setPageTitle(to.meta.title)
  NProgress.done()
})

export default router
