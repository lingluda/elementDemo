import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: resolve => {
        require(['@/page/home.vue'], resolve)
      },
      children:[
        {
          path: '/',
          name: 'index',
          component: resolve => {
            require(['@/page/tour_heat/index.vue'], resolve)
          }
        },
        {
          path: '/index',
          name: 'index',
          component: resolve => {
            require(['@/page/tour_heat/index.vue'], resolve)
          }
        },
        {
          path: '/dd',
          name: 'dd',
          component: resolve => {
            require(['@/page/tour_heat/dd.vue'], resolve)
          }
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: resolve => {
        require(['@/page/login.vue'], resolve)
      },
    }
  ]
})
