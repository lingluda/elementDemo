import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: resolve => {
        require(['@/page/home.vue'], resolve)
      },
      children:[
        {
          path: '/index',
          name: 'index',
          component: resolve => {
            require(['@/page/tour_heat/index.vue'], resolve)
          }
        },
      ]
    },
  ]
})
