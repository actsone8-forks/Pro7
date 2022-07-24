import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/AboutView'
import HomeView from '../views/HomeView'
import LoginView from '../views/LoginView'
import SignupView from '../views/SignupView'
import DeleteUser from '../views/DeleteUser'
import LandingView from '../views/LandingView'
import { userCanAccessRoute } from '@/utils/authGuard'

const routes = [
  {
    path: '/',
    name: 'homeView',
    component: HomeView
  },
  {
    path: '/about',
    name: 'aboutView',
    component: AboutView
  },
  {
    path: '/login',
    name: 'loginView',
    component: LoginView
  },
  {
    path: '/signup',
    name: 'signupView',
    component: SignupView
  },
  {
    path: '/deleteUser',
    name: 'deleteUser',
    component: DeleteUser
  },
  {
    path: '/landing',
    name: 'landingView',
    component: LandingView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});


router.beforeEach((to, from, next) => {
  // Exclude login and signup pages from the auth guard
  if (to.name === 'loginView' || to.name === 'signupView') {
    next();
  }
  return userCanAccessRoute(to, from, next)
})
export default router
