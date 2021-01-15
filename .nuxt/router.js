import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3425ea12 = () => interopDefault(import('..\\pages\\categoryes.vue' /* webpackChunkName: "pages/categoryes" */))
const _72e8e56e = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _e3fb2222 = () => interopDefault(import('..\\pages\\products.vue' /* webpackChunkName: "pages/products" */))
const _478aad21 = () => interopDefault(import('..\\pages\\registrate.vue' /* webpackChunkName: "pages/registrate" */))
const _5203b054 = () => interopDefault(import('..\\pages\\reset.vue' /* webpackChunkName: "pages/reset" */))
const _4b9d296f = () => interopDefault(import('..\\pages\\resetpassword.vue' /* webpackChunkName: "pages/resetpassword" */))
const _1ba0e2b4 = () => interopDefault(import('..\\pages\\verification.vue' /* webpackChunkName: "pages/verification" */))
const _ad7d7b52 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    path: "/categoryes",
    component: _3425ea12,
    name: "categoryes"
  }, {
    path: "/login",
    component: _72e8e56e,
    name: "login"
  }, {
    path: "/products",
    component: _e3fb2222,
    name: "products"
  }, {
    path: "/registrate",
    component: _478aad21,
    name: "registrate"
  }, {
    path: "/reset",
    component: _5203b054,
    name: "reset"
  }, {
    path: "/resetpassword",
    component: _4b9d296f,
    name: "resetpassword"
  }, {
    path: "/verification",
    component: _1ba0e2b4,
    name: "verification"
  }, {
    path: "/",
    component: _ad7d7b52,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
