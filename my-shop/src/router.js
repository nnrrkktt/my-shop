import { createRouter, createWebHistory } from 'vue-router';
import AdminDashboard from './pages/AdminDashboard.vue';
import ManageProducts from './pages/ManageProducts.vue';
import ManageReviews from './pages/ManageReviews.vue';
import LoginPage from './pages/LoginPage.vue'; 
import ProfilePage from './pages/ProfilePage.vue'; 

const routes = [
  {
    path: '/',
    component: AdminDashboard,
    children: [
      { path: '', component: ManageProducts }, 
      { path: 'reviews', component: ManageReviews },
    ],
  },
  {
    path: '/admin',
    component: AdminDashboard,
    children: [
      { path: 'products', component: ManageProducts },
      { path: 'reviews', component: ManageReviews },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage,
    meta: { requiresGuest: true } 
  },
  {
    path: '/profile',
    name: 'Profile',
    component: ProfilePage,
    meta: { requiresAuth: true } 
  },
];

const router = createRouter({
  history: createWebHistory('/my-shop/'),
  routes,
});
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('authUser');
  
  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/login'); 
  } else if (to.meta.requiresGuest && isAuthenticated) {
    next('/profile'); 
  } else {
    next(); 
  }
});

export default router;