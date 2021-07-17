import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('../views/index.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('../views/home.vue')
      },
      {
        path: 'player',
        name: 'player',
        component: () => import('../views/player.vue')
      },
      {
        path: 'singer',
        name: 'singer',
        component: () => import('../views/singer.vue')
      },
      {
        path: 'mine',
        name: 'mine',
        component: () => import('../views/mine.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
