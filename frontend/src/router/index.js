import { createRouter, createWebHistory } from 'vue-router'
import About from '../views/AboutView'
import HomeView from '../views/HomeView'
import Login from '../views/LoginView'
import Signup from '../views/SignupView'
import DeleteUser from '../views/DeleteUser'
import LandingView from '../views/LandingView'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup
  },
  {
    path: '/deleteUser',
    name: 'deleteUser',
    component: DeleteUser
  },
  {
    path: '/landingview',
    name: 'landingview',
    component: LandingView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
