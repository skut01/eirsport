import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
import Presentation from './components/Presentation.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/equipe', component: Presentation },
]

const router = createRouter({
  history: createWebHistory('/eirsport/'),
  routes,
  scrollBehavior() {
    return { top: 0 } 
  },
})

export default router