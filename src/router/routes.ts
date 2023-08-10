import type { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/test/parallax',
    name: 'TestParallax',
    component: () => import('@/views/TestParallax.vue'),
  }
]
