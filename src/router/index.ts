import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Agreements/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/index.vue')
    },
    // {
    //   path: '/agreements',
    //   name: 'agreements',
    //   component: () => import('@/views/Agreements/index.vue')
    // },
    {
      path: '/agreement',
      name: 'agreement',
      component: () => import('@/views/Agreements/AgreementDetail.vue')
    },
    {
      path: '/passports',
      name: 'passports',
      component: () => import('@/views/Passports/index.vue')
    },
    {
      path: '/passport',
      name: 'passport',
      component: () => import('@/views/Passports/PassportDetail.vue')
    },
    {
      path: '/users',
      name: 'users',
      component: () => import('@/views/Users/index.vue')
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('@/views/Users/UserDetail.vue')
    },
    {
      path: '/companies',
      name: 'companies',
      component: () => import('@/views/Companies/index.vue')
    },
    {
      path: '/company',
      name: 'company',
      component: () => import('@/views/Companies/CompanyDetail.vue')
    }
  ]
})

export default router
