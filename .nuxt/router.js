import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6de47927 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _05838508 = () => interopDefault(import('../pages/registrate.vue' /* webpackChunkName: "pages/registrate" */))
const _4cff440d = () => interopDefault(import('../pages/reset.vue' /* webpackChunkName: "pages/reset" */))
const _e66c17b0 = () => interopDefault(import('../pages/resetpassword.vue' /* webpackChunkName: "pages/resetpassword" */))
const _155208cd = () => interopDefault(import('../pages/verification.vue' /* webpackChunkName: "pages/verification" */))
const _b78653e0 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/login",
    component: _6de47927,
    name: "login"
  }, {
    path: "/registrate",
    component: _05838508,
    name: "registrate"
  }, {
    path: "/reset",
    component: _4cff440d,
    name: "reset"
  }, {
    path: "/resetpassword",
    component: _e66c17b0,
    name: "resetpassword"
  }, {
    path: "/verification",
    component: _155208cd,
    name: "verification"
  }, {
    path: "/",
    component: _b78653e0,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
