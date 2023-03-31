import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Home from '@/views/Home'
import Browse from '@/components/Browse'
import Heijunka from '@/views/Heijunka'
import Counter from '@/components/Counter'
import Chart from '@/components/Chart'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
Vue.use(Router)
Vue.use(Vuetify)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/browse',
      name: 'browse',
      component: Browse
    },
    {
      path: '/heijunka',
      name: 'heijunka',
      component: Heijunka
    },
    {
      path: '/horas',
      name: 'horas',
      component: Counter
    },
    {
      path: '/test',
      name: 'test',
      component: Chart
    }
  ]
})
