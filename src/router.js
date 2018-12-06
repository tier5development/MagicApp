import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Demo from './components/Demo.vue';
import Login from './components/Auth/Login/Login.vue';
import ChangePassword from './components/Auth/ChangePassword/ChangePassword.vue';
import CreateNewZap from './components/dashboard/CreateNewZap/CreateNewZap.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/demo',
      name: 'Demo',
      component: Demo,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/ChangePassword',
      name: 'ChangePassword',
      component: ChangePassword,
    },
    {
      path: '/dashboard/createnewzap',
      name: 'CreateNewZap',
      component: CreateNewZap
    },
  ],
});
