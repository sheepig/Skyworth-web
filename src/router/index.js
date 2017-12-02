import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home.vue'
import JoinUs from '../pages/joinus.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/pages/joinus',
      name: 'JoinUs',
      component: JoinUs
    }
  ]
})
