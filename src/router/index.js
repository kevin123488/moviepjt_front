import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LikeMovieView from '../views/LikeMovieView.vue'
import RecommendMovieView from '../views/RecommendMovieView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/likemovie',
    name: 'likemovie',
    component: LikeMovieView
  },
  {
    path: '/recommendmovie',
    name: 'recommendmovie',
    component: RecommendMovieView
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
