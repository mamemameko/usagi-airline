import { createRouter, createWebHistory } from 'vue-router'
import Top from '../views/Top.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Top
    },
    {
      path: '/introduction',
      component: () => import('../views/Introduction.vue')
    },
    {
      path: '/ask-name',
      component: () => import('../views/AskName.vue')
    },
    {
      path: '/ask-address',
      component: () => import('../views/AskAddress.vue')
    },
    {
      path: '/ask-destination',
      component: () => import('../views/AskDestination.vue')
    },
    {
      path: '/ticket',
      component: () => import('../views/Ticket.vue')
    },
  ]
})

export default router
