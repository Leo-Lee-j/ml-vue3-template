import { createApp } from 'vue'
import App from './App.vue'
import router, { setupRouter } from './router'
import { setupStore } from '@/store'
import registerFilters from '@/filters'

async function bootstrap () {
  const app = createApp(App)
  // 注册
  registerFilters(app)
  // 挂载状态管理
  setupStore(app)
  // 挂载路由
  await setupRouter(app)
  // 路由准备就绪后挂载APP实例
  await router.isReady()
  app.mount('#app')
}

void bootstrap()

