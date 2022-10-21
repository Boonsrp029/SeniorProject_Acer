//import LoginPage from '@/views/LoginPage.vue'
//import SignupPage from '@/views/SignupPage.vue'
import ChangeStatusPage from '@/views/ChangeEQStatus.vue'
import ForgotPassword from '@/views/ForgotPassword.vue'
import LoginPage from '@/views/LoginPage.vue'
import MainPage from '@/views/MainPage.vue'
import RegisterPage from '@/views/RegisterPage.vue'
import RepairPage from '@/views/RepairPage.vue'
import SignUp from '@/views/SignupPage.vue'
import { createRouter, createWebHistory  } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'mainpage',
    component: MainPage
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage
  },
  {
    path: '/registeradmin',
    name: 'registeradmin',
    component: SignUp
  },
  {
    path: '/forgot',
    name: 'forgotpassword',
    component: ForgotPassword
  },
  {
    path: '/registeritem',
    name: 'registeritem',
    component: RegisterPage
  },
  {
    path: '/changestatus',
    name: 'changestatus',
    component: ChangeStatusPage
  },
  {
    path: '/repair',
    name: 'repairpage',
    component: RepairPage
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // },
]

const router = createRouter({
  history: createWebHistory (),
  routes
})

export default router
