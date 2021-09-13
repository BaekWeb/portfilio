import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Port from '../views/Port.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/port/:id',
    name: 'Port',
    component: Port,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      // console.log(to.hash);
      const options = {
        top: document.querySelector(to.hash).offsetTop,
        behavior: "smooth"
      }
      window.scrollTo(options)
    } else {
      // console.log(top);
      return {top: 0, left: 0}
    }
  }
})

export default router
