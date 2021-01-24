import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _27976ff1 = () => interopDefault(import('..\\pages\\admin\\index.vue' /* webpackChunkName: "pages/admin/index" */))
const _0488100c = () => interopDefault(import('..\\pages\\categoryes.vue' /* webpackChunkName: "pages/categoryes" */))
const _6564a28b = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _c8c27e9c = () => interopDefault(import('..\\pages\\products.vue' /* webpackChunkName: "pages/products" */))
const _5f599a24 = () => interopDefault(import('..\\pages\\registrate.vue' /* webpackChunkName: "pages/registrate" */))
const _447f6d71 = () => interopDefault(import('..\\pages\\reset.vue' /* webpackChunkName: "pages/reset" */))
const _36670ce8 = () => interopDefault(import('..\\pages\\resetpassword.vue' /* webpackChunkName: "pages/resetpassword" */))
const _51f746e9 = () => interopDefault(import('..\\pages\\verification.vue' /* webpackChunkName: "pages/verification" */))
const _63f01f1d = () => interopDefault(import('..\\pages\\admin\\banner.vue' /* webpackChunkName: "pages/admin/banner" */))
const _20385255 = () => interopDefault(import('..\\pages\\admin\\categories\\index.vue' /* webpackChunkName: "pages/admin/categories/index" */))
const _cb330066 = () => interopDefault(import('..\\pages\\admin\\products\\index.vue' /* webpackChunkName: "pages/admin/products/index" */))
const _428ed4a7 = () => interopDefault(import('..\\pages\\admin\\subcategories\\index.vue' /* webpackChunkName: "pages/admin/subcategories/index" */))
const _68f0e5fd = () => interopDefault(import('..\\pages\\admin\\categories\\_id.vue' /* webpackChunkName: "pages/admin/categories/_id" */))
const _6d87dd16 = () => interopDefault(import('..\\pages\\admin\\products\\_id.vue' /* webpackChunkName: "pages/admin/products/_id" */))
const _4547d4cf = () => interopDefault(import('..\\pages\\admin\\subcategories\\_id.vue' /* webpackChunkName: "pages/admin/subcategories/_id" */))
const _c8860118 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _27976ff1,
    name: "admin"
  }, {
    path: "/categoryes",
    component: _0488100c,
    name: "categoryes"
  }, {
    path: "/login",
    component: _6564a28b,
    name: "login"
  }, {
    path: "/products",
    component: _c8c27e9c,
    name: "products"
  }, {
    path: "/registrate",
    component: _5f599a24,
    name: "registrate"
  }, {
    path: "/reset",
    component: _447f6d71,
    name: "reset"
  }, {
    path: "/resetpassword",
    component: _36670ce8,
    name: "resetpassword"
  }, {
    path: "/verification",
    component: _51f746e9,
    name: "verification"
  }, {
    path: "/admin/banner",
    component: _63f01f1d,
    name: "admin-banner"
  }, {
    path: "/admin/categories",
    component: _20385255,
    name: "admin-categories"
  }, {
    path: "/admin/products",
    component: _cb330066,
    name: "admin-products"
  }, {
    path: "/admin/subcategories",
    component: _428ed4a7,
    name: "admin-subcategories"
  }, {
    path: "/admin/categories/:id",
    component: _68f0e5fd,
    name: "admin-categories-id"
  }, {
    path: "/admin/products/:id",
    component: _6d87dd16,
    name: "admin-products-id"
  }, {
    path: "/admin/subcategories/:id",
    component: _4547d4cf,
    name: "admin-subcategories-id"
  }, {
    path: "/",
    component: _c8860118,
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
