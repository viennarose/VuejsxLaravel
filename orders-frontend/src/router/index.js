import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AllOrders from '../views/orders/AllOrders.vue'
import ViewOrder from '../views/orders/ViewOrders.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/orders',
      name: 'all-orders',
      component: AllOrders,
    },
    {
      path: '/orders/:id',
      name: 'view-order',
      component: ViewOrder,
      props: true
    }
  ]
})

export default router
