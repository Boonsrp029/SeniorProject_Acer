import MainPage from '@/views/MainPage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'mainpage',
    component: MainPage
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ "@/views/LoginPage.vue")
  },
  {
    path: '/registeradmin',
    name: 'registeradmin',
    component: () => import(/* webpackChunkName: "registeradmin" */ "@/views/SignupPage.vue")
  },
  {
    path: '/forgot',
    name: 'forgotpassword',
    component: () => import(/* webpackChunkName: "forgotpassword" */ "@/views/ForgotPassword.vue")
  },
  {
    path: '/registeritem',
    name: 'registeritem',
    component: () => import(/* webpackChunkName: "registeritem" */ "@/views/RegisterPage.vue")
  },
  {
    path: '/changestatus',
    name: 'changestatus',
    component: () => import(/* webpackChunkName: "changestatus" */ "@/views/ChangeEQStatus.vue")
  },
  {
    path: '/repair',
    name: 'repairpage',
    component: () => import(/* webpackChunkName: "repairpage" */ "@/views/RepairPage.vue")
  },
  {
    path: '/eqdetail/:id',
    name: 'eqdetail',
    component: () => import(/* webpackChunkName: "eqdetail" */ "@/views/EQDetailPage.vue")
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
