import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0d23f59e = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _6864d768 = () => interopDefault(import('..\\pages\\products.vue' /* webpackChunkName: "pages/products" */))
const _3f21ef3e = () => interopDefault(import('..\\pages\\registrate.vue' /* webpackChunkName: "pages/registrate" */))
const _4eee5fd2 = () => interopDefault(import('..\\pages\\reset.vue' /* webpackChunkName: "pages/reset" */))
const _9298539c = () => interopDefault(import('..\\pages\\resetpassword.vue' /* webpackChunkName: "pages/resetpassword" */))
const _60febd83 = () => interopDefault(import('..\\pages\\verification.vue' /* webpackChunkName: "pages/verification" */))
const _2fc6621a = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _0d23f59e,
    name: "login"
  }, {
    path: "/products",
    component: _6864d768,
    name: "products"
  }, {
    path: "/registrate",
    component: _3f21ef3e,
    name: "registrate"
  }, {
    path: "/reset",
    component: _4eee5fd2,
    name: "reset"
  }, {
    path: "/resetpassword",
    component: _9298539c,
    name: "resetpassword"
  }, {
    path: "/verification",
    component: _60febd83,
    name: "verification"
  }, {
    path: "/",
    component: _2fc6621a,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
