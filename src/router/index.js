import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue')
  },
  {
    path: '/favorites',
    name: 'Favorites',
    component: () => import(/* webpackChunkName: "Favorites" */ '../views/Favorites.vue')
  },
  {
    path: '/b',
    redirect: {
      name: 'Home'
    }
  },
  {
    path: '/b/:breed',
    name: 'Breed',
    component: () => import(/* webpackChunkName: "Breed" */ '../views/Breed.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
