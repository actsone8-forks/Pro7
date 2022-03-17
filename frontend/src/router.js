import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Dogs from './views/Dogs.vue'
import Cats from './views/Cats.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
        path: '/cats',
        name: 'cats',
        component: Cats
      },
      {
        path: '/dogs',
        name: 'dogs',
        component: Dogs
      }
    ]
  })
