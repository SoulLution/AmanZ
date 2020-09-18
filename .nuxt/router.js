import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _bf5e5df6 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _670967ea = () => interopDefault(import('../pages/registrate.vue' /* webpackChunkName: "pages/registrate" */))
const _7f6b9beb = () => interopDefault(import('../pages/reset.vue' /* webpackChunkName: "pages/reset" */))
const _68478e06 = () => interopDefault(import('../pages/resetpassword.vue' /* webpackChunkName: "pages/resetpassword" */))
const _2ceabb2f = () => interopDefault(import('../pages/verification.vue' /* webpackChunkName: "pages/verification" */))
const _52ada424 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _bf5e5df6,
    name: "login"
  }, {
    path: "/registrate",
    component: _670967ea,
    name: "registrate"
  }, {
    path: "/reset",
    component: _7f6b9beb,
    name: "reset"
  }, {
    path: "/resetpassword",
    component: _68478e06,
    name: "resetpassword"
  }, {
    path: "/verification",
    component: _2ceabb2f,
    name: "verification"
  }, {
    path: "/",
    component: _52ada424,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
