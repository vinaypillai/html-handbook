import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/spinners/',
    name: 'Spinners',
    component: ()=> import('../views/Spinners.vue')
  },
  {
    path: '/buttons/',
    name: 'Buttons',
    component: ()=> import('../views/Buttons.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
