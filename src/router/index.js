import { createRouter, createWebHistory } from 'vue-router';
import CartPage from '../views/Customer/CartPage.vue';
import ProductDetailPage from '../views/Customer/ProductDetailPage.vue';
import ProductsPage from '../views/Customer/ProductsPage.vue';
//import NotFoundPage from '../views/Customer/NotFoundPage.vue';

const routes = [
  { 
    path: '/products', // link này cho khách hàng xem 
    name: 'Products',
    component: ProductsPage,
  }, {
    path: '/products/:id', // link này cho khách hàng xem 
    name: 'ProductDetail',
    component: ProductDetailPage,
  }, {
    path: '/cart', // link này cho khách hàng xem 
    name: 'Cart',
    component: CartPage,
  },
  {
    path: '/admin', // Admin xem
    name: 'admin',
    component: () => import('../views/AdminView.vue'),
    children: [
      {
        path: 'productmanagement',
        component: () => import('../views/Admin/ProductManagement.vue'),
        props: true
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
