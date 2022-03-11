import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { createRouterGuards } from './router-guards'
import { App } from 'vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/views/layout/index.vue'),
    // redirect: 'dashboard',
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('../views/home/index.vue'),
        meta: {
          keepAlive: true,
          title: 'Home',
          icon: 'home'
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior: () => ({ left: 0, top: 0 })
})

export function setupRouter (app: App) {
  app.use(router)
  // 创建路由守卫
  createRouterGuards(router)
}

export default router
