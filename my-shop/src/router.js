import { createRouter, createWebHistory } from 'vue-router';
import ManageProducts from './pages/ManageProducts.vue';
import BedLinenPage from './pages/categories/BedLinenPage.vue';
import BlanketsPage from './pages/categories/BlanketsPage.vue';
import ComfortersPage from './pages/categories/ComfortersPage.vue';
import PillowsPage from './pages/categories/PillowsPage.vue';
import ContactsPage from './pages/categories/ContactsPage.vue'; 
import MessagePage from './pages/categories/MessagePage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: ManageProducts
  },
   {
    path: '/category/manage',
    name: 'Головна',
    component: ManageProducts
  },
  {
    path: '/category/bedding',
    name: 'BedLinen',
    component: BedLinenPage
  },
  {
    path: '/category/blankets',
    name: 'Blankets',
    component: BlanketsPage
  },
  {
    path: '/category/comforters',
    name: 'Comforters',
    component: ComfortersPage
  },
  {
    path: '/category/pillows',
    name: 'Pillows',
    component: PillowsPage
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: ContactsPage
  },
  {
path:'/message',
name: 'Відгуки',
component: MessagePage
  },
];

const router = createRouter({
  history: createWebHistory('/my-shop/'),
  routes
});

export default router;