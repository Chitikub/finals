import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import Shop from '../components/Shop.vue';
import About from '../components/About.vue';
import Signin from '../components/Signin.vue';
import Signup from '../components/Signup.vue';
import Profile from '../components/Profile.vue';
import Cart from '../components/Cart.vue';



const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/shop', name: 'Shop', component: Shop },
  { path: '/about', name: 'About', component: About },
  { path: '/signin', name: 'Signin', component: Signin },
  { path: '/Signup', name: 'Signup', component: Signup },
  { path: '/profile', name: 'Profile', component: Profile },
  { path: '/cart', name: 'Cart', component: Cart },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
