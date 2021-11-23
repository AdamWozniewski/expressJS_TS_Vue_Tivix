import { createWebHistory, createRouter } from 'vue-router';
import Home from '@/views/dashboard/Home.vue';
import Login from '@/views/auth/Login.vue';
import CreateUser from '@/views/auth/CreateUser.vue';
import WildCard from '@/views/WildCard.vue';
import Admin from '@/views/dashboard/Admin.vue';
import Favourities from '@/views/dashboard/Favourities.vue';
import VideoSearch from '@/views/dashboard/VideoSearch.vue';
import store from '@/store/index';
import getCookie from '@/assets/cookie';

const routes: any = [
  {
    path: '/',
    redirect: {
      name: 'Home',
    },
  }, {
    path: '/home',
    name: 'Home',
    component: Home,
    beforeEnter: (to: string, from: string, next: Function) => {
      if (getCookie('JWT')) next();
      else next('login');
    },
    redirect: {
      name: 'VideoSearch',
    },
    children: [{
      name: 'VideoSearch',
      path: 'video-search',
      component: VideoSearch,
    }, {
      name: 'Account',
      path: 'account',
      component: Home,

    }, {
      name: 'Favourities',
      path: 'favourities',
      component: Favourities,
    }, {
      name: 'Admin',
      path: 'admin',
      component: Admin,
      beforeEnter: (to: string, from: string, next: Function) => {
        const data: any = store.state;
        if (data.user.user.roles.includes('admin')) next();
        next('/error-404');
      },
    }],
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/create-user',
    name: 'CreateUser',
    component: CreateUser,
  },
  {
    path: '/error-404',
    name: 'WildCard',
    component: WildCard,
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: {
      name: 'WildCard',
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;