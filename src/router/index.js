import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/router/Home'
import EquView from '@/router/EquView'
import SetView from '@/router/SetView'
import AddView from '@/router/Add'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: EquView
    },
    {
      path: '/equ',
      name: 'equView',
      component: EquView
    },
    {
      path: '/set',
      name: 'setView',
      component: SetView
    },
    {
      path: '/add',
      name: 'addView',
      component: AddView
    }
  ]
})
