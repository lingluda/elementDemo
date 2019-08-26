import Vue from 'vue'
import Router from 'vue-router'
import ps from '../utils/ps'
Vue.use(Router)

import hothip from '@/page/tour_heat/index.vue'

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {requireAuth: false},
      component: resolve => {
        require(['@/page/home.vue'], resolve)
      },
      children:[
        {
          path: '/',
          redirect: '/index',
        },
        {
          "path": "/index",
          "name": "index",
          meta: {requireAuth: "index"},
          component:hothip,
        },
        {
          path: '/situation',
          name: 'situation',
          meta: {requireAuth: 'situation'},
          component: resolve => {
            require(['@/page/tour_heat/dd.vue'], resolve)
          }
        },
        {
          path: '/role',
          name: 'role',
          meta: {requireAuth: 'role'},
          component: resolve => {
            require(['@/page/sysManage/role.vue'], resolve)
          }
        },
        {
          path: '/user',
          name: 'user',
          meta: {requireAuth: 'user'},
          component: resolve => {
            require(['@/page/sysManage/upload.vue'], resolve)
          }
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      meta: {requireAuth: false},
      component: resolve => {
        require(['@/page/login.vue'], resolve)
      },
    }
  ]
})
//切换页面回到顶部
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0);
})
// 拦截登录，token验证
router.beforeEach((to, from, next) => {
  console.log(typeof to.meta.requireAuth)
  console.log(to.meta.requireAuth)
  console.log(localStorage.getItem('token'))
  var fruits = ["index", "Orange", "Apple", "Mango"];
  var a = fruits.indexOf(to.meta.requireAuth)
  console.log('aaaaa:::',a)
  if (to.meta.requireAuth) {
    //console.log('value of token',ps.getCookie('token'))
    if (localStorage.getItem('token')) {
      next()
    } else {
      next({
        path: '/login'
      })
    }
  } else {
    next()
  }
})
export default router
