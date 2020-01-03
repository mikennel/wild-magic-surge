import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _public = {
  main: () => import('@/components/routed/Public/Main.vue'),
  home: () => import('@/components/routed/Public/Home.vue'),
}

const authorizeEntry = (options) => {
  const main = require('../src/main')
  const auth = main.auth
  if (!auth.currentUser) return options.next({name: 'PublicHome', query: {redirect: options.to.fullPath}})
  options.next()
}

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: _public.main,
      children: [
        {
          path: '/',
          name: 'PublicHome',
          component: _public.home,
          meta: {
            transIndex: 0,
          },
        },
      ],
    },
  ]
})

export default router