import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6863d9e2 = () => interopDefault(import('..\\pages\\admin\\index.vue' /* webpackChunkName: "pages/admin/index" */))
const _01cc2a2b = () => interopDefault(import('..\\pages\\categoryes.vue' /* webpackChunkName: "pages/categoryes" */))
const _4ab815ba = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _f47069ba = () => interopDefault(import('..\\pages\\products.vue' /* webpackChunkName: "pages/products" */))
const _6369cc55 = () => interopDefault(import('..\\pages\\registrate.vue' /* webpackChunkName: "pages/registrate" */))
const _29d2e0a0 = () => interopDefault(import('..\\pages\\reset.vue' /* webpackChunkName: "pages/reset" */))
const _84e5648a = () => interopDefault(import('..\\pages\\resetpassword.vue' /* webpackChunkName: "pages/resetpassword" */))
const _da789e4c = () => interopDefault(import('..\\pages\\verification.vue' /* webpackChunkName: "pages/verification" */))
const _3cb0f34c = () => interopDefault(import('..\\pages\\admin\\banner.vue' /* webpackChunkName: "pages/admin/banner" */))
const _53ef4a74 = () => interopDefault(import('..\\pages\\admin\\categories\\index.vue' /* webpackChunkName: "pages/admin/categories/index" */))
const _44cff07e = () => interopDefault(import('..\\pages\\admin\\products\\index.vue' /* webpackChunkName: "pages/admin/products/index" */))
const _02d5aad4 = () => interopDefault(import('..\\pages\\admin\\subcategories\\index.vue' /* webpackChunkName: "pages/admin/subcategories/index" */))
const _135a56ae = () => interopDefault(import('..\\pages\\admin\\categories\\_id.vue' /* webpackChunkName: "pages/admin/categories/_id" */))
const _23fbfa66 = () => interopDefault(import('..\\pages\\admin\\products\\_id.vue' /* webpackChunkName: "pages/admin/products/_id" */))
const _4978da7e = () => interopDefault(import('..\\pages\\admin\\subcategories\\_id.vue' /* webpackChunkName: "pages/admin/subcategories/_id" */))
const _fddf1aba = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/admin",
    component: _6863d9e2,
    name: "admin"
  }, {
    path: "/categoryes",
    component: _01cc2a2b,
    name: "categoryes"
  }, {
    path: "/login",
    component: _4ab815ba,
    name: "login"
  }, {
    path: "/products",
    component: _f47069ba,
    name: "products"
  }, {
    path: "/registrate",
    component: _6369cc55,
    name: "registrate"
  }, {
    path: "/reset",
    component: _29d2e0a0,
    name: "reset"
  }, {
    path: "/resetpassword",
    component: _84e5648a,
    name: "resetpassword"
  }, {
    path: "/verification",
    component: _da789e4c,
    name: "verification"
  }, {
    path: "/admin/banner",
    component: _3cb0f34c,
    name: "admin-banner"
  }, {
    path: "/admin/categories",
    component: _53ef4a74,
    name: "admin-categories"
  }, {
    path: "/admin/products",
    component: _44cff07e,
    name: "admin-products"
  }, {
    path: "/admin/subcategories",
    component: _02d5aad4,
    name: "admin-subcategories"
  }, {
    path: "/admin/categories/:id",
    component: _135a56ae,
    name: "admin-categories-id"
  }, {
    path: "/admin/products/:id",
    component: _23fbfa66,
    name: "admin-products-id"
  }, {
    path: "/admin/subcategories/:id",
    component: _4978da7e,
    name: "admin-subcategories-id"
  }, {
    path: "/",
    component: _fddf1aba,
    name: "index"
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decode(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
