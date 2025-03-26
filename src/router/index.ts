import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import("@/views/HomeView.vue")
  },
  {
    path: '/product',
    name: 'Product',
    component: () => import("@/views/ProductPreviewView.vue")
  },
  {
    path: '/design',
    name: 'Design',
    component: () => import("@/views/DesignView.vue")
  },
  {
    path: '/designbuild',
    name: 'DesignBuild',
    component: () => import("@/views/DesignBuildView.vue")
  },
  {
    path: '/workspace',
    name: 'WorkSpace',
    component: () => import("@/views/WorkSpaceView.vue")
  },
  {
    path: '/schema',
    name: 'Schema',
    component: () => import("@/views/schema.vue")
  },
  {
    path: '/resizecolumn',
    name: 'ResizeColumn',
    component: () => import("@/views/ResizeColumn.vue")
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
