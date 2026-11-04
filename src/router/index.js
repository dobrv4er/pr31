import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import ProductListPage from '../pages/ProductListPage.vue'
import ProductDetailPage from '../pages/ProductDetailPage.vue'
import LoginPage from '../pages/LoginPage.vue'
import ProtectedPage from '../pages/ProtectedPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Home', component: HomePage },
    { path: '/products', name: 'Products', component: ProductListPage },
    {
      path: '/products/:id',
      name: 'ProductDetail',
      component: ProductDetailPage,
      props: true,
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginPage,
      meta: { guestOnly: true },
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: ProtectedPage,
      meta: { requiresAuth: true },
    },
  ],
})

router.beforeEach((to) => {
  const isLoggedIn = localStorage.getItem('token') === 'demo'

  if (to.meta.requiresAuth && !isLoggedIn) {
    return { name: 'Login' }
  }
  if (to.meta.guestOnly && isLoggedIn) {
    return { name: 'Dashboard' }
  }
})
export default router