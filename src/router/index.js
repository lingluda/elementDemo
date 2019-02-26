import Vue from 'vue'
import Router from 'vue-router'
import ps from '../utils/ps'
Vue.use(Router)

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
          path: '/index',
          name: 'index',
          meta: {requireAuth: true},
          component: resolve => {
            require(['@/page/tour_heat/index.vue'], resolve)
          }
        },
        {
          path: '/situation',
          name: 'situation',
          meta: {requireAuth: true},
          component: resolve => {
            require(['@/page/tour_heat/dd.vue'], resolve)
          }
        },
        {
          path: '/role',
          name: 'role',
          meta: {requireAuth: true},
          component: resolve => {
            require(['@/page/sysManage/role.vue'], resolve)
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
  if (to.meta.requireAuth) {
    console.log('typeof_token',typeof ps.getCookie('token'))
    console.log('token::',ps.getCookie('token'))
    if (ps.getCookie('token')) {
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
