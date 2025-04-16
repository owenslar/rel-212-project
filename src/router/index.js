import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GalatiansView from '../views/GalatiansView.vue'
import ThessaloniansView from '../views/ThessaloniansView.vue'
import FirstCorinthiansView from '@/views/FirstCorinthiansView.vue'
import SecondCorinthiansView from '@/views/SecondCorinthiansView.vue'
import ColossiansView from '@/views/ColossiansView.vue'
import EphesiansView from '@/views/EphesiansView.vue'
import PhilippiansView from '@/views/PhilippiansView.vue'
import PhilemonView from '@/views/PhilemonView.vue'
import PastoralsView from '@/views/PastoralsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/galatians',
      name: 'galatians',
      component: GalatiansView,
    },
    {
      path: '/thessalonians',
      name: 'thessalonians',
      component: ThessaloniansView,
    },
    {
      path: '/firstcorinthians',
      name: 'firstcorinthians',
      component: FirstCorinthiansView,
    },
    {
      path: '/secondcorinthians',
      name: 'secondcorinthians',
      component: SecondCorinthiansView,
    },
    {
      path: '/colossians',
      name: 'colossians',
      component: ColossiansView,
    },
    {
      path: '/ephesians',
      name: 'ephesians',
      component: EphesiansView,
    },
    {
      path: '/philippians',
      name: 'philippians',
      component: PhilippiansView,
    },
    {
      path: '/philemon',
      name: 'philemon',
      component: PhilemonView,
    },
    {
      path: '/pastorals',
      name: 'pastorals',
      component: PastoralsView,
    },
  ],
})

export default router
