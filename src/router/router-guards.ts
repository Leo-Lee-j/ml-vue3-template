import { Router } from 'vue-router'

export function createRouterGuards (router: Router) {
  router.beforeEach(async (to, from, next) => {
    next()
  })

  router.afterEach((to, _, failure) => {
  })

  router.onError((error) => {
    console.debug(error, '路由错误')
  })
}
