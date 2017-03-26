import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import EquView from '@/router/EquView'
import SetView from '@/router/SetView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'hello',
      component: Hello
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
    }
  ]
})
