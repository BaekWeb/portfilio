import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior (to, from, savedPosition) {
    // console.log(savedPosition);
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      // console.log(to.hash);
      const options = {
        top: document.querySelector(to.hash).offsetTop,
        behavior: "smooth"
      }
      window.scrollTo(options)
    } else {
      return {x: 0, y: 0}
    }
  }
})

export default router
