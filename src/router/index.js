import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      title:'HTML Handbook'
    }
  },
  {
    path: '/spinners/',
    name: 'Spinners',
    component: ()=> import('../views/Spinners.vue'),
    meta:{
      title:'Spinners | HTML Handbook'
    }
  },
  {
    path: '/buttons/',
    name: 'Buttons',
    component: ()=> import('../views/Buttons.vue'),
    meta:{
      title:'Buttons | HTML Handbook'
    }
  },
  {
    path: '/toggles/',
    name: 'Toggles',
    component: ()=> import('../views/Toggles.vue'),
    meta:{
      title:'Toggle | HTML Handbook'
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || "HTML Handbook";
  next();
});
export default router
