import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/Mahasiswa',
      name: 'mahasiswa',
      component: () => import('@/components/MahasiswaForm.vue')
    },
    {
      path: '/Dosen',
      name: 'dosen',
      component: () => import('@/components/DosenForm.vue')
    },
    {
      path: '/Ruangan',
      name: 'ruangan',
      component: () => import('@/components/RuanganForm.vue')
    }
  ]
})

export default router
