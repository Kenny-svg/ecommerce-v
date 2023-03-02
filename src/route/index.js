import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/pages/HomeView.vue'
import ProductDetails from '../views/pages/ProductDetails.vue'
import ProductCategory from '../views/pages/ProductCategory.vue'
import CartComponent from '../views/pages/CartComponent.vue'
import NotFound from '../views/pages/NotFound.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/',
        name: 'home',
        component: HomeView,
      },
      {
        path: '/product/:id',
        name: 'product',
        component: ProductDetails,
        props: true
      },
      {
        path: '/products/category/:category',
        name: 'product-category',
        component: ProductCategory,
        props: true
      },
      {
        path: '/cart',
        name: 'cart',
        component: CartComponent
      },

      {
      path: '/:catchAll(.*)',
      name: NotFound,
      component: NotFound
      },
      // {
      //   path: '/product/:id',
      //   name: 'product',
      //   component: ProductDetails,
      //   props: true
      // },
    ]
  })
  
  export default router