import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/library',
    name: 'library',
    // 路由懶加載：只有走到這一頁才會載入資源，效能更好！
    component: () => import('../views/LibraryView.vue'),
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('../views/BlogView.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
